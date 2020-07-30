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
import { signOut } from '../user/apiCalls/ApiCalls';
import { IsAuthenticated } from '../user/apiCalls/localstorage';


const nav = {
    height: '90px'
}


export default function NavbarItems() {

    const { user } = IsAuthenticated();
    return (
        <div >
            <Navbar bg="light" expand="lg" style={nav} fixed="top">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" style={{ border: '1px solid green' }} />
                        <Button variant="success" style={{ marginLeft: '-9px' }}>Search</Button>
                    </Form>
                    <Nav className="mr-auto" >
                        {/* <Nav.Link href="/sign">Become Photgrapher</Nav.Link> */}
                        {IsAuthenticated() && (<Nav.Link href="/saved">Saved</Nav.Link>)}
                        {IsAuthenticated() && (<Nav.Link href="/orders">Orders</Nav.Link>)}
                        {IsAuthenticated() && (<Nav.Link href="/Profile">Profile</Nav.Link>)}
                        {(IsAuthenticated() && user.role == 0) && (<Nav.Link href="/dashboard">Dashboard</Nav.Link>)}
                        {(IsAuthenticated() && user.role == 1) && (<Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>)}
                        {(!IsAuthenticated()) && (<Nav.Link href="/SignIn">SignIn/SignUp</Nav.Link>)}
                        {(IsAuthenticated()) && (<Nav.Link onClick={() => {
                            signOut(() => {
                            })
                        }} href="/">LogOut</Nav.Link>)}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
