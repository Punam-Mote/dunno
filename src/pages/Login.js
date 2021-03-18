import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    login = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password,

        };
        axios.post('http://localhost:90/loginSupplier', data).then((response) => {
            console.log(response);
        });
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
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn-lg btn-block" variant="success" type="submit">
                    Login
  </Button>
            </Form>

            // <form onSubmit={this.login}>
            //     <input type="text"
            //         onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
            //     <input type="text"
            //         onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
            //     <button type="submit">Login</button>
            // </form>

        )
    }
}
