import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import ManageOrder from './ManageOrder'

const ManageOrders = () => {
	const {
		isLoading,
		refetch,
		data: orders,
	} = useQuery('orders', () =>
		fetch(
			'https://manufacturer-website-server-public.onrender.com/orders'
		).then(res => res.json())
	)

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div>
			<h1 className="text-center text-2xl text-primary font-bold">
				Manage all orders
			</h1>
			<p className="text-center text-2xl text-primary font-bold my-4">
				Total Orders : {orders.length}
			</p>

			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>No.</th>
							<th>User Email</th>
							<th>Product Name</th>
							<th>Price Per Unit</th>
							<th>Buy Quantity</th>
							<th>Total Price</th>
							<th>Status</th>
							<th>Payment</th>
							<th>Action</th>
							<th>Shipping</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<ManageOrder
								key={order._id}
								order={order}
								refetch={refetch}
								index={index}
							></ManageOrder>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ManageOrders
