import React, { useEffect, useState } from 'react'
import Home from '../core/Home'
import { getUserById, getServiceByUserId } from '../Admin/apiCalls/AdminApiCalls'
import { Row, Col } from 'react-bootstrap'
import '../Styles/Cards.css'
import Cards from '../core/Card'

const Profile = ({ match }) => {

    const [values, setvalues] = useState({
        name: "",
        contact: "",
        email: "",
        location: ""
    })

    const [services, setServices] = useState([])

    const { name, email, contact, loaction } = values;

    const LoadServiceByUserId = (id) => {
        getServiceByUserId(id)
            .then(data => {
                console.log(data)
                setServices(data)
            })
            .catch(err => { console.log(err) })
    }

    const LoadUserById = (id) => {
        getUserById(id)
            .then(data => {
                // console.log(data)
                setvalues({ ...values, name: data.name, email: data.email, contact: data.contact })
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        LoadUserById(match.params.userId)
        LoadServiceByUserId(match.params.userId)
    }, [])


    return (
        <Home>
            <div className="row" >
                <div className="col-sm-4" >
                    <div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive" />
                        <div class="profile-content">
                            <div class="profile-name"><h3><b>{name}</b></h3>
                            </div>
                            <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-8" >
                    <h2>{name}'s work</h2><br />
                    <div >{services.map((service) => {
                        return (
                            <div key={service._id} style={{ justifyContent: 'center' }}>
                                <Cards Service={service} ></Cards>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        </Home >
    )
}

export default Profile;
