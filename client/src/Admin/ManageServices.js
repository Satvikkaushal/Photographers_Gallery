import React, { useState, useEffect } from 'react'
import Home from '../core/Home'
import { Row, Col, Button } from 'react-bootstrap'
import AdminMenus from './AdminMenus'
import { getAllServices } from './apiCalls/AdminApiCalls'
import Cards from '../core/Card'


const ManageServices = () => {

    const [Services, setServices] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const LoadAllServices = () => {
        getAllServices()
            .then(data => {

                if (data.error) {
                    console.log(data.error)
                }
                setServices(data)
                console.log(data)
            })
            .catch()
    }

    useEffect(() => {
        LoadAllServices()
    }, [])

    return (
        <Home>
            <Row style={{ justifyContent: 'center' }}>
                <Col sm={4}><AdminMenus /></Col>
                <Col sm={8}><h2>All Services</h2><br />{Services.map((service) => {
                    return (
                        < Cards Service={service} key={service._id} IsAdmin={true} />
                    )
                })}</Col>
            </Row>
        </Home>
    )
}

export default ManageServices;
