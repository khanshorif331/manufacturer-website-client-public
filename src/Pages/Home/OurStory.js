import React from 'react'

const OurStory = () => {
	return (
		<section className='my-12 bg-slate-300'>
			<div className='mx-auto w-full md:w-1/2 pt-10'>
				<h1 className='text-3xl text-center bg-primary text-white py-2 mt-4 font-bold'>
					Our Story
				</h1>
				<p className='text-center my-2'>
					Khan Manufacturing is a leading manufacturing company of A grade
					commercial,industrial and residencial proojects in USA.Since its
					foundation the company has doubled its turnover year on year,with
					its staff and numbers swelling accordingly.
				</p>
			</div>
			{/* grid section starts */}
			<div className='grid grid-cols-1 md:grid-cols-4 p-10'>
				<div className='col-span-2 px-4'>
					<div>
						<h1 className='text-2xl font-bold'>About</h1>
						<p>
							We do only what we are great on.If we tackle a prooject you
							project you can be 100% sure that it will be delivered
							right on time within the set budget limits and orders at
							the toop level.
						</p>
					</div>
					<div className='my-10'>
						<h1 className='text-2xl font-bold'>Our Mission</h1>
						<p>
							We do only what we are great on.If we tackle a prooject you
							project you can be 100% sure that it will be delivered
							right on time within the set budget limits and orders at
							the toop level.
						</p>
					</div>
					<div>
						<h1 className='text-2xl font-bold'>Our Goals</h1>
						<p>
							We do only what we are great on.If we tackle a prooject you
							project you can be 100% sure that it will be delivered
							right on time within the set budget limits and orders at
							the toop level.
						</p>
					</div>
				</div>
				{/* need to add a photo */}
				<div>
					<p>hello</p>
				</div>

				<div className='px-4 mt-4 md:mt-0'>
					<div>
						<h1 className='text-2xl font-bold'>Reliability</h1>
						<p>
							Our team has a cutting edge quality management system which
							ensures high quality standards at all sites.
						</p>
					</div>
					<div className='my-10'>
						<h1 className='text-2xl font-bold'>Expertise</h1>
						<p>
							We have a team of specialists capable of maximizing the
							result and delivering the project of any complexity and
							scope.
						</p>
					</div>
					<div>
						<h1 className='text-2xl font-bold'>Quality</h1>
						<p>
							The control mechnism allows secure and integrated
							monitoring of all stages of the work.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurStory
