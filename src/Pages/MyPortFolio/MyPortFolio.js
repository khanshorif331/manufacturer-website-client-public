import React from 'react'

const MyPortFolio = () => {
	return (
		<div className='mx-12'>
			<h1 className='text-2xl text-primary text-center font-bold my-6'>
				My PortFolio
			</h1>
			<div className=''>
				<h1 className='text-2xl font-bold'>Md.Shoriful Islam</h1>
				<p>Email:khanshorif331@gmail.com</p>
				<p>Phone: 01580611958</p>
				<p>Address:Badda,Dhaka-1212</p>
			</div>
			<div className='my-6'>
				<h1 className='text-2xl font-bold border-b-4'>
					Educational Information
				</h1>
				<p>Institute : Govt.Titumir College</p>
				<p>Subject : Physics</p>
			</div>
			<div className='my-6'>
				<h1 className='text-2xl font-bold border-b-4'>
					Technologies I Know
				</h1>
				<p>
					HTML{' '}
					<progress
						class='progress progress-secondary w-56 ml-10'
						value='90'
						max='100'
					></progress>
					90%
				</p>
				<p>
					CSS{' '}
					<progress
						class='progress progress-secondary w-56 ml-12'
						value='80'
						max='100'
					></progress>
					80%
				</p>
				<p>
					JAVASCRIPT{' '}
					<progress
						class='progress progress-secondary w-56 mx-'
						value='70'
						max='100'
					></progress>
					70%
				</p>
				<p>
					REACT{' '}
					<progress
						class='progress progress-secondary w-56 ml-8'
						value='70'
						max='100'
					></progress>
					70%
				</p>
				<p>
					TAILWIND{' '}
					<progress
						class='progress progress-secondary w-56 mx-4'
						value='80'
						max='100'
					></progress>
					80%
				</p>
				<p>
					EXPRESS{' '}
					<progress
						class='progress progress-secondary w-56 ml-3'
						value='70'
						max='100'
					></progress>
					60%
				</p>
				{/* <p>CSS</p>
				<p>JAVASCRIPT</p>
				<p>REACT</p>
				<p>TAILWIND</p>
				<p>EXPRESS JS</p> */}
			</div>
		</div>
	)
}

export default MyPortFolio
