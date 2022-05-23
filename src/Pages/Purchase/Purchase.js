import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const Purchase = () => {
	const [user] = useAuthState(auth)
	const { id } = useParams()
	const [product, setProduct] = useState({})
	const [buyQuantity, setBuyQuantity] = useState('')

	useEffect(() => {
		fetch(`http://localhost:5000/purchase/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setBuyQuantity(data.minOrder)
			})
	}, [id])
	const handleSubmit = e => {
		e.preventDefault()
		if (buyQuantity < product.minOrder) {
			return toast.error('cannot buy')
		}
		if (buyQuantity > product.availableQuantiity) {
			return toast.error(
				'Please enter a valid quantity.Available quantity exceeds.!!'
			)
		}
		toast.success(
			`Congratulations ${user.displayName}!Your order is succesfull.`
		)
		e.target.reset()
	}
	return (
		<div>
			<h1 className='text-center text-2xl mt-10'>
				Welcome {user?.displayName}!
			</h1>
			<p className='text-center'>
				Plese provide neccessary information to complete your order.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 place-content-center min-h-[80%] border-2 mt-4 w-full md:w-1/2 mx-auto py-4 rounded-lg'>
				<div className='mx-auto text-center leading-loose my-auto'>
					<img className='w-1/2 mx-auto' src={product.img} alt='' />
					<p>{product.name}</p>
					<p>Price :$ {product.price}/pc</p>
					<p>Min Order : {product.minOrder} pcs</p>
					<p>Available Quantity : {product.availableQuantiity} pcs</p>
				</div>
				{/* form section starts here*/}
				<div className='mx-auto'>
					<form onSubmit={handleSubmit}>
						<div class='form-control w-full max-w-xs'>
							<input
								type='text'
								placeholder='Type here'
								class='input input-bordered w-full max-w-xs'
								value={user?.displayName}
								disabled
							/>
						</div>
						<div class='form-control w-full max-w-xs'>
							<input
								type='text'
								placeholder='Type here'
								class='input input-bordered w-full max-w-xs'
								value={user?.email}
								disabled
							/>
						</div>
						<div class='form-control w-full max-w-xs'>
							<label class='label'>
								<span class='label-text'>What is your address?</span>
							</label>
							<input
								type='text'
								placeholder='Your Address'
								class='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						<div class='form-control w-full max-w-xs'>
							<label class='label'>
								<span class='label-text'>
									What is your Mobile Number?
								</span>
							</label>
							<input
								type='text'
								placeholder='Your Mobile Number'
								class='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						<div class='form-control w-full max-w-xs'>
							<label class='label'>
								<span class='label-text'>How much to buy?</span>
							</label>
							<input
								onChange={e => setBuyQuantity(Number(e.target.value))}
								type='number'
								value={buyQuantity}
								placeholder='Enter Quantity'
								class='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						<button
							disabled={
								buyQuantity < product.minOrder ||
								buyQuantity > product.availableQuantiity
							}
							className='btn btn-primary'
						>
							<input type='submit' value='Confirm Order' />
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Purchase
