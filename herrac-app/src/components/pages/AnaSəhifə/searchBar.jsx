import React from 'react'
import { Form, FormGroup, Input, Button, Container, Row } from "reactstrap"
import './searchBar.css'

function searchBar() {
    return (
        <Container>
            <Row>
                <Form className='form-element'> 
                    <FormGroup className='d-flex'>
                        <Input
                            id='search'
                            className='search-input search-element'
                            name='search'
                            placeholder='Axtarış'
                            type='text'
                        />
                        <Input
                            id="exampleSelect"
                            className='search-select  search-element'
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                        <Button color="primary" className='search-btn '
                        >
                          Axtar
                        </Button>
                    </FormGroup>

                </Form>
            </Row>
        </Container>


    )
}

export default searchBar
