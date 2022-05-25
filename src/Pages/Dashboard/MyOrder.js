import React from 'react'

const MyOrder = ({ myOrder, refetch, index }) => {
	const { _id, productName, price, buyQuantity, totalPrize } = myOrder
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
				<button class='btn btn-xs btn-warning'>Cancel</button>
			</td>
			<td>
				<button class='btn btn-xs'>Pay</button>
			</td>
		</tr>
	)
}

export default MyOrder
