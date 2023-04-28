import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './styles/partners.scss'
const Partnerships = () => {
      
  return <>
        <section className="partners__section">
            <Container>
                <Row>
                    <Col lg = '12' className='text-center'>
                        <h2 className="section__title">International Partnerships</h2>
                        <p className='section__intro'>Our extensive network includes more than [XXX] partner institutions worldwide, <br /> offering students a diverse range of opportunities to study abroad. </p>
                    </Col>
                    <div className='country-flags'>
                    <span className="fi fi-us fib"></span> 
                    <span className="fi fi-gb fib"></span> 
                    <span className="fi fi-al fib"></span> 
                    <span className="fi fi-at fib"></span> 
                    <span className="fi fi-bd fib"></span> 
                    <span className="fi fi-ca fib"></span> 
                    <span className="fi fi-cn fib"></span> 
                    <span className="fi fi-cz fib"></span> 
                    <span className="fi fi-fr fib"></span> 
                    <span className="fi fi-de fib"></span> 
                    <span className="fi fi-it fib"></span> 
                    <span className="fi fi-jp fib"></span> 
                    <span className="fi fi-kz fib"></span> 
                    <span className="fi fi-tr fib"></span> 
                    <span className="fi fi-tw fib"></span> 
                    <span className="fi fi-ua fib"></span> 
                    <span className="fi fi-tj fib"></span> 
                    <span className="fi fi-sk fib"></span> 
                    <span className="fi fi-pl fib"></span> 
                    <span className="fi fi-in fib"></span> 
                    </div>
                </Row>
            </Container>
        </section>
  </>
}

export default Partnerships