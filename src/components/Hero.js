import React from 'react'
import '../assets/LandingPage.css'
import { Button, Container, Card } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container className='landing-container'>
      <div className='hero-wrapper text-wrapper'>
        
        <h1 className='hero-title'>
          Jadilah Bagian dari
          <br /> Komunitas Tech Terbesar
          <br /> di Indonesia
        </h1>
        <h5 className='hero-p'>
          Ikutan diskusi forum tanya jawab, tulis blog dan
          <br />Membangun portofolio semua di Kotakode
        </h5>
        <div className='input-wrapper justify-content-center'>
          <input type="email" className='input-box' placeholder='Masukkan Email Kamu'/>
          <Button className='input-button '>Daftar</Button>
        </div>
        <div className='total-wrapper'>
          <Card className=" text-center total-box">
            <Card.Title><strong>29564</strong></Card.Title>
            User Bergabung
          </Card>
          <Card className=" text-center total-box">
            <Card.Title><strong>1078</strong></Card.Title>
            Blog Ditulis
          </Card>
          <Card className=" text-center total-box">
            <Card.Title><strong>19779</strong></Card.Title>
            Total Pertanyaan & Jawaban
          </Card>
        </div>
    </div>
    </Container>
  )
}

export default Hero