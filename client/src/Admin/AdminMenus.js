import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';



const AdminMenus = () => {
    return (
        <div>
            <Card style={{ width: '15rem', textAlign: 'center' }}>
                <Card.Header>Admin Panel</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link to="/admin/services" >Services</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/admin/categories">Categories</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/admin/customers" className='disabled-link'>Customers</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/admin/sellers" className='disabled-link'>Sellers</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>

    )
}

export default AdminMenus;
