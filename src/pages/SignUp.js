import React, { Component } from 'react'
import axios from 'axios'

export default class SignUp extends Component {
	state = {
		restaurant: '',
		password: '',
		email: '',
		contact: '',
		userType: '',
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
		axios.post('http://localhost:90/insertSupplier', data).then((response) => {
		  console.log(response);
		});
	  };
	
	
	render() {
		return (
	   <div>
			<form onSubmit={this.sendSupplierInfo}> 
			  <p>
				Restaurant Name
				<input
				  type="text"
				  value={this.state.restaurant}
				  onChange={(event) =>
					this.setState({ restaurant: event.target.value })
				  }
				/>
			  </p>
			  <p>
				Email
				<input
				  type="text"
				  value={this.state.email}
				  onChange={(event) => this.setState({ email: event.target.value })}
				/>
			  </p>
			  <p>
				Password
				<input
				  type="password"
				  value={this.state.password}
				  onChange={(event) =>
					this.setState({ password: event.target.value })
				  }
				/>
			  </p>
			  <p>
				Phone Number
				<input
				  type="text"
				  value={this.state.contact}
				  onChange={(event) =>
					this.setState({ contact: event.target.value })
				  }
				/>
			  </p>
			  <p>
				User Type
				<input
				  type="text"
				  value={this.state.userType}
				  onChange={(event) =>
					this.setState({ userType: event.target.value })
				  }
				/>
			  </p>
			  <button type="submit">Signup</button>
			</form>
		  </div>
	)
	}
}
