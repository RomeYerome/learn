import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import ListingItem from '../components/ListingItem'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'

function Profile() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const auth = getAuth()
    const navigate = useNavigate()

    const [editable, setEditable] = useState(false)   // State to toggle between view and edit mode

    // Save user data in state to use in form
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const { name, email } = formData    // Destructure form data


    // Get user data from firestore
    useEffect(() => {
        // Fetch user listings
        const fetchUserListing = async () => {
            const listingsRef = collection(db, 'listings')

            const q = query(
                listingsRef,
                where('userRef', '==', auth.currentUser.uid),
                orderBy('timestamp', 'desc')
            )

            const querySnapshot = await getDocs(q)

            let listings = []

            querySnapshot.forEach((doc) => {
                listings.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })

            setListings(listings)
            setLoading(false)
        }

        fetchUserListing()
    }, [auth.currentUser.uid])


    // Logout function
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    // Update user profile function
    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                // Update user profile in firebase auth
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                // Update user collection in firestore
                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    name: name
                })
            }
        } catch (error) {
            toast.error('Could not update profile details')
        }
    }

    // Update form data state when user fills form
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }


    // Delete listing function
    const onDelete = async (listingId) => {
        if (window.confirm('Are you sure you want to delete this listing?')) {

            try {
                await deleteDoc(doc(db, 'listings', listingId))

                const updatedListings = listings.filter(listing => listing.id !== listingId)
                setListings(updatedListings)

                toast.success('Listing deleted successfully')
            } catch (error) {

                toast.error('Could not delete listing')

            }
        }
    }

    // Edit listing function
    const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`)



    return (
        <div className="profile">
            <header className="profileHeader">
                <p className="pageHeader">My Profile</p>
                <button type="button" className="logOut" onClick={onLogout}>
                    Log Out
                </button>
            </header>

            <main>
                <div className="profileDetailsHeader">
                    <p className="profileDetailsText">Personal Details</p>
                    <p className="changePersonalDetails" onClick={() => {
                        editable && onSubmit()
                        setEditable(!editable)
                    }}>
                        {editable ? 'done' : 'change'}
                    </p>
                </div>
                <div className="profileCard">
                    <form>
                        <input
                            type="text"
                            id='name'
                            className={!editable ? 'profileName' : 'profileNameActive'} disabled={!editable}
                            value={name}
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            id='email'
                            className={!editable ? 'profileEmail' : 'profileEmailActive'} disabled={!editable}
                            value={email}
                            onChange={onChange}
                        />
                    </form>
                </div>

                <Link
                    to='/create-listing'
                    className="createListing"
                >
                    <img src={homeIcon} alt="home icon" />
                    <p>Sell or rent your home</p>
                    <img src={arrowRight} alt="arrow right" />
                </Link>

                {!loading && listings.length > 0 && (
                    <>
                        <p className="listingText">Your Listings</p>
                        <ul className="listingList">
                            {listings.map
                                ((listing) => (
                                    <ListingItem
                                        key={listing.id}
                                        listing={listing.data}
                                        id={listing.id}
                                        onDelete={() =>
                                            onDelete(listing.id)
                                        }
                                        onEdit={() =>
                                            onEdit(listing.id)
                                        }

                                    />
                                ))
                            }
                        </ul>
                    </>
                )}
            </main>
        </div>
    )
}

export default Profile