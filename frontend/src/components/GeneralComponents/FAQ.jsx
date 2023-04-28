import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row, UncontrolledAccordion } from 'reactstrap'
import './styles/faq.scss'
const FAQ = () => {
  return <>
        <section>
            <Container>
                <Row>
                    <Col lg = '12' className='text-center'>
                        <h2 className="section__title">Frequently Asked Questions (FAQs)</h2>
                        <p className='section__intro'>
                        We understand that applying for an exchange program can raise many questions. <br />To help guide you through the process, we've compiled a list of FAQ and their answers.
                        </p>
                    </Col>
                    <div className="section__qa">
                        <UncontrolledAccordion defaultOpen={['1','2','3']} stayOpen>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                What are the eligibility requirements for your exchange programs?
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                Provide information on the general eligibility criteria, such as academic standing, language proficiency, and other requirements that students must meet to apply.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                Are there scholarships or financial aid available for exchange students?
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                Provide information on any financial assistance options, such as scholarships, grants, or loans that students can apply for to help fund their exchange.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">
                                What types of programs do you offer, and in which countries?
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                Give an overview of the different exchange programs available and the countries where partner institutions are located.
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                        <UncontrolledAccordion defaultOpen={['1','2','3']} stayOpen>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                How do I apply for an exchange program?
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                What support services do you provide for exchange students?
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the   
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">
                                How can I prepare for my exchange experience?
                                </AccordionHeader>
                                <AccordionBody accordionId="3">

                                Share tips and resources to help students prepare for their time abroad, including advice on cultural adaptation, packing lists, and travel arrangements.
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </div>
                </Row>
            </Container>
        </section>
  </>
}

export default FAQ