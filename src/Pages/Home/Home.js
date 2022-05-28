import React from 'react'
import Banner from './Banner'
import Products from './Products'
import BussinessSummery from './BussinessSummery'
import OurStory from './OurStory'
import Reviews from './Reviews'
import Contact from './Contact'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<BussinessSummery></BussinessSummery>
			<OurStory></OurStory>
			<Reviews></Reviews>
			<Contact></Contact>
		</div>
	)
}

export default Home
