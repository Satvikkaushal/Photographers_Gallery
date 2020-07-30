import React, { useState, useEffect } from 'react'
import { getAllUsers } from './apiCalls/AdminApiCalls';
import Home from '../core/Home';
import { Row, Col } from 'react-bootstrap';
import AdminMenus from './AdminMenus';

const Customers = () => {

    const [Customers, setCustomers] = useState([]);

    const LoadAllCustomers = () => {
        getAllUsers()
            .then(data => {

                if (data.error) {
                    console.log(data.error)
                }
                setCustomers(data)
            })
            .catch()
    }

    useEffect(() => {
        LoadAllCustomers()
    }, [])


    return (
        <Home>
            <Row>
                <Col sm={4}><AdminMenus /></Col>
                <Col sm={8}>{Customers.map((customer) => {
                    return (
                        <h3>{customer.name}</h3>
                    )
                })}</Col>
            </Row>
        </Home>
    )
}
export default Customers;