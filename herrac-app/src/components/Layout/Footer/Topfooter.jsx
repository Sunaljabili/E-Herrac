
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap"
import './topFooter.css'

function topFooter() {
  return (
    <>
      <Container>
        <Row>
          <Col col="6" lg={{
            offset:2,
            size:2
          }} md="6" sm="12">
            <div className="element">
              <div className="heading">
                <h3>Əlaqə</h3>
              </div>
              <div className="info-area">
                <p>+994512323698</p>
                <p>info@e-herrac.com</p>
              </div>
            </div>
          </Col>
          <Col col="6" lg="2" md="6" sm="12">
            <div className="element">
              <div className="heading">
                <h3>Ünvan</h3>
              </div>
              <div className="info-area">
                <p>Bakı ş, Yasamal r,</p>
                <p>M.Rahim 4 A</p>
              </div>
            </div>
          </Col>
          <Col col="6" lg="2" md="6" sm="12">
            <div className="element">
              <div className="heading">
                <h3>Kateqoriyalar</h3>
              </div>
              <div className="info-area">
                <ul className='list-items'>
                  <li className='list-item'>
                    <Link className='item' to="/">
                      Daşınmaz əmlak
                    </Link>
                  </li>
                  <li className='list-item'>
                    <Link  className='item' to="/">
                      Daşınar əmlak

                    </Link>

                  </li>
                  <li className='list-item'>
                    <Link  className='item' to="/">
                      Nəqliyyat
                    </Link>
                  </li>
                  <li className='list-item'>
                    <Link   className='item' to="/">
                      Qızıl zinət
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col col="6" lg="2" md="6"  sm="12">
            <div className="element">
              <div className="heading">
                <h3>Saytın xəritəsi</h3>
              </div>
              <div className="info-area">
                <ul className='list-items'>
                  <li className='list-item'>
                    <Link className='item' to="/">
                      Ana səhifə
                    </Link>
                  </li>
                  <li className='list-item'>
                    <Link className='item' to="/">
                      Haqqımızda

                    </Link>

                  </li>
                  <li className='list-item'>
                    <Link className='item' to="/">
                      Online hərrac
                    </Link>
                  </li>
                  <li className='list-item'>
                    <Link className='item' to="/">
                      Qanunvericilik
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>


      </Container>
    </>
  )
}

export default topFooter;