import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const MyOrder = ({ myOrder, refetch, index }) => {
	const { _id, productName, price, buyQuantity, totalPrize, status, paid } =
		myOrder
	const navigate = useNavigate()

	const handlePayment = id => {
		console.log(id, 'payment id')
		navigate(`dashboard/myOrder/:${id}`)
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
				{!paid && (
					<Link to={`/dashboard/payment/${_id}`}>
						<button className='btn btn-xs'>Pay</button>
					</Link>
				)}
				{paid && <span className='text-success'>Paid</span>}
			</td>
		</tr>
	)
}

export default MyOrder
