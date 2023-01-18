import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/home"> Home</Nav.Link>
            <Nav.Link className="nav-link" href="/about"> About</Nav.Link>
          </Nav>
          <Nav className='gap-2'>
            <Button className='' variant='success'>Register</Button>
            <Button className=''>Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navigation