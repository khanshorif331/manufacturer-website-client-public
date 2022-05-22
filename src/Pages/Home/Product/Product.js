import React from 'react'
import './Product.css'

const Product = ({ product }) => {
	// console.log(product)
	return (
		<div>
			<div className='card bg-base-100 shadow-xl anime'>
				<figure className='px-10 pt-10'>
					<img
						src='https://api.lorem.space/image/shoes?w=400&h=225'
						alt='Shoes'
						className='rounded-xl'
					/>
				</figure>
				<div className='card-body items-center text-center'>
					<h2 className='card-title'>{product.name}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
