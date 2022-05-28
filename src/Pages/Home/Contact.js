import React from 'react'

const Contact = () => {
	return (
		<div className='mx-10 mb-10'>
			<h1 className='text-center text-3xl text-primary font-bold w-1/2 bg-primary text-white block mx-auto py-2 rounded-lg border-red-500 border-l-4 border-r-4 my-6'>
				Want to Connect With Us?
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div>
					<h1 className='text-xl font-bold text-center mb-6'>
						Find Us on Google Map
					</h1>
					<div className='w-full border-2'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.06863947898!2d90.4023031152029!3d23.796059102801298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653743957177!5m2!1sen!2sbd'
							width='100%'
							height='450'
							style={{ border: '0', borderRadius: '15px' }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
				<div>
					<h1 className='text-xl font-bold text-center mb-6'>
						Send Us Email
					</h1>
					<div>
						<div class='card flex-shrink-0 w-full shadow-2xl bg-base-100 py-4'>
							<div class='card-body'>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Name</span>
									</label>
									<input
										type='text'
										placeholder='Nour name'
										class='input input-bordered'
									/>
								</div>
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
										<span class='label-text'>Your Message</span>
									</label>
									<textarea
										type='text'
										placeholder='Your Message'
										class='input input-bordered'
									/>
								</div>

								<div class='form-control mt-6'>
									<button class='btn btn-primary'>Send</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
