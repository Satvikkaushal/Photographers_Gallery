import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import Home from '../core/Home';
import { signUp } from './apiCalls/ApiCalls';


const SignUp = () => {

    const [values, setValues] = useState({
        name: "",
        contact: "",
        email: "",
        password: "",
        error: "",
        sucess: false
    });

    const { name, contact, email, password, error, sucess } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const Onsubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false });
        signUp({ name, contact, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, sucess: false })
                }
                else {
                    setValues({
                        name: "",
                        contact: "",
                        email: "",
                        password: "",
                        error: "",
                        sucess: false
                    })
                }
            })
            .catch(err => console.log(err))

    }


    const signUpForm = () => {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleChange("name")} placeholder="Enter Name" />
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" value={contact} onChange={handleChange("contact")} placeholder="Enter Contact" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleChange("email")} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={handleChange("password")} placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and Condition" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept privacy policy" />
                </Form.Group> */}
                    <Button variant="primary" onClick={Onsubmit} type="submit">
                        Submit
                </Button>
                </Form>
            </div >)
    }


    return (
        <Home >
            {signUpForm()}
        </Home>
    )
}

export default SignUp;
