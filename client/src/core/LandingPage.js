import React, { useState, useEffect } from 'react'
import Home from './Home';
import { getAllServices, getCategories, getUserById } from '../Admin/apiCalls/AdminApiCalls';
import { Row } from 'react-bootstrap';
import Cards from './Card';
import { IsAuthenticated } from '../user/apiCalls/localstorage';
import LandingPageWithoutLogin from './LandingPageWithoutLogin';
const LandingPage = () => {

    const [Categories, setCategories] = useState([])
    const [Services, setServices] = useState([]);
    const [reload, setreload] = useState("");
    const [cart, setCart] = useState([]);

    const { user } = IsAuthenticated();


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
        LoadAllCategories();
        LoadAllServices();
    }, [reload])


    return (
        <Home>
            <LandingPageWithoutLogin />
            <Row style={{ justifyContent: 'center' }}>
                {Services.map((service) => {
                    return (
                        < Cards
                            Service={service} key={service._id} />
                    )
                })}
            </Row>
        </Home>
    )
}

export default LandingPage;
