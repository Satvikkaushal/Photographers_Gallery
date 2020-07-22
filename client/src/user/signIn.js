import React, { useState } from 'react'
import Home from '../core/Home'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { signIn } from './apiCalls/ApiCalls';
import { authenticate, IsAuthenticated } from './apiCalls/localstorage';
import { Link, Redirect } from "react-router-dom";


const SignIn = () => {

    const [values, setvalues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    });

    const { email, password, error, loading, didRedirect } = values;

    const { user } = IsAuthenticated();

    const handleChange = name => event => {
        setvalues({ ...values, error: false, [name]: event.target.value })
    }


    const OnSubmit = event => {
        event.preventDefault();
        setvalues({ ...values, error: false, loading: true })
        signIn({ email, password })
            .then(data => {
                if (data.error) {
                    setvalues({
                        ...values, error: data.error, loading: false
                    })
                } else {
                    console.log(data);
                    authenticate(data, () => {
                        setvalues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(err => console.log(err))

    }

    const RedirectToLanding = () => {
        if (didRedirect) {
            if (user && user.role == 1) {
                return <Redirect to="/admin/dashboard"></Redirect>
            }
            else {
                return <Redirect to="/"></Redirect>
            }
        }
    }

    const signInForm = () => {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep SignedIn" />
                    </Form.Group>
                    <Form inline><Button variant="primary" onClick={OnSubmit} type="submit">Submit</Button>
                        <Link to="/SignUp" className="nav-link text-success">SignUP</Link></Form>
                </Form>
            </div>
        );
    }

    return (
        <Home tittle="Signin">
            <div className="container">
                <div className="row ">
                    <div className="col margin-auto">image</div>
                    <div className="col">
                        {signInForm()}
                        {RedirectToLanding()}
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default SignIn;
