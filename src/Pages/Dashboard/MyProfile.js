import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const MyProfile = () => {
	const [user] = useAuthState(auth)
	const email = user.email
	// const [userInfo, setUserInfo] = useState({})
	// useEffect(() => {
	// 	fetch(`http://localhost:5000/user?email=${email}`)
	// 		.then(res => res.json())
	// 		.then(data => setUserInfo(data))
	// }, [email])
	const url = `http://localhost:5000/userInfo?email=${email}`
	const {
		isLoading,
		data: userInfo,
		refetch,
	} = useQuery('userInfo', () => fetch(url).then(res => res.json()))
	console.log(userInfo)
	if (isLoading) {
		return <Loading></Loading>
	}
	const handleUpdate = e => {
		e.preventDefault()

		const updateInfo = {
			phone: e.target.phone.value,
			address: e.target.address.value,
			profession: e.target.profession.value,
		}
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updateInfo),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Successfully Updated Your Profile',
						showConfirmButton: true,
						timer: 2500,
					})
					refetch()
					e.target.reset()
				} else {
					toast('Profile already updated')
				}
			})
		// console.log(updateInfo)
	}

	// console.log(user)
	return (
		<div>
			<h1 className='text-2xl text-primary font-bold text-center uppercase'>
				My profile
			</h1>
			<div class='hero bg-base-200'>
				{/* update form starts*/}
				<form
					onSubmit={handleUpdate}
					class='hero-content grid grid-cols-1 md:grid-cols-3'
				>
					<div class='text-center lg:text-left md:col-span-2'>
						<div class='card  shadow-2xl bg-base-100'>
							<div class='card-body'>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Phone</span>
									</label>
									<input
										type='text'
										placeholder='Enter Your Mobile Number'
										class='input input-bordered'
										name='phone'
										required
									/>
								</div>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Address</span>
									</label>
									<input
										type='text'
										placeholder='Your Address'
										class='input input-bordered'
										name='address'
										required
									/>
								</div>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Profession</span>
									</label>
									<input
										type='text'
										placeholder='Enter your profession'
										class='input input-bordered'
										name='profession'
										required
									/>
								</div>
								<div class='form-control mt-6'>
									<button class='btn btn-primary'>Update</button>
								</div>
							</div>
						</div>
					</div>
					{/* profile info */}
					<div class='card w-full min-h-[70vh] max-w-sm bg-base-100 shadow-xl'>
						<div class='avatar mx-auto pt-6'>
							<div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
								<img src='https://api.lorem.space/image/face?hash=3174' />
							</div>
						</div>
						<div class='card-body'>
							<h2 class='text-2xl font-bold text-primary text-center'>
								{user?.displayName}
							</h2>
							<p className='text-center font-bold uppercase text-secondary'>
								{userInfo.role ? userInfo.role : 'Normal User'}
							</p>
							<p>
								Email :{' '}
								<span className='text-secondary'>{user.email}</span>
							</p>
							<p>
								Phone :
								<span className='text-secondary'>
									{userInfo.userInfo ? (
										userInfo.userInfo.phone
									) : (
										<span className='text-red-400'>
											Not Available
										</span>
									)}
								</span>
							</p>

							<p>
								Address :
								<span className='text-secondary'>
									{userInfo.userInfo ? (
										userInfo.userInfo.address
									) : (
										<span className='text-red-400'>
											Not Available
										</span>
									)}
								</span>
							</p>
							<p>
								Profession :
								<span className='text-secondary'>
									{userInfo.userInfo ? (
										userInfo.userInfo.profession
									) : (
										<span className='text-red-400'>
											Not Available
										</span>
									)}
								</span>
							</p>
							<div class='card-actions justify-center'>
								<Link to='/dashboard/myOrders'>
									<button class='btn btn-primary w-full block'>
										My Orders
									</button>
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default MyProfile
