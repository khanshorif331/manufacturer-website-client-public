import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'
// import Loading from '../Shared/Loading'

const AddProduct = () => {
	const [isLoading, setIsloading] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const imgStorageKey = 'f3a31781efdf5b761c71684f46ddfbec'

	const onSubmit = async data => {
		const image = data?.img[0]
		const formData = new FormData()
		formData.append('image', image)

		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(result => {
				if (result.success) {
					const img = result.data.url
					const product = {
						name: data.name,
						price: data.price,
						minOrder: data.minOrder,
						availableQuantiity: data.availableQuantiity,
						description: data.description,
						img: img,
					}
					setIsloading(true)
					// send to your database
					fetch('http://localhost:5000/product', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							// authorization: `Bearer ${localStorage.getItem(
							// 	'accessToken'
							// )}`,
						},
						body: JSON.stringify(product),
					})
						.then(res => res.json())
						.then(inserted => {
							setIsloading(false)
							if (inserted.insertedId) {
								toast.success('Product Added successfully')
								reset()
							} else {
								toast.error('Failed to add the Product')
							}
						})
				}
			})
	}

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div>
			<h1 className='text-2xl text-center font-bold text-primary'>
				Add A New Product
			</h1>
			<div className='text-center lg:text-left w-full md:w-1/2 mx-auto my-4'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='w-full border-2 card  shadow-2xl bg-base-100 p-10'>
						{/* product name start */}
						<div className='form-control w-full block '>
							<label className='label'>
								<span className='label-text'>Product Name</span>
							</label>
							<input
								type='text'
								placeholder='Product Name'
								className='input input-bordered w-full '
								{...register('name', {
									required: {
										value: true,
										message: 'Name is required',
									},
								})}
							/>
							<label className='label'>
								{errors.name?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.name.message}
									</span>
								)}
							</label>
						</div>

						{/* price info start */}
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Price Per Unit</span>
							</label>
							<input
								type='number'
								placeholder='Product Per Unit'
								className='input input-bordered w-full'
								{...register('price', {
									required: {
										value: true,
										message: 'Price is required',
									},
									// pattern: {
									// 	value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
									// 	message: 'Provide a valid number',
									// },
								})}
							/>
							<label className='label'>
								{errors.price?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.price.message}
									</span>
								)}
							</label>
						</div>
						{/* minOrder info start */}
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>
									Minimum Order Quantity
								</span>
							</label>
							<input
								type='number'
								placeholder='Minimum Order Quantity'
								className='input input-bordered w-full'
								{...register('minOrder', {
									required: {
										value: true,
										message: 'Minimum Quantity is required',
									},
									// pattern: {
									// 	value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
									// 	message: 'Provide a valid Email',
									// },
								})}
							/>
							<label className='label'>
								{errors.minOrder?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.minOrder.message}
									</span>
								)}
							</label>
						</div>
						{/* available quantity info start */}
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Available Quantity</span>
							</label>
							<input
								type='number'
								placeholder='Available Quantity'
								className='input input-bordered w-full'
								{...register('availableQuantiity', {
									required: {
										value: true,
										message: 'Available Quantity is required',
									},
								})}
							/>
							<label className='label'>
								{errors.availableQuantiity?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.availableQuantiity.message}
									</span>
								)}
							</label>
						</div>
						{/* description info start */}
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Description</span>
							</label>
							<textarea
								type='text'
								placeholder='Available Quantity'
								className='input input-bordered w-full'
								{...register('description', {
									required: {
										value: true,
										message: 'Description is required',
									},
								})}
							/>
							<label className='label'>
								{errors.description?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.description.message}
									</span>
								)}
							</label>
						</div>

						{/*img section starts  */}
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Product Photo</span>
							</label>
							<input
								type='file'
								className='input input-bordered w-full'
								{...register('img', {
									required: {
										value: true,
										message: 'Image is required',
									},
								})}
							/>
							<label className='label'>
								{errors.img?.type === 'required' && (
									<span className='label-text-alt text-red-500'>
										{errors.img.message}
									</span>
								)}
							</label>
						</div>

						<input
							className='btn w-full'
							type='submit'
							value='Add Product'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddProduct
