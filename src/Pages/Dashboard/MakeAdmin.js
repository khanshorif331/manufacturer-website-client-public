import React from 'react'
import { useQuery } from 'react-query'
import Swal from 'sweetalert2'
import Loading from '../Shared/Loading'

const MakeAdmin = () => {
	const url = 'http://localhost:5000/users'

	const {
		isLoading,
		refetch,
		data: users,
	} = useQuery('users', () => fetch(url).then(res => res.json()))

	const handleDelete = id => {
		// popup
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, Delete User!',
		}).then(result => {
			if (result.isConfirmed) {
				const url = `http://localhost:5000/user/${id}`
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
					'User Deleted!',
					'User has been Deleted Successfully.',
					'success'
				)
			}
		})
	}

	console.log(users)
	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h1 className='text-center text-xl text-primary'>Make Admin</h1>
			<h1 className='text-center text-primary my-2'>
				Total Users : {users.length}
			</h1>

			<div class='overflow-x-auto'>
				<table class='table table-zebra w-full'>
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>No.</th>
							<th>User Id</th>
							<th>User Email</th>
							<th>Action</th>
							<th>Admin Status</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr>
								<th>{index + 1}</th>
								<td>{user._id}</td>
								<td>{user.email}</td>
								<td>
									<button
										onClick={() => handleDelete(user._id)}
										class='btn btn-xs btn-warning'
									>
										Delete User
									</button>
								</td>
								<td>
									<button class='btn btn-xs'>Make Admin</button>
								</td>
							</tr>

							// <MyOrder
							// 	key={myOrder._id}
							// 	myOrder={myOrder}
							// 	refetch={refetch}
							// 	index={index}
							// ></MyOrder>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MakeAdmin
