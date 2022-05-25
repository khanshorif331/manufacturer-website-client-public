import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import auth from '../../firebase.init'

const Navbar = ({ children }) => {
	const [user] = useAuthState(auth)
	const logout = () => {
		signOut(auth)
		// localStorage.removeItem('accessToken')
	}
	const navigation = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='blogs'>Blogs</NavLink>
			</li>
			<li>
				<NavLink to='portfolio'>My PortFolio</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to='/dashboard'>Dashboard</NavLink>
				</li>
			)}
			{user ? (
				<NavLink to='/login'>
					<button onClick={logout} className='btn btn-ghost'>
						Logout
					</button>
				</NavLink>
			) : (
				<li>
					<NavLink to='login'>Login</NavLink>
				</li>
			)}
		</>
	)
	return (
		<div className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				{/* <!-- Navbar --> */}
				<div className='w-full navbar bg-indigo-400'>
					<div className='flex-none lg:hidden'>
						<label
							htmlFor='my-drawer-3'
							className='btn btn-square btn-ghost'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-6 h-6 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</label>
					</div>
					<div className='flex-1 px-2 mx-2 text-2xl font-bold'>
						<span className='bg-white p-2 rounded-md'>
							Khan Manufacturing
						</span>
					</div>
					<div className='flex-none hidden lg:block'>
						<ul className='menu menu-horizontal'>
							{/* <!-- Navbar menu content here --> */}

							{navigation}
						</ul>
					</div>
				</div>
				{/* <!-- Page content here --> */}
				{children}
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-100'>
					{/* <!-- Sidebar content here --> */}

					{navigation}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
