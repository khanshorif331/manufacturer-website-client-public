import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'

const Purchase = () => {
	const [user] = useAuthState(auth)
	const { id } = useParams()
	const [product, setProduct] = useState({})
	useEffect(() => {
		fetch(`http://localhost:5000/purchase/${id}`)
			.then(res => res.json())
			.then(data => setProduct(data))
	}, [id])

	return (
		<div>
			<h1 className='text-center text-2xl mt-10'>
				Welcome {user?.displayName}!
			</h1>
			<p className='text-center'>
				Plese provide neccessary information to complete your order.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 place-content-center min-h-[80%] border-2'>
				<div className='mx-auto text-center'>
					<img className='w-1/2 mx-auto' src={product.img} alt='' />
					<p>{product.name}</p>
				</div>
				<div className='mx-auto'>
					<h1>hello</h1>
				</div>
			</div>
		</div>
	)
}

export default Purchase
