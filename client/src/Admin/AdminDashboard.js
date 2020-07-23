import React from 'react'
import Home from '../core/Home'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IoMdAdd } from 'react-icons/io'
import '../Styles/AdminDashboard.css'
import AdminMenus from './AdminMenus'

export default function AdminDashboard() {
    return (
        <Home>
            <Container-fluid>
                <Row>
                    <Col sm={4}><AdminMenus /></Col>
                    <Col sm={8}>sss</Col>
                </Row>
            </Container-fluid>
        </Home >
    )
}
