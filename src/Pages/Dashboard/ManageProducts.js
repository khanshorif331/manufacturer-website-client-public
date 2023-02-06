import React from 'react'
import { useQuery } from 'react-query'
import Swal from 'sweetalert2'
import Loading from '../Shared/Loading'

const ManageProducts = () => {
	const {
		isLoading,
		refetch,
		data: products,
	} = useQuery('products', () =>
		fetch(
			'https://manufacturer-website-server-public.onrender.com/products',
			{
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		).then(res => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
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
				const url = `https://manufacturer-website-server-public.onrender.com/product/${id}`
				fetch(url, {
					method: 'DELETE',
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${localStorage.getItem(
							'accessToken'
						)}`,
					},
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch()
						}
					})
				Swal.fire(
					'Deleted Successfully!',
					'Your Product has been Deleted.',
					'success'
				)
			}
		})
	}

	return (
		<div>
			<h1 className="text-center text-xl font-bold text-primary">
				Manage all products
			</h1>
			<p className="text-center text-xl font-bold text-primary my-2">
				Total Products : {products.length}
			</p>

			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>No.</th>
							<th>Photo</th>
							<th>Product Name</th>
							<th>Price Per Unit</th>
							<th>Minimum Order</th>

							<th>Action</th>
							<th>Info</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product, index) => (
							<tr key={product._id}>
								<th>{index + 1}</th>
								<td>
									<div className="avatar">
										<div className="w-16 rounded">
											<img
												src={product.img}
												alt="Tailwind-CSS-Avatar-component"
											/>
										</div>
									</div>
								</td>
								<td>{product.name}</td>
								<td>${product.price}</td>
								<td>{product.minOrder} pcs</td>

								<td>
									<button
										onClick={() => handleDelete(product._id)}
										className="btn btn-xs btn-warning"
									>
										Delete
									</button>
								</td>
								<td>
									<button className="btn btn-xs">Update</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ManageProducts
