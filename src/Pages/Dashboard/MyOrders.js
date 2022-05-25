import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'

const MyOrders = () => {
	const [user] = useAuthState(auth)
	const email = user.email
	const url = `http://localhost:5000/myOrders?email=${email}`

	const {
		isLoading,
		error,
		data: myOrders,
	} = useQuery('myOrders', () => fetch(url).then(res => res.json()))

	console.log(myOrders, 'myorders')
	// const [myOrders, setMyOrders] = useState([])
	// useEffect(() => {
	// 	const url = `http://localhost:5000/myOrders?email=${email}`
	// 	console.log(url)
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// }, [email])
	return (
		<div>
			<h1>My oorders here</h1>
			{myOrders.map(order => (
				<li>{order._id}</li>
			))}
		</div>
	)
}

export default MyOrders
