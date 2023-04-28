import React from 'react'
import './footer.scss'

import { Container, Row } from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear
  return <footer className="footer">
    <Container>
      <Row>
        <div className="footer__text">
            <a href='http://alatoo.edu.kg' > © {year} Международный Университет Ала-Тоо</a>
        </div>
      </Row>
    </Container>
  </footer>
}

export default Footer