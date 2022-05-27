import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
	const [user] = useAuthState(auth)
	// const admin = true
	const [admin] = useAdmin(user)
	return (
		<div className='drawer drawer-mobile'>
			<input
				id='dashboard-sidebar'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content'>
				<h2 className='text-3xl font-bold text-purple-500 text-center my-4'>
					Welcome{' '}
					<span className='text-primary uppercase'>
						{user.displayName}
					</span>{' '}
					to Your Dashboard
				</h2>
				<Outlet></Outlet>
				{/* <!-- Page content here --> */}
			</div>
			<div className='drawer-side'>
				<label
					htmlFor='dashboard-sidebar'
					className='drawer-overlay'
				></label>
				<ul className='menu  overflow-y-auto w-48 bg-black text-white font-bold p-4 md:pt-10'>
					{/* <!-- Sidebar content here --> */}
					<li>
						<NavLink to='/dashboard/myProfile'>My Profile</NavLink>
					</li>
					{user && !admin && (
						<>
							<li>
								<NavLink to='/dashboard/myOrders'>My Orders</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/review'>My Reviews</NavLink>
							</li>
						</>
					)}

					{admin && (
						<>
							<li>
								<NavLink to='/dashboard/makeAdmin'>Make Admin</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/addProduct'>
									Add Product
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/manageProducts'>
									Manage Products
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/manageOrders'>
									Manage All Orders
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Dashboard
