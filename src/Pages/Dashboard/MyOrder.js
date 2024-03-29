import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const MyOrder = ({ myOrder, refetch, index }) => {
	const {
		_id,
		productName,
		price,
		buyQuantity,
		totalPrize,
		paid,
		transactionId,
	} = myOrder
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
				const url = `https://manufacturer-website-server-public.onrender.com/myOrder/${id}`
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
			<td>{productName}</td>
			<td>${price}</td>
			<td>{buyQuantity} pcs</td>
			<td>${totalPrize}</td>
			<td>{paid ? <p className="text-success">Paid</p> : 'Pending'}</td>
			<td>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-xs btn-warning"
				>
					Cancel
				</button>
			</td>
			<td>
				{!paid && (
					<Link to={`/dashboard/payment/${_id}`}>
						<button className="btn btn-xs">Pay</button>
					</Link>
				)}
				{paid && (
					<div>
						<p>
							<span className="text-success">Paid</span>
						</p>
						<p>
							Transaction Id:{' '}
							<span className="text-success">{transactionId}</span>{' '}
						</p>
					</div>
				)}
			</td>
		</tr>
	)
}

export default MyOrder
