import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const MyReviews = () => {
	const [user] = useAuthState(auth)
	const handleSubmit = e => {
		e.preventDefault()
		if (!rating) {
			return toast.error('Please give a rating to proceed review!')
		}
		const review = {
			name: user.displayName,
			email: user.email,
			profession: e.target.profession.value,
			review: e.target.reviewText.value,
			img: user.photoURL,
			rating: rating,
		}
		fetch('http://localhost:5000/review', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					toast.success(
						`Congratulation ${user.displayName}!!Thanks for your review.`
					)
					e.target.reset()
				}
			})
	}
	let rating
	const handleRating = e => {
		rating = e?.target?.value
		return rating
	}
	return (
		<div>
			<h1 className='text-2xl text-primary text-center font-bold'>
				Give Us Feedback Here
			</h1>
			<div className='w-full md:w-1/2 mx-auto border-2 my-6 py-6 border-primary'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='input input-bordered input-sm w-1/2 mx-auto block'
						value={user.displayName}
						disabled
					/>
					<input
						type='text'
						className='input input-bordered input-sm w-1/2 mx-auto block'
						value={user.email}
						disabled
					/>
					<label className='label w-1/2 mx-auto'>
						<span className='label-text'>What is your designation?</span>
					</label>
					<input
						name='profession'
						type='text'
						placeholder='Enter your designation'
						className='input input-bordered input-sm w-1/2 mx-auto block'
						required
					/>
					<p className='w-1/2 mx-auto mt-2'>Give us Rating</p>
					<div
						onChange={handleRating}
						className='rating mx-auto w-1/2 block'
						required
					>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							value='1'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							value='2'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							value='3'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							value='4'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							value='5'
							// defualtchecked
						/>
					</div>

					<div className='form-control'>
						<label className='label w-1/2 mx-auto'>
							<span className='label-text'>Your Review</span>
						</label>
						<textarea
							name='reviewText'
							className='textarea textarea-bordered h-24 w-1/2 mx-auto'
							placeholder='Write Your Review Here'
							required
						></textarea>
					</div>
					<input
						className='btn btn-primary w-1/2 mx-auto block my-4'
						type='submit'
						value='Submit'
					/>
				</form>
			</div>
		</div>
	)
}

export default MyReviews
