import React from 'react'

const Products = () => {
	return (
		<div>
			<h1 className='text-center text-2xl font-bold mt-16  text-white'>
				<span className='bg-primary border-l-[4px] border-r-[4px] border-red-500 px-6 py-2 rounded-lg'>
					Products We Supply
				</span>
			</h1>
			<div className='bg-black my-16'>
				<div class='card w-96 bg-base-100 shadow-xl'>
					<figure class='px-10 pt-10'>
						<img
							src='https://api.lorem.space/image/shoes?w=400&h=225'
							alt='Shoes'
							class='rounded-xl'
						/>
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title'>Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class='card-actions'>
							<button class='btn btn-primary'>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
