import logo from './logo.svg'
import './App.css'
import img1 from '../src/assets/load.gif'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/Shared/NotFound'
import Navbar from './Pages/Shared/Navbar'
import Blogs from './Pages/Blogs/Blogs'
import MyPortFolio from './Pages/MyPortFolio/MyPortFolio'
import Signup from './Pages/Login/Signup'
import ResetPassword from './Pages/Login/ResetPassword'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Purchase from './Pages/Purchase/Purchase'
import RequireAuth from './Pages/Login/RequireAuth'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyProfile from './Pages/Dashboard/MyProfile'
import MyReviews from './Pages/Dashboard/MyReviews'
import MyOrders from './Pages/Dashboard/MyOrders'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import AddProduct from './Pages/Dashboard/AddProduct'
import ManageProducts from './Pages/Dashboard/ManageProducts'
import ManageOrders from './Pages/Dashboard/ManageOrders'
import Payment from './Pages/Dashboard/Payment'
import RequireAdmin from './Pages/Login/RequireAdmin'

function App() {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])
	return (
		<div>
			{loading && (
				<div className='flex justify-center items-center h-screen w-full bg-black'>
					<img src={img1} alt='' />
				</div>
			)}

			<Navbar>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/blogs' element={<Blogs></Blogs>}></Route>
					<Route
						path='/purchase/:id'
						element={
							<RequireAuth>
								<Purchase></Purchase>
							</RequireAuth>
						}
					></Route>
					<Route
						path='/dashboard'
						element={
							<RequireAuth>
								<Dashboard></Dashboard>
							</RequireAuth>
						}
					>
						<Route index element={<MyProfile></MyProfile>}></Route>
						<Route
							path='myProfile'
							element={<MyProfile></MyProfile>}
						></Route>
						<Route
							path='payment/:id'
							element={<Payment></Payment>}
						></Route>
						<Route
							path='review'
							element={<MyReviews></MyReviews>}
						></Route>
						<Route
							path='myOrders'
							element={<MyOrders></MyOrders>}
						></Route>
						<Route
							path='makeAdmin'
							element={
								<RequireAdmin>
									<MakeAdmin></MakeAdmin>
								</RequireAdmin>
							}
						></Route>
						<Route
							path='addProduct'
							element={
								<RequireAdmin>
									<AddProduct></AddProduct>
								</RequireAdmin>
							}
						></Route>
						<Route
							path='manageProducts'
							element={
								<RequireAdmin>
									<ManageProducts></ManageProducts>
								</RequireAdmin>
							}
						></Route>
						<Route
							path='manageOrders'
							element={
								<RequireAdmin>
									<ManageOrders></ManageOrders>
								</RequireAdmin>
							}
						></Route>
						<Route
							path='myOrders'
							element={<MyOrders></MyOrders>}
						></Route>
					</Route>
					<Route
						path='/portfolio'
						element={<MyPortFolio></MyPortFolio>}
					></Route>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route path='/signup' element={<Signup></Signup>}></Route>
					<Route
						path='/resetPass'
						element={<ResetPassword></ResetPassword>}
					></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
				</Routes>
			</Navbar>
			<ToastContainer></ToastContainer>
		</div>
	)
}

export default App
