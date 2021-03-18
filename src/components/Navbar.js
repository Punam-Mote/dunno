import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>MQ - HERE GOES YOUR NAVBAR <Link to ='/login'>Login</Link></div>
	}
}
