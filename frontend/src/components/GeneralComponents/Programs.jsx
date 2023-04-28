import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import ProgramsList from '../IU/ProgramsList'
import axios from 'axios'

import './styles/programs.scss'
// import programsData from '../../assets/data/programsData'


const Programs = () => {
    const [programs, setPrograms] = useState([])
    
//   This i will need if there will be categories
    useEffect(()=>{
        async function fetchPrograms(){
            const {data} = await axios.get('/api/programs/')
            setPrograms(data)
        }

        fetchPrograms()

    }, [])
    return <>
        <section className="programs__section">
            <Container>
                <Row className='programs__list'>
                    <Col lg = '12' className='text-center'>
                        <h2 className="section__title">Exchange Programs</h2>
                        <p className='section__intro'>If you want to spend a semester or an academic year abroad at one of our partner universities, <br /> the International Relations Office provides you various to choose </p>
                    </Col>
                    <ProgramsList data={programs}/>
                    <Link to='/programsList' className='text-center'>
                        <button className="more__btn">
                            See more
                        </button>
                    </Link>
                </Row>
            </Container>
        </section>
    </>
}

export default Programs