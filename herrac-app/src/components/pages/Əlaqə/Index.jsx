import { Container, Row, Col } from 'reactstrap';
import Map from "./Map";
import FormBar from "./FormBar"
import "./Index.css";


function Index() {
  return (
    <div className='mt-4 mb-4 form-contancts'>
      <Container>
        <Row>
          <Col lg={{
            offset: 2,
            size: 4
          }}>
            <FormBar />
          </Col>
          <Col lg={{
            offset: 0,
            size: 4
          }}>
            <Map />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Index
