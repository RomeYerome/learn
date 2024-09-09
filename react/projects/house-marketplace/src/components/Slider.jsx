import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/bundle';
import Spinner from './Spinner';

function Slider(listing) {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const fetchListings = async () => {
            const listingsRef = collection(db, 'listings')
            const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))

            const querySnapshot = await getDocs(q)

            let listings = []

            querySnapshot.forEach(doc => {
                listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            setListings(listings)
            setLoading(false)

        }

        fetchListings()

    }, [])

    if (loading) return <Spinner />

    if (listings.length === 0) return <></>

    return listings && (
        <>
            <p className="exploreHeading">Recommended</p>

            < Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }
                }
                scrollbar={{ draggable: true }}
            >
                {
                    listings.map((listing, index) => (
                        <SwiperSlide key={index} onClick={() => navigate(`/category/${listing.data.type}/${listing.id}`)}>
                            <div
                                className="swiperSlideDiv"
                                style={{ background: `url(${listing.data.imageUrls[0]}) no-repeat center center/cover`, minHeight: '25vh', width: '100%' }}
                            >
                                <p className="swiperSlideText">{listing.data.name}</p>
                                <p className="swiperSlidePrice">
                                    ${listing.data.discountedPrice ?? listing.data.regularPrice}
                                    {listing.data.type === 'rent' && ' / month'}
                                </p>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper >




        </>
    )
}

export default Slider