import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      // <div>
      // <Button variant="success"><Link to='/login'>Login</Link></Button>
      // <Link to='/sign-up'>Signup</Link>
      // </div>
      <Navbar  bg="warning" variant="light" expand="lg">
        <Navbar.Brand as={Link} to='/'>Mero Food delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         {/* <Nav.Link href="/login">Login</Nav.Link> */}
         <Button as={Link} to="/login" variant="danger">Login</Button>
         <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
