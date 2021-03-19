import React, { Component } from 'react'
import axios from '../axios'
import { Button, Form } from 'react-bootstrap';

export default class SignUp extends Component {
	state = {
		restaurant: '',
		password: '',
		email: '',
		contact: '',
		userType: 'Restaurant',
	};
	sendSupplierInfo = (e) => {
		e.preventDefault()
		const data = {
			restaurant: this.state.restaurant,
			password: this.state.password,
			email: this.state.email,
			contact: this.state.contact,
			userType: this.state.userType,
		};

		axios.post('/insertSupplier',data).then(response=>{
			
			if(response.data.success){
				alert(response.data.message)
			}else{
				alert('something went wrong') // yo chai toast ma dekhaune hai
			}
		}).catch()
	};

	render() {
		return (
			<Form className="signup-form" onSubmit={this.sendSupplierInfo}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Restaurant Name</Form.Label>
					<Form.Control type="text" placeholder="Enter organization Name"
						value={this.state.restaurant}
						onChange={(event) =>
							this.setState({ restaurant: event.target.value })
						} />
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"
						value={this.state.email}
						onChange={(event) => this.setState({ email: event.target.value })}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"
						value={this.state.password}
						onChange={(event) =>
							this.setState({ password: event.target.value })
						} />
				</Form.Group>
				<Form.Group controlId="formBasicPhone">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="text" placeholder="Enter Phone Number"
						value={this.state.contact}
						onChange={(event) =>
							this.setState({ contact: event.target.value })
						}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>User Type</Form.Label>
					<Form.Control as="select"
						defaultValue="Restaurant"
						onChange={(event) =>
							this.setState({ userType: event.target.value })

						}>
						<option value="Restaurant">Restaurant</option>
						<option value="Vendor">Vendor</option>
					</Form.Control>
				</Form.Group>

				<Button className="btn-lg btn-block" variant="success" type="submit">
					Signup
			</Button>
				<p className="forgot-password text-right">
					Already registered. <a href="/login">sign in?</a>
				</p>
			</Form>

		)
	}
}
