import React, { useState, useEffect } from 'react'
import Home from '../core/Home'
import { getCategories, getServices, DeleteCategory, addCategory } from './apiCalls/AdminApiCalls'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'



import AdminMenus from './AdminMenus'
import { IsAuthenticated } from '../user/apiCalls/localstorage'
import { Card } from 'react-bootstrap'

const ManageCategories = () => {

    const [name, setNames] = useState("")

    const [Categories, setCategories] = useState([])
    const [reload, setreload] = useState("");

    const { token } = IsAuthenticated();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (name) => event => {
        setNames(event.target.value)
    }



    const LoadAllCategories = () => {
        getCategories()
            .then(
                data => {
                    if (data.error) {
                        console.log(data.error)
                    }
                    setCategories(data);
                }
            )
            .catch(err => console.log(err))
    }
    useEffect(() => {
        LoadAllCategories()
    }, [reload])




    return (
        <Home>
            <Card>
                <Row>
                    <Col sm={4}><AdminMenus /></Col>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Form>
                            <Form.Control type="text" value={name} onChange={handleChange("name")} placeholder="Enter Category Name" /></Form>
                        </Modal.Body><Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
          </Button>
                            <Button variant="primary" onClick={() => {
                                addCategory({ name })
                                if (reload) { setreload(false) }
                                reload ? setreload(false) : setreload(true)
                                setNames("")
                                handleClose()
                            }}>
                                Add Category
          </Button>
                        </Modal.Footer>
                    </Modal>
                    <Col sm={8}><h2>All Categories</h2><br />      <Button variant="primary" onClick={handleShow}>
                        Add category
      </Button><br /><br />
                        {Categories.map((category) => {
                            return (
                                <div key={category._id}>
                                    <Row>
                                        <Col sm={6}><h3>{category.name}</h3></Col>
                                        <Col sm={1}><Button variant="danger" onClick={() => {
                                            DeleteCategory(category._id, token);
                                            reload ? setreload(false) : setreload(true)
                                            // if (reload) { setreload(false) }
                                            // if (!reload) { setreload(true) }
                                        }}>Delete</Button><br /><br /></Col>
                                    </Row></div>
                            )
                        })}</Col>

                </Row></Card>
        </Home >
    )
}

export default ManageCategories;
