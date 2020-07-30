import React, { useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { AiFillSetting } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { IsAuthenticated, addToSaved } from '../user/apiCalls/localstorage'
import { Link } from 'react-router-dom';
import { getUserById } from '../Admin/apiCalls/AdminApiCalls';
import { BsBookmark, BsBookmarksFill } from "react-icons/bs";



const Cards = ({
    Service,
    IsAdmin = false
}) => {


    const cardtittle = Service ? Service.userId.name : "Default";
    const cardImage = Service ? Service.imageUrl : "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg";
    const cardDescription = Service ? Service.description : "Default description";
    const price = Service ? Service.charge : "default";

    const [Liked, setLiked] = useState(false)

    const addToSaved = (id) => {
        let saved = [];
        if (!localStorage.getItem("saved")) {
            localStorage.setItem("saved", []);
        }
        saved.push(id)
    }

    const cardProfileImage = () => {
        return (<FaUserTie size='1em' />
        )
    }

    const SaveOption = () => {
        return (
            <div>                    {(!Liked) && (<BsBookmark onClick={() => {
                setLiked(true)
                addToSaved(Service._id);
            }} size='1.5rem' />)}
                {(Liked) && (<BsBookmarksFill onClick={() => {
                    setLiked(false)
                }} size='1.5rem' />)}</div>
        )
    }

    return (

        <Card style={{ width: '15rem', margin: '10px', float: 'left' }}>
            <Card.Img variant="top" src={cardImage} style={{ height: '11rem' }} />
            <Card.Body>
                <Card.Title style={{ textAlign: 'left' }}>
                    <Link to={`/user/${Service.userId._id}`} style={{ color: 'Black', textDecoration: 'none' }}>{cardProfileImage()}<span> </span>{cardtittle}{(IsAdmin) && (<Link to="/admin/updateservice">
                        <AiFillSetting style={{ color: 'green', float: 'right' }} /></Link>)}
                    </Link></Card.Title>
                <Card.Text >
                    <h5>{cardDescription}</h5>
                    <Row>
                        <Col sm={4}>{SaveOption()}</Col>
                        <Col sm={8}><h6>Starting At {price}</h6></Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards;
