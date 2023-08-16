import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap'
import  HerracData from "./HerracData.json";
import './HerracItem.css'



function HerracItem() {
    return (
        <Container>
            <Row>
{HerracData.items.map(item=>(
    
        <Col lg="4" key={item.id}>
            <Card  className='card-element'
                style={{
                    width: '16rem'
                }}
            >
                <img
                    alt="Sample"
                    src={item.image}
                    className='image'
                />
                <div className="price">
                    salam
                </div>
               
                <CardBody>
                    <CardTitle tag="h5" className='text-center'>
                        {item.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle> 
                     <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>


                </CardBody>
            </Card>
        </Col>

)
)}




            </Row>
        </Container>
    )
}

export default HerracItem
