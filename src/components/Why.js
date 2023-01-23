import React from 'react'
import { Card, Container } from 'react-bootstrap'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"


const Why = () => {
  return (
    <div>
        <Container fluid className='mt-5 why-container'>
          <Card className=''>
            <Card.Body className='text-center why-content-item'>
              <Container className='why-header'>
                <h1 className='hero-title'>Mengapa perlu menggunakan <br />Kotakode?</h1>
                <p>Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya.</p>
              </Container>
              <Container className='why-contents'>
                  <Container className='why-left'>
                    <Card className='why-card'>
                        <img src={cat1} alt='cat1' className='why-img' />
                        <Container className='why-card-text'>
                        <h4><b>Jawaban cepat, tepat & gratis</b></h4>
                        <p>Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya.</p>
                        </Container>
                    </Card>
                    <Card className='why-card mt-5'>
                        <img src={cat2} alt='cat1'className='why-img'/>
                        <Container className='why-card-text'>
                        <h4><b>Konsep Gamifikasi</b></h4>
                        <p>Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</p>
                        </Container>
                    </Card>
                  </Container>
                  <Container className='why-right'>
                    <Card className='why-card'>
                        <img src={cat3} alt='cat1' className='why-img' />
                        <Container className='why-card-text'>
                        <h1 className='hero-title'>Bangun Online Portofolio</h1>
                        <p>Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</p>
                        </Container>
                    </Card>
                  </Container>
              </Container>
            </Card.Body>

                
            </Card>
        </Container>
        
    </div>
  )
}

export default Why