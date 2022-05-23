import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({ product }) => {
	const navigate = useNavigate()
	const { _id, name, price, minOrder, img, availableQuantiity, description } =
		product
	const handlePurchase = id => {
		navigate(`/purchase/${id}`)
	}
	return (
		<div>
			<div className='card bg-base-100 shadow-xl anime'>
				<figure className='px-5 pt-5'>
					<img src={img} alt={name} className='rounded-xl' />
				</figure>
				<div className='card-body items-center text-center'>
					<h2 className='card-title'>
						<span className='text-secondary'>{name}</span>
					</h2>
					<p className='text-bold'>Price: $ {price} / piece </p>
					<p className='text-bold'>
						Minimum Order Quantity: {minOrder} pcs{' '}
					</p>
					<p className='text-bold'>
						Available Quantity: {availableQuantiity}
					</p>

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
