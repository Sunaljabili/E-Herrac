import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./FormBar.css"
import Validation from './Validation';




function FormBar() {
    const [values, setValues] = useState(
        {
            name: '',
            surname: '',
            email: '',
            textarea: ''
        }
    )
    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj);
    }
    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='form-inputs'>
            <Container>
                <Form onSubmit={handleValidation} action='GET'>
                    <FormGroup>
                        <Row>
                            <Col lg="6">
                                <Label for="forName" className='label-elem'>
                                    Ad <sup>*</sup>
                                </Label>
                                <Input
                                    id="forName"
                                    name="name"
                                    type="text"
                                    onChange={handleInput}
                                />
                                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                            </Col>
                            <Col lg="6">
                                <Label for="forSurname" className='label-elem'>
                                    Soyad <sup>*</sup>
                                </Label>
                                <Input
                                    id="forSurname"
                                    name="surname"
                                    type="text"
                                    onChange={handleInput}
                                />

                                {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
                            </Col>
                            <Col lg="12">
                                <Label for="forEmail" className='label-elem'>
                                    E-poçt <sup>*</sup>
                                </Label>
                                <Input
                                    id="forEmail"
                                    name="email"
                                    type="email"
                                    onChange={handleInput}
                                />
                                 {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                            </Col>
                            <Col lg="12">
                                <Label for="exampleText" className='label-elem' >
                                    Mətn <sup>*</sup>
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    rows="10"
                                    cols="40"
                                    type="textarea"
                                    onChange={handleInput}
                                />
                                 {errors.textarea && <p style={{ color: "red" }}>{errors.textarea}</p>
                                 }

                            </Col>
                            <Col lg="5" className='mt-2'>
                                <Button className='w-75'
                                    color="primary"
                                >
                                    Göndər
                                </Button>
                            </Col>
                        </Row>

                    </FormGroup>
                </Form>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default FormBar
