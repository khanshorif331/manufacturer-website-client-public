import React, { useEffect, useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../firebase.init'

const ResetPassword = () => {
	const [email, setEmail] = useState('')
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth)

	const handleReset = async () => {
		await sendPasswordResetEmail(email)
		alert('Email sent')
	}

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
					/>
					<button
						onClick={handleReset}
						className='btn btn-primary mt-6'
						disabled={!email}
					>
						Submit
					</button>
					{error && <p className='text-red-800'>{error?.message}</p>}
					<ToastContainer></ToastContainer>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
