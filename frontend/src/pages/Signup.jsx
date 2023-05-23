import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Signup() {
    return (
        <div className='mx-auto w-50'>
            <h1>Register Your Account</h1>
            <p className='text-secondary'>Fill the details bellow to submit register account.</p>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="your first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="your first name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="your last name" />
                    </Col>
                </Row>
                <Row>

                </Row>
            </Form>
        </div>
    )
}

export default Signup