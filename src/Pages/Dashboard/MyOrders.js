import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'
import MyOrder from './MyOrder'

const MyOrders = () => {
	const [user] = useAuthState(auth)
	const email = user.email
	const url = `https://manufacturer-website-server-public.onrender.com/myOrders?email=${email}`

	const {
		isLoading,
		refetch,
		data: myOrders,
	} = useQuery('myOrders', () => fetch(url).then(res => res.json()))

	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h1 className="text-center text-xl font-bold text-primary">
				{' '}
				Total Orders : {myOrders.length}{' '}
			</h1>

			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>No.</th>
							<th>Product Name</th>
							<th>Price Per Unit</th>
							<th>Buy Quantity</th>
							<th>Total Price</th>
							<th>Status</th>
							<th>Action</th>
							<th>Payment</th>
						</tr>
					</thead>
					<tbody>
						{myOrders.map((myOrder, index) => (
							<MyOrder
								key={myOrder._id}
								myOrder={myOrder}
								refetch={refetch}
								index={index}
							></MyOrder>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MyOrders
