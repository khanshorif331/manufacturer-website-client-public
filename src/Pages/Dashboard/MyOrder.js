import Swal from 'sweetalert2'

const MyOrder = ({ myOrder, refetch, index }) => {
	const { _id, productName, price, buyQuantity, totalPrize } = myOrder

	const handleDelete = id => {
		// popup
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, cancel it!',
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
