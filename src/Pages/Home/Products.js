import React, { useEffect, useState } from 'react'
import Product from './Product/Product'

const Products = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])
	return (
		<div>
			<h1 className='text-center text-2xl font-bold mt-16  text-white'>
				<span className='bg-primary border-l-[4px] border-r-[4px] border-red-500 px-6 py-2 rounded-lg'>
					Products We Supply
				</span>
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 my-12'>
				{products.map(product => (
					<Product key={product._id} product={product}></Product>
				))}
			</div>
		</div>
	)
}

export default Products
