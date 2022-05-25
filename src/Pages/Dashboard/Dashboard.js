import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import { NavLink } from 'react-router-dom'
// import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
	const [user] = useAuthState(auth)
	const admin = true
	// const [admin] = useAdmin(user)
	return (
		<div class='drawer drawer-mobile'>
			<input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
			<div class='drawer-content'>
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
			<div class='drawer-side'>
				<label for='dashboard-sidebar' class='drawer-overlay'></label>
				<ul class='menu p-4 overflow-y-auto w-48 bg-black text-white font-bold'>
					{/* <!-- Sidebar content here --> */}
					<li>
						<NavLink to='/dashboard/myProfile'>My Profile</NavLink>
					</li>
					{user && (
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
