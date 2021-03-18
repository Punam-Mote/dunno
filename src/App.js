import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />

				{/* all the routes */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/sign-up' component={SignUp} />
					<Route path='/login' component={Login} />
				</Switch>

				<Footer />
			</div>
		</Router>
	)
}

export default App
