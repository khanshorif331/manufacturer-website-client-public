import React from 'react'

const MyOrder = ({ myOrder, refetch, index }) => {
	const { _id, productName, price, buyQuantity, totalPrize } = myOrder
	const handleDelete = id => {
		console.log(id)
	}
	console.log(myOrder)
	return (
		<tr>
			<th>{index + 1}</th>
			<td>{productName}</td>
			<td>${price}</td>
			<td>{buyQuantity} pcs</td>
			<td>${totalPrize}</td>
			<td>Pending</td>
			<td>
				<button
					onClick={() => handleDelete(_id)}
					class='btn btn-xs btn-warning'
				>
					Cancel
				</button>
			</td>
			<td>
				<button class='btn btn-xs'>Pay</button>
			</td>
		</tr>
	)
}

export default MyOrder
