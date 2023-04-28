import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import heroImg from '../assets/images/Hero-image.png'
import FAQ from '../components/GeneralComponents/FAQ'
import Partnerships from '../components/GeneralComponents/Partnerships'
import Programs from '../components/GeneralComponents/Programs'
import SuccessHighlights from '../components/GeneralComponents/SuccessHighlights'
import '../styles/Home.scss'

const Home = () => {
  // const year = new Date().getFullYear();

  return <>
  <section className='hero_section'>
    <Container>
      <Row>
        <Col lg='6' md ='6'>
          <div className="hero__content">
            <h5 className='hero__greeting'>- Hi, Ala-Tooshnik!</h5>
            <div className="hero__title">
              <h2 className='hero__title-1'>Welcome to </h2>
              <h2 className='hero__title-2'>Pro-Check </h2>
            </div>
            <p>
            We've happy to see you at our Exchange Program Portal,<br /> the one-stop destination for exploring, applying, and participating in exceptional international educational experiences. <br /> Discover the perfect program that aligns with your academic goals and personal interests, while creating lifelong connections and memories. Let us guide you on your journey towards a brighter future!
            </p>
            <Link to='/programsList'>
              <button className="more__btn">
                  Start
              </button>
            </Link>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <Programs/>
  <SuccessHighlights/>
  <Partnerships/>
  <FAQ/>
  {/* <Services/> */}
  </>
}

export default Home