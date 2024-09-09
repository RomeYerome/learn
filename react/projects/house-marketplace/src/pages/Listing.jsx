import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/bundle';

import { getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'

function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    const navigate = useNavigate()

    const { listingId, categoryName } = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const docRef = doc(db, 'listings', listingId)
                const listingDocSnap = await getDoc(docRef)
                if (listingDocSnap.exists()) {
                    setListing(listingDocSnap.data())
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchListing()
    }, [navigate, listingId])

    if (loading) {
        return <Spinner />
    }

    return (
        <main>
            {/* SLIDER */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {listing.imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={url} alt={listing.name} className='swiperSlideImg' />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="shareIconDiv" onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setShareLinkCopied(true)
                setTimeout(() => {
                    setShareLinkCopied(false)
                }, 2000)
            }}>
                <img src={shareIcon} alt="share icon" />
            </div>
            {shareLinkCopied && <p className='linkCopied'>Link copied to clipboard</p>}

            <div className="listingDetails">
                <p className="listingName">
                    {listing.name} - $
                    {listing.offer
                        ? listing.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : listing.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }

                </p>
                <p className="listingLocation">{listing.location}</p>
                <p className="listingType">
                    For {listing.type === 'rent' ? 'Rent' : 'Sale'}
                </p>
                {listing.offer && (
                    <p className="discountPrice">
                        ${listing.regularPrice - listing.discountedPrice} discount
                    </p>
                )}

                <ul className="listingDetailsList">
                    <li>
                        {listing.bedrooms} {listing.bedrooms > 1
                            ? 'bedrooms'
                            : 'bedroom'}
                    </li>
                    <li>
                        {listing.bathrooms} {listing.bathrooms > 1
                            ? 'bathrooms'
                            : 'bathroom'}
                    </li>
                    <li>
                        {listing.parking && 'Parking Spot'}
                    </li>
                    <li>
                        {listing.furnished && 'Furnished'}
                    </li>



                </ul>

                <p className="listingLocationTitle">Location</p>

                {/* Map */}
                <div className="leafletContainer">
                    <MapContainer
                        style={{ height: '100%', width: '100%' }}
                        center={[listing.geolocation.lat, listing.geolocation.lng]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker
                            position={[listing.geolocation.lat, listing.geolocation.lng]}
                        >
                            <Popup>
                                {listing.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                {auth.currentUser?.uid !== listing.userRef &&
                    (
                        <Link
                            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
                            className="primaryButton">
                            Contact Landlord
                        </Link>
                    )
                }
            </div>
        </main>
    )
}

export default Listing