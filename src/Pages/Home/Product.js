import React from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css' // You can also use <link> for styles
// // ..
// AOS.init()

const Product = ({ product }) => {
	console.log(product)
	return (
		<div>
			<div class='card bg-base-100 shadow-xl '>
				<figure class='px-10 pt-10'>
					<img
						src='https://api.lorem.space/image/shoes?w=400&h=225'
						alt='Shoes'
						class='rounded-xl'
					/>
				</figure>
				<div class='card-body items-center text-center'>
					<h2 class='card-title'>{product.name}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class='card-actions'>
						<button class='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
