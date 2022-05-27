// import React from 'react';
// import React from 'react'
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
	const { isLoading, data: reviews } = useQuery('reviews', () =>
		fetch('http://localhost:5000/reviews').then(res => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h1 className='text-center text-3xl bg-primary text-white rounded-md py-2 w-full md:w-1/2 mx-auto font-bold border-r-4 border-red-500 border-l-4'>
				What People Say About Us
			</h1>
			<p className='w-full md:w-1/2 mx-auto text-center mt-5'>
				We are a company with growing industry.We are serving our clients
				for many years with love,respect and care.They are also showing us
				good vibe.So let's have a look of some of our happy clients
				review.We try to serve our best.
			</p>
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
						<SwiperSlide key={review._id}>
							<div className='card max-h-[400px] bg-base-100'>
								<div className='avatar mx-auto pt-10'>
									{review?.img ? (
										<div className='w-24 mask mask-squircle'>
											<img src={review.img} alt='review' />
										</div>
									) : (
										<div class='avatar placeholder'>
											<div class='bg-neutral-focus text-neutral-content rounded-full w-24'>
												<span class='text-3xl'>
													{review.name.slice(0, 1)}
												</span>
											</div>
										</div>
									)}
								</div>
								<div className='card-body items-center text-center'>
									<p className='text-2xl font-bold text-primary'>
										{review.name}
									</p>
									<p className='text-xl font-bold'>
										{review.profession}
									</p>
									<div>
										<div className='rating rating-sm'>
											<input
												type='radio'
												name='rating-2'
												className='mask mask-star-2 bg-orange-400'
											/>
											<input
												type='radio'
												name='rating-2'
												className='mask mask-star-2 bg-orange-400'
											/>
											<input
												type='radio'
												name='rating-2'
												className='mask mask-star-2 bg-orange-400'
											/>
											<input
												readOnly
												type='radio'
												name='rating-2'
												className='mask mask-star-2 bg-orange-400'
												checked={review.rating == 4}
											/>
											<input
												readOnly
												type='radio'
												name='rating-2'
												className='mask mask-star-2 bg-orange-400'
												checked={review.rating == 5}
											/>
										</div>{' '}
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
