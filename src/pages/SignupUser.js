import { Component } from "react";
import axios from 'axios'

export default class SignupUser extends Component{
    state = {
        username: '',
        email: '',
        password: '',
        contact: '',
      };
      sendUserInfo = (e) => {
        e.preventDefault()
        const data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          contact: this.state.contact,
        };
        axios.post('http://localhost:90/insertUser', data).then((response) => {
          console.log(response);
        });
      };
    
    
    render() {
        return (
            <form onSubmit={this.sendUserInfo}> 
              <p>
                Name
                <input
                  type="text"
                  value={this.state.username}
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
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
              <button type="submit">Signup</button>
            </form>
    )
    }
  }
  