// import React from 'react';
// import React from 'react'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import '../../styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const Reviews = () => {
	return (
		<div>
			<h1 className='text-center text-3xl bg-primary text-white rounded-md py-2 w-full md:w-1/2 mx-auto font-bold'>
				What People Say About Us
			</h1>
			<div className=''>
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
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-5.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-6.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<div class='card bg-base-100 shadow-xl'>
							<figure class='px-10 pt-10'>
								<img
									src='https://api.lorem.space/image/shoes?w=400&h=225'
									alt='Shoes'
									class='rounded-xl'
								/>
							</figure>
							<div class='card-body items-center text-center'>
								<h2 class='card-title'>Shoes!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div class='card-actions'>
									<button class='btn btn-primary'>Buy Now</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* <SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
					</SwiperSlide> */}
					{/* <SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
					</SwiperSlide> */}
				</Swiper>
			</div>
		</div>
	)
}

export default Reviews
