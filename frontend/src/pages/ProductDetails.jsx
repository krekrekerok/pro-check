import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
// import programsData from '../assets/data/programsData'


const ProductDetails = () => {
  const {id} = useParams()
  const [program, setProgram] = useState({})

  useEffect(() => {
    async function fetchProgram() {
      const { data } = await axios.get(`/api/programs/${id}`)
      setProgram(data)
    }

    fetchProgram()
  }, [id])

  const {
    image,
    name,
    subtitle,
    partnerNumber,
    degreeType,
    category,
    location,
    duration,
    deadline,
    description,
    requirements,
    notes,
    docs,
  } = program

  return (<section className="programDetails">
    <Container>
      <Row>
        <Link to='/'>
          Go Back
        </Link>
        <Col lg='6'>
          <img src={image} alt="product" />
        </Col>
        <Col lg='6'>
          <div className="product__details">
            <h2>{name}</h2> 
            <code> <b>Duration:</b> {duration} month</code>
            <p>{subtitle}</p>
            <p>{partnerNumber} universities under program in {location} for {category} studying</p>
            <div className="description">
              <h5>Description</h5>
              <p>{description}</p>
              <p>This program is for <b>{degreeType}</b> students </p>
            </div>
            <div className="requirements">
              <h5>You can apply if you have:</h5>
              <ul>
                <li>Language: {requirements?.language}</li>
                <li>GPA score: {requirements?.gpa}</li>
              </ul>
            </div>
            <p><b>Note: {notes}</b></p>
            <div className="requirements_docs">
              <h5>Don't forget about</h5>
              <ul>
                <li>
                  <p>{docs?.transcript}</p>
                </li>
                <li>
                  <p>{docs?.passport}</p>
                </li>
                <li>
                  <p>{docs?.language_cert}</p>
                </li>
                <li>
                  <a href={docs?.app_form?.link}>{docs?.app_form?.name}</a>
                </li>
              </ul>
            </div>
            <p><b> Deadline for appying:</b> {deadline}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default ProductDetails