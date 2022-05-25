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
	const [totalPrize, setTotalPrize] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		fetch(`http://localhost:5000/purchase/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setBuyQuantity(data.minOrder)
			})
	}, [id])

	useEffect(() => {
		setTotalPrize(buyQuantity * product.price)
		if (buyQuantity < product.minOrder) {
			return setError(`You can't order less than ${product.minOrder} pcs !`)
		}
		if (buyQuantity > product.availableQuantiity) {
			return setError('You cannot buy more than availability!')
		} else {
			setError('')
		}
	}, [buyQuantity, error])
	const handleSubmit = e => {
		e.preventDefault()

		// if (buyQuantity < product.minOrder) {
		// 	return toast.error('cannot buy')
		// }
		// if (buyQuantity > product.availableQuantiity) {
		// 	return toast.error(
		// 		'Please enter a valid quantity.Available quantity exceeds.!!'
		// 	)
		// }

		const order = {
			name: user.displayName,
			email: user.email,
			productName: product.name,
			price: product.price,
			address: e.target.address.value,
			phone: e.target.phone.value,
			buyQuantity,
			totalPrize,
		}
		fetch('http://localhost:5000/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(order),
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					toast.success(
						`Congratulations ${user.displayName}!Your order is succesfull.`
					)
					e.target.reset()
				}
			})
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
					<p>Total Price : $ {totalPrize}/= </p>
				</div>
				{/* form section starts here*/}
				<div className='mx-auto'>
					<form onSubmit={handleSubmit}>
						<div className='form-control w-full max-w-xs'>
							<input
								type='text'
								placeholder='Type here'
								className='input input-bordered w-full max-w-xs'
								value={user?.displayName}
								disabled
							/>
						</div>
						<div className='form-control w-full max-w-xs'>
							<input
								type='text'
								placeholder='Type here'
								className='input input-bordered w-full max-w-xs'
								value={user?.email}
								disabled
							/>
						</div>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>
									What is your address?
								</span>
							</label>
							<input
								type='text'
								name='address'
								placeholder='Your Address'
								className='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>
									What is your Mobile Number?
								</span>
							</label>
							<input
								type='text'
								name='phone'
								placeholder='Your Mobile Number'
								className='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>How much to buy?</span>
							</label>
							<input
								onChange={e => setBuyQuantity(Number(e.target.value))}
								type='number'
								value={buyQuantity}
								placeholder='Enter Quantity'
								className='input input-bordered w-full max-w-xs'
								required
							/>
						</div>
						{error ? <p className='text-red-500 my-1'>{error}</p> : ''}
						<button
							disabled={
								buyQuantity < product.minOrder ||
								buyQuantity > product.availableQuantiity
							}
							className='btn btn-primary cursor-pointer'
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
