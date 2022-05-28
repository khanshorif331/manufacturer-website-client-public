import React from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const ManageOrder = ({ order, refetch, index }) => {
	const {
		_id,
		email,
		productName,
		price,
		buyQuantity,
		totalPrize,
		status,
		paid,
		// transactionId,
	} = order

	const handleShip = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, Ship this Order!',
		}).then(result => {
			if (result.isConfirmed) {
				fetch(
					`https://rocky-coast-59066.herokuapp.com/order/shipped/${id}`,
					{
						method: 'PUT',
						headers: {
							'content-type': 'application/json',
							authorization: `Bearer ${localStorage.getItem(
								'accessToken'
							)}`,
						},
					}
				)
					.then(res => {
						if (res.status === 403) {
							toast.error('Failed to make an admin')
						}
						return res.json()
					})
					.then(data => {
						if (data.modifiedCount > 0) {
							refetch()
						}
					})
				Swal.fire(
					'Order Shipped!',
					'Successfully Shipped This Order.',
					'success'
				)
			}
		})
	}

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
				const url = `https://rocky-coast-59066.herokuapp.com/myOrder/${id}`
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
		<tr className='bg-black'>
			<th>{index + 1}</th>
			<th>{email}</th>
			<td>{productName}</td>
			<td>${price}</td>
			<td>{buyQuantity} pcs</td>
			<td>${totalPrize}</td>
			<td>{status === 'shipped' ? 'Shipped' : 'Pending'}</td>
			<td>{paid ? <span className='text-success'>Paid</span> : 'Unpaid'}</td>
			<td>
				<button
					onClick={() => handleDelete(_id)}
					className='btn btn-xs btn-warning'
				>
					Cancel
				</button>
			</td>
			<td>
				{status === 'shipped' ? (
					'Shipped'
				) : (
					<button
						disabled={!paid}
						onClick={() => handleShip(_id)}
						className='btn btn-xs'
					>
						Ship
					</button>
				)}
			</td>
		</tr>
	)
}

export default ManageOrder
