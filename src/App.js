import logo from './logo.svg'
import './App.css'
import img from '../src/assets/preloader.gif'
import img1 from '../src/assets/load.gif'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NotFound from './Pages/Shared/NotFound'
import Navbar from './Pages/Shared/Navbar'

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
			{/* {loading && (
				<div className='flex justify-center items-center h-screen w-full bg-black'>
					<img src={img1} alt='' />
				</div>
			)} */}

			<Navbar>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
				</Routes>
			</Navbar>
		</div>
	)
}

export default App
