import logo from './logo.svg'
import './App.css'
import img from '../src/assets/preloader.gif'
import img1 from '../src/assets/load.gif'
import { useEffect, useState } from 'react'

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

			<h1 className='text-red-500'>Hello World!</h1>
			<button class='btn btn-primary'>Button</button>
		</div>
	)
}

export default App
