import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
// import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
	const [user] = useAuthState(auth)
	const admin = true
	// const [admin] = useAdmin(user)
	return (
		<div class='drawer drawer-mobile'>
			<input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
			<div class='drawer-content'>
				<h2 className='text-2xl font-bold text-purple-500'>
					Welcome to Your Dashboard
				</h2>
				<Outlet></Outlet>
				{/* <!-- Page content here --> */}
			</div>
			<div class='drawer-side'>
				<label for='dashboard-sidebar' class='drawer-overlay'></label>
				<ul class='menu p-4 overflow-y-auto w-48 bg-black text-white font-bold'>
					{/* <!-- Sidebar content here --> */}
					<li>
						<Link to='/dashboard'>My Profile</Link>
					</li>
					{user && (
						<>
							<li>
								<Link to='/dashboard/myOrders'>My Orders</Link>
							</li>
							<li>
								<Link to='/dashboard/review'>My Reviews</Link>
							</li>
						</>
					)}

					{admin && (
						<>
							<li>
								<Link to='/dashboard/makeAdmin'>Make Admin</Link>
							</li>
							<li>
								<Link to='/dashboard/addProduct'>Add Product</Link>
							</li>
							<li>
								<Link to='/dashboard/manageProducts'>
									Manage Products
								</Link>
							</li>
							<li>
								<Link to='/dashboard/manageOrders'>
									Manage All Orders
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Dashboard
