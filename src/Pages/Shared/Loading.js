import React from 'react'
import img1 from '../../assets/load.gif'

const Loading = () => {
	return (
		<div className='flex justify-center items-center h-screen w-full'>
			<img src={img1} alt='' />
		</div>
	)
}

export default Loading
