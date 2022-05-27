import React from 'react'

const AddProduct = () => {
	return (
		<div>
			<h1>add product</h1>
			<form>
				<div class='text-center lg:text-left w-full md:w-1/2 mx-auto'>
					<div class='card  shadow-2xl bg-base-100'>
						<div class='card-body'>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Phone</span>
								</label>
								<input
									type='text'
									placeholder='Enter Your Mobile Number'
									class='input input-bordered'
									name='phone'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Address</span>
								</label>
								<input
									type='text'
									placeholder='Your Address'
									class='input input-bordered'
									name='address'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Profession</span>
								</label>
								<input
									type='text'
									placeholder='Enter your profession'
									class='input input-bordered'
									name='profession'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Profession</span>
								</label>
								<input
									type='text'
									placeholder='Enter your profession'
									class='input input-bordered'
									name='profession'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Profession</span>
								</label>
								<input
									type='text'
									placeholder='Enter your profession'
									class='input input-bordered'
									name='profession'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Profession</span>
								</label>
								<input
									type='text'
									placeholder='Enter your profession'
									class='input input-bordered'
									name='profession'
									required
								/>
							</div>
							<div class='form-control mt-6'>
								<button class='btn btn-primary'>Update</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddProduct
