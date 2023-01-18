import React from 'react'
import '../assets/landingPage.css'
import { Button, Container, Input } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container fluid className='landing-container'>
      <div className='hero-wrapper'>
        
        <h1 className='hero-title'>
          Jadilah Bagian dari
          <br /> Komunitas Tech Terbesar
          <br /> di Indonesia
        </h1>
        <h5>
          Ikutan diskusi forum tanya jawab, tulis blog dan
          <br />Membangun portofolio semua di Kotakode
        </h5>
        <div className='input-wrapper'>
          <input />
          <Button>Daftar</Button>
        </div>
        <div className='total-wrapper'>
          <div className='total-box'></div>
        </div>
    </div>
    </Container>
  )
}

export default Hero