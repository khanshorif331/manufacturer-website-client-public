import React from 'react'

const MyProfile = () => {
	return (
		<div>
			<h1>My proofile</h1>
			<div class='hero bg-base-200'>
				<div class='hero-content grid grid-cols-1 md:grid-cols-3'>
					<div class='text-center lg:text-left md:col-span-2'>
						<h1 class='text-5xl font-bold'>Login now!</h1>
						<p class='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut
							assumenda excepturi exercitationem quasi. In deleniti eaque
							aut repudiandae et a id nisi.
						</p>
					</div>
					<div class='card  shadow-2xl bg-base-100'>
						<div class='card-body'>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='email'
									class='input input-bordered'
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
									class='input input-bordered'
								/>
								<label class='label'>
									<a href='#' class='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div class='form-control mt-6'>
								<button class='btn btn-primary'>Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
