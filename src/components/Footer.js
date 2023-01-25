import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Navbar bg='dark' variant='dark' className='footer mt-5 '>
            <Nav className='footer-items'>
                <Navbar.Text><h5><b>BAGIAN DARI</b></h5></Navbar.Text>
                <Nav.Link href="#block">BLOCK 71</Nav.Link>
                <Nav.Link href="#google">Google</Nav.Link>
            </Nav>
            <Nav className='footer-items'>
                <Navbar.Text><h5><b>PRODUK</b></h5></Navbar.Text>
                <Nav.Link href="#block">Pertanyaan</Nav.Link>
                <Nav.Link href="#google">Blog</Nav.Link>
                <Nav.Link href="#block">Pengguna</Nav.Link>
                <Nav.Link href="#google">Events</Nav.Link>
                <Nav.Link href="#google">Partnership</Nav.Link>
            </Nav>
            <Nav className='footer-items'>
                <Navbar.Text><h5><b>PERUSAHAAN</b></h5></Navbar.Text>
                <Nav.Link href="#block">About</Nav.Link>
                <Nav.Link href="#google">FAQ</Nav.Link>
                <Nav.Link href="#block">Rules</Nav.Link>
                <Nav.Link href="#google">Legal</Nav.Link>
            </Nav>
            <Nav className='footer-items'>
                <Navbar.Text><h5><b>HUBUNGI KAMI</b></h5></Navbar.Text>
                <Nav.Link href="#block">petertanugraha@kotakode.com</Nav.Link>
            </Nav>
            
        </Navbar>
        
    </footer>
  )
}

export default Footer