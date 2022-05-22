import React, { useEffect, useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const ResetPassword = () => {
	const [email, setEmail] = useState('')
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth)

	// if (error) {
	// 	return (
	// 		<div>
	// 			<p>Error: {error.message}</p>
	// 		</div>
	// 	)
	// }

	// useEffect(()=>{

	// },[email])
	// const handleResetPass = e => {
	//     e.preventDefault()
	//     setEmail(e.target.email.value)

	//     console.log('form submitted', email)
	// }

	return (
		<div className='w-full min-h-[80%] bg-indigo-300'>
			<h1 className='text-3xl text-center mt-16'>Reset Password Here</h1>
			<div className='mx-auto w-full h-full flex justify-center'>
				<div>
					<input
						type='email'
						name='email'
						placeholder='Enter Your Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						class='input input-bordered input-primary w-full max-w-xs mt-6'
						required
					/>
					<button
						onClick={async () => {
							await sendPasswordResetEmail(email)
							toast('Sent email')
						}}
						className='btn btn-primary mt-6'
					>
						Submit
					</button>
					{error && <p className='text-red-800'>{error?.message}</p>}
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
