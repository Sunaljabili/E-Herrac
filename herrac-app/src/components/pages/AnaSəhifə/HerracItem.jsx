import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import HerracData from "./HerracData.json";
import './HerracItem.css'


function HerracItem() {
    return (
        <Container>
            <Row>
                {HerracData.items.map(item => (
                    <Col lg="4" md="6" sm="12" xs="12" key={item.id}>
                        <div className="card mt-3">
                            <div className="card-header">
                                <img src={item.image} alt="" />
                                <div className="card-payment">{item.price}</div>
                            </div>
                            <div className="card-body ">
                                <p>{item.title}</p>

                            </div>
                            <div className="card-footer ">
                                <span className='location'>{item.location}</span>
                                <span className='time'>{item.time}</span>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HerracItem;



