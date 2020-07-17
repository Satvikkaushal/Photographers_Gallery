import React from 'react'
import Home from '../core/Home'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'


const signInForm = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep SignedIn" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </div>
    );
}

const signIn = () => {
    return (
        <Home tittle="Signin">
            <div className="container">
                <div className="row ">
                    <div className="col margin-auto">image</div>
                    <div className="col">{signInForm()}</div>
                </div>
            </div>
        </Home>
    )
}

export default signIn;
