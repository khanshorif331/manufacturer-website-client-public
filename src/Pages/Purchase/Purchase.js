import React from 'react'
import { useParams } from 'react-router-dom'

const Purchase = () => {
	const { id } = useParams()
	return (
		<div>
			<h1>This is purchase page</h1>
			<p>Product : {id}</p>
		</div>
	)
}

export default Purchase
