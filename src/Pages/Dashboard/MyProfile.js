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

	const url = `https://rocky-coast-59066.herokuapp.com/userInfo?email=${email}`
	const {
		isLoading,
		data: userInfo,
		refetch,
	} = useQuery('userInfo', () => fetch(url).then(res => res.json()))
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
	}

	return (
		<div>
			<h1 className='text-2xl text-primary font-bold text-center uppercase'>
				My profile
			</h1>
			<div className='hero bg-base-200'>
				{/* update form starts*/}
				<form
					onSubmit={handleUpdate}
					className='hero-content grid grid-cols-1 md:grid-cols-3'
				>
					<div className='text-center lg:text-left md:col-span-2'>
						<div className='card  shadow-2xl bg-base-100'>
							<div className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Phone</span>
									</label>
									<input
										type='text'
										placeholder='Enter Your Mobile Number'
										className='input input-bordered'
										name='phone'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Address</span>
									</label>
									<input
										type='text'
										placeholder='Your Address'
										className='input input-bordered'
										name='address'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Profession</span>
									</label>
									<input
										type='text'
										placeholder='Enter your profession'
										className='input input-bordered'
										name='profession'
										required
									/>
								</div>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Update</button>
								</div>
							</div>
						</div>
					</div>
					{/* profile info */}
					<div className='card w-full min-h-[70vh] max-w-sm bg-base-100 shadow-xl'>
						{user.photoURL ? (
							<div className='avatar mx-auto pt-6'>
								<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
									<img src={user.photoURL} alt='img' />
								</div>
							</div>
						) : (
							<div className='avatar placeholder mx-auto pt-6'>
								<div className='bg-neutral-focus ring ring-primary ring-offset-base-100 ring-offset-2 text-neutral-content rounded-full w-24'>
									<span className='text-3xl uppercase'>
										{user.displayName.slice(0, 1)}
									</span>
								</div>
							</div>
						)}
						<div className='card-body'>
							<h2 className='text-2xl font-bold text-primary text-center'>
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
							<div className='card-actions justify-center'>
								<Link to='/dashboard/myOrders'>
									<button className='btn btn-primary w-full block'>
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
