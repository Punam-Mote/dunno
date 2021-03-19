import React, { Component } from 'react'
import axios from '../axios';
import { Button, Form } from 'react-bootstrap';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        userType: 'Restaurant',
    };
    login = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password,
            userType: this.state.userType,
        };
        if(this.state.userType==="User"){
            axios.post('/loginUser', data).then((response) => {
               if(response.data.success){
                   //alert("User Logged in vayo")
               }else{
                   alert(response.data.message)
               }
            });
        }else{
            
            axios.post('/loginSupplier', data).then((response) => {
                console.log(response);
            });
        }
    };
    render() {
        return (
            <Form className="login-form" onSubmit={this.login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={(e) => { this.setState({ password: e.target.value }) }} />
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
                        <option value="User">User</option>
					</Form.Control>
				</Form.Group>

                <Button className="btn-lg btn-block" variant="success" type="submit">
                    Login
  </Button>
            </Form>
        )
    }
}
