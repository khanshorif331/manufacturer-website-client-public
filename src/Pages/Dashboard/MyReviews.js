// import React from 'react'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const MyReviews = () => {
	return (
		<div className='max-h-screen'>
			<h1>My Reviews</h1>

			<div className='w-full mx-auto h-48'>
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
						<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default MyReviews
