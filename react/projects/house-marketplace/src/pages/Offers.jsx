import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";


function Offers() {
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)
    const [lastFetchedListing, setLastFetchedListing] = useState(null)

    const { categoryName } = useParams()

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings')

                // Query
                const q = query(
                    listingsRef,
                    where('offer', '==', true),
                    // where('bedrooms', '==', 2),
                    orderBy('timestamp', 'desc'),
                    limit(10),
                )

                // Execute query
                const querySnapshot = await getDocs(q)

                const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

                setLastFetchedListing(lastVisible)


                let listings = []
                querySnapshot.forEach(doc => {
                    listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })


                // const listingsData = querySnapshot.docs.map(doc => doc.data())
                setListings(listings)
                setLoading(false)
            } catch (error) {
                toast.error('Failed to fetch listings')
            }
        }
        fetchListings()
    }, [])



    // Pagination / Load More
    const onLoadMoreListings = async () => {
        try {
            const listingsRef = collection(db, 'listings')

            // Query
            const q = query(
                listingsRef,
                where('offer', '==', true),
                // where('bedrooms', '==', 2),
                orderBy('timestamp', 'desc'),
                startAfter(lastFetchedListing),
                limit(10),
            )

            // Execute query
            const querySnapshot = await getDocs(q)

            const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

            setLastFetchedListing(lastVisible)


            let listings = []
            querySnapshot.forEach(doc => {
                listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })


            // const listingsData = querySnapshot.docs.map(doc => doc.data())
            setListings((prev) => [...prev, ...listings])
            setLoading(false)
        } catch (error) {
            toast.error('Failed to fetch listings')
        }
    }




    return (
        <div className="category">
            <header>
                <p className="pageHeader">
                    Offers
                </p>
            </header>
            {loading ?
                <Spinner /> :
                listings && listings.length > 0 ?
                    (
                        <>
                            <main>
                                <ul className='categoryListings'>
                                    {listings.map(listing => (
                                        <ListingItem key={listing.id} listing={listing.data} id={listing.id} />
                                    ))}
                                </ul>
                            </main>

                            <br />
                            <br />
                            {lastFetchedListing && (
                                <button className='loadMore' onClick={onLoadMoreListings}>Load More</button>
                            )}
                        </>
                    ) : (
                        <p>No Offers Available</p>
                    )
            }
        </div>
    )
}

export default Offers