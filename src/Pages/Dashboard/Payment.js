import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
	'pk_test_51L1DNCDSQhYM6brtwNmSUwREJfOaTnI8RVEu5U7tRoLvCbvvPhH2BsKB07x5SJzT2UJCsYvXF6GsofraA93lunJJ00c5Oqj7Dy'
)

const Payment = () => {
	const [user] = useAuthState(auth)
	const { id } = useParams()
	const url = `http://localhost:5000/order/${id}`
	const { data: order, isLoading } = useQuery(['order', 'id'], () =>
		fetch(url, {
			method: 'GET',
			// headers: {
			// 	authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			// },
		}).then(res => res.json())
	)

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div>
			<div className='card w-50 max-w-md bg-base-100 shadow-xl my-12'>
				<div className='card-body'>
					<p className='text-success font-bold'>
						{' '}
						Hello, {user.displayName}{' '}
					</p>
					<h2 className='card-title'>Please Pay for : {order.name} </h2>
					<p>
						You ordered
						<span className='text-orange-700'>
							{order.buyQuantity} pieces
						</span>{' '}
						costs {''}
						<span> $ {order.price}</span> per unit
					</p>
					<p>Please Pay : ${order.totalPrize}</p>
				</div>
			</div>
			<div className='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100'>
				<div className='card-body'>
					<Elements stripe={stripePromise}>
						<CheckoutForm order={order} />
					</Elements>
				</div>
			</div>
		</div>
	)
}

export default Payment
