import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './styles/success.scss'
const SuccessHighlights = () => {
  
  return <>
        <section className="success__section">
            <Container>
                <Row className='text-center'>
                    <h2 className="section__title">Success Highlightss</h2>
                    <p className='section__intro'>Proudly fostering educational growth and global connections <br /> Our achievements showcase our team's dedication and exceptional students. 
                    </p>
                    <Col lg = '3' md='4'>
                        <div className="success__item">
                          <h3 className='item__title' >7+</h3>
                          <p className='item__description'>Years of Experience</p>
                        </div>
                    </Col>
                    <Col lg = '3' md='4'>
                        <div className="success__item">
                          <h3 className='item__title'>2000</h3>
                          <p className='item__description'>Successfully Enrolled Students</p>
                        </div>
                    </Col>
                    <Col lg = '3' md='4'>
                        <div className="success__item">
                          <h3 className='item__title' >129</h3>
                          <p className='item__description'>Partner Institutions</p>
                        </div>
                    </Col>
                    <Col lg = '3' md='4'>
                        <div className="success__item">
                          <h3 className='item__title' >180000$</h3>
                          <p className='item__description'>Scholarships Awarded</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  </>
}

export default SuccessHighlights