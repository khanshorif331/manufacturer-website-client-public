import React from 'react'

const Blogs = () => {
	return (
		<div>
			<h1 className='text-center text-3xl font-bold text-primary my-4'>
				Welcome to My Blogs
			</h1>
			{/* <div className='my-8 mx-10'>
				<div className='bg-indigo-500'>
					<h1 className='text-center text-xl text-white'>
						How wil you improve the performance of a React Application?
					</h1>
					<p></p>
				</div>
			</div> */}
			{/* blog */}
			<div class='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-black hover:text-white my-2'>
				<h1 className='text-center text-xl '>
					How wil you improve the performance of a React Application?
				</h1>
				<div class='  px-4 py-6  hover:bg-black hover:text-white'>
					We know that react is popular for it's performance and
					optimization.There are lot of ways to improve performance.If we
					can follow those things,our react app will improve the
					performance more.So there are some common techniques we can
					follow or use.
					<li>Keeping component state local where necessary.</li>
					<li>
						Memoizing React component too prevent unnessecary re-renders.
					</li>
					<li>Code-splitting in React using dynamic import()</li>
					<li>Windowing or list virtualization in React.</li>
					<li>Lazy looading images in react.</li>
				</div>
			</div>
			{/* blog-2 */}
			<div class='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-black hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					What are the different ways too manage state in a React
					Application?
				</h1>
				<div class='  px-4 py-6  hover:bg-black hover:text-white'>
					Managing state in React app isn't as simple as using usestate oor
					useReducer.There are different kinds of states and there are a
					lot of ways to managing thoose states.There are some kinds of
					react states. Local state,Global state,Server State,URL state.
					<li>
						We manage our local state using useState most of the time.
					</li>
					<li>
						Global state is data we manage across multiple components.
						Global state is necessary when we want to get and update data
						anywhere in our app, or in multiple components at least
					</li>
					<li>
						Server state Data that comes from an external server that must
						be integrated with our UI state. Server state is a simple
						concept, but can be hard to manage alongside all of our local
						and global UI state.
					</li>
					<li>
						URL state is often missing as a category of state, but it is
						an important one.
					</li>
					<li>
						Server state is a simple concept, but can be hard to manage
						alongside all of our local and global UI state.
					</li>
				</div>
			</div>
			{/* blog-3 */}
			<div class='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-black hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					How does prototypical inheritence works??
				</h1>
				<div class='  px-4 py-6  hover:bg-black hover:text-white'>
					Managing state in React app isn't as simple as using usestate oor
					useReducer.There are different kinds of states and there are a
					lot of ways to managing thoose states.There are some kinds of
					react states. Local state,Global state,Server State,URL state.
					<li>
						We manage our local state using useState most of the time.
					</li>
					<li>
						Global state is data we manage across multiple components.
						Global state is necessary when we want to get and update data
						anywhere in our app, or in multiple components at least
					</li>
					<li>
						Server state Data that comes from an external server that must
						be integrated with our UI state. Server state is a simple
						concept, but can be hard to manage alongside all of our local
						and global UI state.
					</li>
					<li>
						URL state is often missing as a category of state, but it is
						an important one.
					</li>
					<li>
						Server state is a simple concept, but can be hard to manage
						alongside all of our local and global UI state.
					</li>
				</div>
			</div>
		</div>
	)
}

export default Blogs
