import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'
import MyOrder from './MyOrder'

const MyOrders = () => {
	const [user] = useAuthState(auth)
	const email = user.email
	const url = `http://localhost:5000/myOrders?email=${email}`

	const {
		isLoading,
		error,
		refetch,
		data: myOrders,
	} = useQuery('myOrders', () => fetch(url).then(res => res.json()))

	if (isLoading) {
		return <Loading></Loading>
	}

	// const [myOrders, setMyOrders] = useState([])
	// useEffect(() => {
	// 	const url = `http://localhost:5000/myOrders?email=${email}`
	// 	console.log(url)
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// }, [email])
	return (
		<div>
			<h1 className='text-center text-xl font-bold text-primary'>
				{' '}
				Total Orders : {myOrders.length}{' '}
			</h1>
			{myOrders.map(myOrder => (
				<MyOrder
					key={myOrder._id}
					myOrder={myOrder}
					refetch={refetch}
				></MyOrder>
			))}
		</div>
	)
}

export default MyOrders
