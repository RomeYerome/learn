import React, { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";
import { getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../components/Spinner'

function EditListing() {
    const [geoLocationEnabled, setGeoLocationEnabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [listing, setListing] = useState(null)

    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: {},
        latitude: 0,
        longitude: 0
    })

    const { type, name, bedrooms, bathrooms, parking, furnished, address, offer, regularPrice, discountedPrice, images, latitude, longitude } = formData

    const auth = getAuth()
    const navigate = useNavigate()
    const { listingId } = useParams()
    const isMounted = useRef(true)

    // Redirect if listing is not user's
    useEffect(() => {
        if (listing && listing.userRef !== auth.currentUser.uid) {
            toast.error('Unauthorized. You can only edit your own listings')
            navigate('/')
        }
    }, [])


    // Fetch listing data to edit
    useEffect(() => {
        setLoading(true)
        const fetchListings = async () => {
            const listingRef = doc(db, 'listings', listingId)
            const listingDocSnapshot = await getDoc(listingRef)

            if (listingDocSnapshot.exists()) {
                setListing(listingDocSnapshot.data())
                setFormData({ ...listingDocSnapshot.data(), address: listingDocSnapshot.data().location })
            } else {
                toast.error('Listing not found')
                navigate('/')
            }
            setLoading(false)
        }

        fetchListings()
    }, [listingId, navigate])


    // Sets userRef to logged in user
    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({ ...formData, userRef: user.uid })
                } else {
                    navigate('/sign-in')
                }
            })
        }


        return () => {
            isMounted.current = false
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted])


    if (loading)
        return <Spinner />

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (discountedPrice >= regularPrice) {
            setLoading(false)
            toast.error('Discounted price must be lower than regular price')
            return
        }

        if (images.length > 6) {
            setLoading(false)
            toast.error('You can only upload up to 6 images')
            return
        }

        let geolocation = {}
        let location

        if (geoLocationEnabled) {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)

            const data = await response.json()


            geolocation.lat = data.results[0]?.geometry.location.lat ?? 0
            geolocation.lng = data.results[0]?.geometry.location.lng ?? 0
            location =
                data.status === 'ZERO_RESULTS'
                    ? undefined
                    : data.results[0]?.formatted_address

            if (location === undefined || location.includes('undefined')) {
                setLoading(false)
                toast.error('Please enter a valid address')
                return
            }


        } else {
            geolocation.lat = latitude
            geolocation.lng = longitude

        }

        // Store Image in firestore/storage
        const storeImage = async (image) => {
            return new Promise((resolve, reject) => {
                const storage = getStorage()
                const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`

                const storageRef = ref(storage, `images/${fileName}`)

                const uploadTask = uploadBytesResumable(storageRef, image);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                        console.log(error)
                        reject(error)
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            resolve(downloadURL);
                        });
                    }
                );

            })
        }

        // Create Image Urls for multiple images
        const imageUrls = await Promise.all(
            [...images].map(image => storeImage(image))
        ).catch(() => {
            setLoading(false)
            toast.error('Images not Uploaded')
            return
        })


        // Add Listing to Firestore
        const formDataCopy = {
            ...formData,
            imageUrls,
            geolocation,
            timestamp: serverTimestamp()
        }


        formDataCopy.location = address
        delete formDataCopy.images
        delete formDataCopy.address

        location && (formData.location = location)

        !formDataCopy.offer && delete formDataCopy.discountedPrice


        // const docRef = await addDoc(collection(db, 'listings'), formDataCopy)

        // Update Listing
        const docRef = doc(db, 'listings', listingId)
        await updateDoc(docRef, formDataCopy)

        setLoading(false)

        toast.success('Listing saved')

        navigate(`/category/${formDataCopy.type}/${docRef.id}`)
    }



    const validateImages = (files) => {
        if (files.length > 6) {
            alert('You can only upload 6 images')
            return true
        }
    }


    const onMutate = (e) => {
        let boolean = null

        if (e.target.value === 'true')
            boolean = true

        if (e.target.value === 'false')
            boolean = false

        // Files
        if (e.target.files) {
            validateImages(e.target.files) && (e.target.value = '')
            setFormData({ ...formData, [e.target.id]: e.target.files })
        }

        // Text / Booleans / Numbers
        if (!e.target.files) {

            setFormData({ ...formData, [e.target.id]: boolean ?? e.target.value })
        }
    }

    return (
        <div className='profile'>
            <header>
                <p className="pageHeader">Edit Listing</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <label htmlFor="" className='formLabel'>Sell / Rent</label>
                    <div className="formButtons">
                        <button
                            type="button"
                            id='type'
                            value='sale'
                            onClick={onMutate}
                            className={type === 'sale' ? 'formButtonActive' : 'formButton'}
                        >
                            Sell
                        </button>
                        <button
                            type="button"
                            id='type'
                            value='rent'
                            onClick={onMutate}
                            className={type === 'rent' ? 'formButtonActive' : 'formButton'}
                        >
                            Rent
                        </button>
                    </div>

                    <label htmlFor="name" className='formLabel'>Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={onMutate}
                        className='formInputName'
                        maxLength='32'
                        minLength='10'
                        required
                    />

                    <div className="formRooms flex">
                        <div>
                            <label htmlFor="bedrooms" className='formLabel'>Bedrooms</label>
                            <input
                                type="number"
                                id="bedrooms"
                                value={bedrooms}
                                onChange={onMutate}
                                className='formInputSmall'
                                min='1'
                                max='50'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="bathrooms" className='formLabel'>Bathrooms</label>
                            <input
                                type="number"
                                id="bathrooms"
                                value={bathrooms}
                                onChange={onMutate}
                                className='formInputSmall'
                                min='1'
                                max='50'
                                required
                            />
                        </div>
                    </div>

                    <label htmlFor="parking" className='formLabel'>Parking spot</label>
                    <div className="formButtons">
                        <button
                            className={parking ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='parking'
                            value={true}
                            onClick={onMutate}
                            name='parking'
                        >
                            Yes
                        </button>
                        <button
                            className={!parking && parking !== null ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='parking'
                            value={false}
                            onClick={onMutate}
                            name='parking'
                        >
                            No
                        </button>
                    </div>

                    <label htmlFor="furnished" className='formLabel'>Furnished</label>
                    <div className="formButtons">
                        <button
                            className={furnished ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='furnished'
                            value={true}
                            onClick={onMutate}
                            name='furnished'
                        >
                            Yes
                        </button>
                        <button
                            className={!furnished && furnished !== null ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='furnished'
                            value={false}
                            onClick={onMutate}
                            name='furnished'
                        >
                            No
                        </button>
                    </div>

                    <label htmlFor="address" className='formLabel'>Address</label>
                    <textarea
                        id="address"
                        name='address'
                        type="text"
                        value={address}
                        onChange={onMutate}
                        className='formInputAddress'
                        required
                    />

                    {!geoLocationEnabled && (
                        <div className="formLatLng flex">
                            <div>
                                <label htmlFor="latitude" className='formLabel'>Latitude</label>
                                <input
                                    type="number"
                                    id="latitude"
                                    name='latitude'
                                    value={latitude}
                                    onChange={onMutate}
                                    className='formInputSmall'
                                    // step='0.0000001'
                                    // min='-90'
                                    // max='90'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="longitude" className='formLabel'>Longitude</label>
                                <input
                                    type="number"
                                    id="longitude"
                                    name='longitude'
                                    value={longitude}
                                    onChange={onMutate}
                                    className='formInputSmall'
                                    // min='-180'
                                    // max='180'
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <label htmlFor="offer" className='formLabel'>Offer</label>
                    <div className="formButtons">
                        <button
                            className={offer ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='offer'
                            value={true}
                            onClick={onMutate}
                            name='offer'
                        >
                            Yes
                        </button>
                        <button
                            className={!offer && offer !== null ? 'formButtonActive' : 'formButton'}
                            type="button"
                            id='offer'
                            value={false}
                            onClick={onMutate}
                            name='offer'
                        >
                            No
                        </button>
                    </div>


                    <label htmlFor="regularPrice" className="formLabel">Regular Price</label>
                    <div className="formPriceDiv">
                        <input
                            type="number"
                            id="regularPrice"
                            name='regularPrice'
                            value={regularPrice}
                            onChange={onMutate}
                            className='formInputSmall'
                            min='50'
                            max='750000000'
                            required
                        />
                        <p className='formPriceText'>{type === 'rent' ? '$ / Month' : '$'}</p>
                    </div>

                    {offer && (
                        <>
                            <label htmlFor="discountedPrice" className="formLabel">Discounted Price</label>
                            <input
                                type="number"
                                id="discountedPrice"
                                name='discountedPrice'
                                value={discountedPrice}
                                onChange={onMutate}
                                className='formInputSmall'
                                min='50'
                                max='750000000'
                                required={offer}
                            />
                            <p className='formPriceText'>$ {type === 'rent' && '/ Month'}</p>
                        </>
                    )}

                    <label htmlFor="images" className='formLabel'>Images</label>
                    <p className="imagesInfo">The first image will be the cover (max 6).</p>
                    <input
                        type="file"
                        className='formInputFile'
                        id="images"
                        name='images'
                        max='6'
                        accept=".jpg, .jpeg, .png"
                        onChange={onMutate}
                        multiple
                        required
                    />

                    <button className="primaryButton editListingButton" type='submit'>
                        Edit Listing
                    </button>
                </form>
            </main>
        </div>
    )
}

export default EditListing