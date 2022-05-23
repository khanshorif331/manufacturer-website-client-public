import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({ product }) => {
	const navigate = useNavigate()
	const { _id, name, price, minOrder, img, availableQuantity, description } =
		product
	const handlePurchase = id => {
		const url = `/purchase/${id}`
		navigate(url)
		console.log(id)
	}
	return (
		<div>
			<div className='card bg-base-100 shadow-xl anime'>
				<figure className='px-10 pt-10'>
					<img src={img} alt={name} className='rounded-xl' />
				</figure>
				<div className='card-body items-center text-center'>
					<h2 className='card-title'>{name}</h2>
					<p>{price}</p>
					<p>{minOrder}</p>
					<p>{availableQuantity}</p>
					<p>{description}</p>
					<div className='card-actions'>
						<button
							onClick={() => handlePurchase(_id)}
							className='btn btn-primary'
						>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
