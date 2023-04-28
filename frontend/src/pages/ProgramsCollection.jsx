import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import programsData from '../assets/data/programsData'
import ProgramsList from '../components/IU/ProgramsList'

const ProgramsCollection = () => {
  const [data, setData] = useState(programsData)

  useEffect(()=>{
    const filteredPrograms = programsData.filter(
      (item) => item.category === 'Exchange'
    )

    setData(filteredPrograms)
  }, [])

  return (
    <section className="programs__section">
            <Container>
                <Row className='programs__list'>
                    <Col lg = '12' className='text-center'>
                        <h2 className="section__title">Exchange Programs</h2>
                        <p className='section__intro'>Here you can see all IAU parterns exchange and internship programs </p>
                    </Col>
                    <ProgramsList data={data}/>
                    <Link to='/programsList' className='text-center'>
                        <button className="more__btn">
                            See more
                        </button>
                    </Link>
                </Row>
            </Container>
        </section>
  )
}

export default ProgramsCollection