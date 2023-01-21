 import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">KotaKode-Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className="text-center">
            <Nav.Link className="nav-link" href="/about"> Tentang</Nav.Link>
            <Nav.Link className="nav-link" href="/product"> Produk</Nav.Link>
          </Nav>
          <Nav className='gap-2'>
            <Button className='' variant='outline-success'>Register</Button>
            <Button className=''>Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navigation