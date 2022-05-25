import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import Loading from '../Shared/Loading'

const MakeAdmin = () => {
	const url = 'http://localhost:5000/users'
	const {
		isLoading,
		refetch,
		data: users,
	} = useQuery('users', () => fetch(url).then(res => res.json()))

	const handleAdmin = (id, email) => {
		fetch(`http://localhost:5000/user/admin/${email}`, {
			method: 'PUT',
		})
			.then(res => {
				if (res.status === 403) {
					toast.error('Failed to make an admin')
				}
				return res.json()
			})
			.then(data => {
				if (data.modifiedCount > 0) {
					refetch()
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Successfully made an admin',
						showConfirmButton: true,
						timer: 2500,
					})
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

	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h1 className='text-center text-xl text-primary'>Make Admin</h1>
			<h1 className='text-center text-primary my-2'>
				Total Users : {users.length}
			</h1>

			<div className='overflow-x-auto'>
				<table className='table table-zebra w-full'>
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
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user._id}</td>
								<td>{user.email}</td>
								<td>
									<button
										onClick={() => handleDelete(user._id)}
										className='btn btn-xs btn-warning'
									>
										Delete User
									</button>
								</td>
								<td>
									{user.role === 'admin' ? (
										'Admin'
									) : (
										<button
											onClick={() =>
												handleAdmin(user._id, user.email)
											}
											className='btn btn-xs'
										>
											Make Admin
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MakeAdmin
