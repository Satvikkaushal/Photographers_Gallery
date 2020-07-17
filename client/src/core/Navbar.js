import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'
import { Link, withRouter } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import '../style.css'


const nav = {
    height: '90px'
}


export default function NavbarItems() {
    return (
        <div >
            <Navbar bg="light" expand="lg" style={nav}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/sign">Become Photgrapher</Nav.Link>
                        <Nav.Link href="/saved">Saved</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        {(1 == 1) && (<Nav.Link href="/Profile">Profile</Nav.Link>)}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search <IoIosAirplane /></Button>
                        <ion-icon name="enter-outline" size="large"></ion-icon>
                        <ion-icon name="exit-outline" size="large"></ion-icon>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
