import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
	return (
		<Router>
			<div className='App'>
				<Navigation />
				<Container fluid className='px-5'>
					<Row className='px-5'>
						<Col>
							{/* all the routes */}
							<Switch>
								<Route exact path='/' component={Home} />
								<Route path='/sign-up' component={SignUp} />
								<Route path='/login' component={Login} />
							</Switch>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</Router>
	)
}

export default App
