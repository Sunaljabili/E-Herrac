import React from 'react'
import { Container, Row, Col } from "reactstrap"
import HerracItem from "./HerracItem"
import HerracDateTime from './HerracDateTime'



function Herrac() {
  return (
    <div>
      <Container className='mt-5 mb-5'>
      <Row>
        <Col lg="4" >
          <HerracDateTime/>
        </Col>
        <Col lg="8">
          <HerracItem />
        </Col>
      </Row>
    </Container>

    </div>

  )
}

export default Herrac;
