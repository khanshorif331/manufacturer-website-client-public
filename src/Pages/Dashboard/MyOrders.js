import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyOrders = () => {
	const [user] = useAuthState(auth)
	const email = user.email
	console.log(user)
	const [myOrders, setMyOrders] = useState([])
	useEffect(() => {
		const url = `http://localhost:5000/myOrders?email=${email}`
		console.log(url)
		fetch(url)
			.then(res => res.json())
			.then(data => console.log(data))
	}, [email])
	return (
		<div>
			<h1>My oorders here</h1>
		</div>
	)
}

export default MyOrders
