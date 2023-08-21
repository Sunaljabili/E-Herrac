import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import HerracData from "./HerracData.json";
import './HerracItem.css'
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from "react-icons/ai"


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
            <Row>
                <div className="buttons-element mt-5">
                    <button className='btn btn-primary'>
                    <AiOutlineDoubleLeft/>
                    <AiOutlineDoubleLeft/>
                    Geri
                     </button>
                    <button className='btn btn-primary my-auto'>İrəli 
                    <AiOutlineDoubleRight/>
                    <AiOutlineDoubleRight/>
                    </button>
                </div>
            </Row>
        </Container>
    )
}

export default HerracItem;



