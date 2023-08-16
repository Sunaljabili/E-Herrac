import React from 'react'
import { Container, Row, Col } from 'reactstrap';
function Index() {
  return (
    <div className='payment'>
      <Container>
        <Row>
          <Col lg={{
            offset: 2,
            size: 9
          }}>
            <div className="payment-area">
              <h2 className='head-title'>
                Ödəniş
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Index
