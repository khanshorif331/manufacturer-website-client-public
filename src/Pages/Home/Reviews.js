// import React from 'react';
// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import '../../styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const Reviews = () => {
	const {
		isLoading,
		error,
		data: reviews,
	} = useQuery('reviews', () =>
		fetch('http://localhost:5000/reviews').then(res => res.json())
	)
	console.log(reviews)
	if (isLoading) {
		return <Loading></Loading>
	}
	// const [reviews, setReviews] = useState([])
	// useEffect(() => {
	// 	fetch('http://localhost:5000/reviews')
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// }, [])

	return (
		<div>
			<h1 className='text-center text-3xl bg-primary text-white rounded-md py-2 w-full md:w-1/2 mx-auto font-bold'>
				What People Say About Us
			</h1>
			<div>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={true}
					modules={[Autoplay, EffectCoverflow, Pagination]}
					className='mySwiper'
				>
					{reviews.map(review => (
						<SwiperSlide>
							<div class='card max-h-[400px] bg-base-100'>
								<div class='avatar mx-auto pt-10'>
									<div class='w-24 mask mask-squircle'>
										<img src={review?.img} />
									</div>
								</div>
								<div class='card-body items-center text-center'>
									<p className='text-2xl font-bold text-primary'>
										{review.name}
									</p>
									<p className='text-xl font-bold'>
										{review.profession}
									</p>
									<div>
										<div class='rating rating-sm'>
											<input
												type='radio'
												name='rating-2'
												class='mask mask-star-2 bg-orange-400'
											/>
											<input
												type='radio'
												name='rating-2'
												class='mask mask-star-2 bg-orange-400'
											/>
											<input
												type='radio'
												name='rating-2'
												class='mask mask-star-2 bg-orange-400'
											/>
											<input
												readOnly
												type='radio'
												name='rating-2'
												class='mask mask-star-2 bg-orange-400'
												checked={review.rating == 4}
											/>
											<input
												readOnly
												type='radio'
												name='rating-2'
												class='mask mask-star-2 bg-orange-400'
												checked={review.rating === 5}
											/>
										</div>{' '}
										{review.rating}/5
									</div>
									<p>{review.review}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Reviews
