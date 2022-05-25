import React from 'react'
import Swal from 'sweetalert2'

const ManageOrder = ({ order, refetch, index }) => {
	console.log(order)
	const { _id, email, productName, price, buyQuantity, totalPrize } = order
	const handleDelete = id => {
		// popup
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				const url = `http://localhost:5000/myOrder/${id}`
				fetch(url, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch()
						}
					})
				Swal.fire(
					'Order Cancelled!',
					'Your order has been cancelled.',
					'success'
				)
			}
		})
	}

	return (
		<tr>
			<th>{index + 1}</th>
			<th>{email}</th>
			<td>{productName}</td>
			<td>${price}</td>
			<td>{buyQuantity} pcs</td>
			<td>${totalPrize}</td>
			<td>Pending</td>
			<td>
				<button
					onClick={() => handleDelete(_id)}
					className='btn btn-xs btn-warning'
				>
					Cancel
				</button>
			</td>
			<td>
				<button className='btn btn-xs'>Pay</button>
			</td>
		</tr>
	)
}

export default ManageOrder
