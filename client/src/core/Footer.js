import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'
import { Link, withRouter } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import '../style.css'

import {
    FaGooglePlusG,
    FaFacebookF,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";


const foot = {
    height: '90px',
    bgcolor: 'red'
}

const icons = {
    padding: '115rem,15rem,5px,0px'
}

export default function Footer() {
    return (
        <div style={foot}>
            <Navbar bg="light">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/orders">&copy;2020</Nav.Link>
                    </Nav>
                    <Form inline style={icons}>
                        <h2><FaGooglePlusG color="green" /></h2><span /><span />
                        <h2><FaFacebookF color="green" /></h2>
                        <h2><FaInstagram color="green" /></h2>
                        <h2><FaTwitter color="green" /></h2>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
