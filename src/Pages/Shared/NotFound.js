import React from 'react'
import notFound from '../../assets/404.gif'

const NotFound = () => {
	return (
		<div>
			<img className='w-full min-h-fit md:h-screen' src={notFound} alt='' />
		</div>
	)
}

export default NotFound
