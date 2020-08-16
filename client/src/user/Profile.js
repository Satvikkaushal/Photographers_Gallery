import React, { useEffect, useState } from 'react'
import Home from '../core/Home'
import { getUserById, getServiceByUserId } from '../Admin/apiCalls/AdminApiCalls'
import { Row, Col, Button } from 'react-bootstrap'
import '../Styles/Cards.css'
import Cards from '../core/Card'
import { FiEdit3 } from "react-icons/fi";
import { updateUser } from './apiCalls/ApiCalls'
import { FaUserCheck } from "react-icons/fa";

import { FcOk } from "react-icons/fc";
import { MdClear, MdLocationOn } from "react-icons/md";
import { IsAuthenticated } from './apiCalls/localstorage'

const Profile = ({ match }) => {

    const [values, setvalues] = useState({
        name: "",
        contact: "",
        email: "",
        location: "",
        profilePic: "",
        tagLine: "",
        joinedOn: "",
        description: ""
    })

    const { user } = IsAuthenticated();

    const publicMode = IsAuthenticated() ? !(user._id == match.params.userId) : true;

    const [Editmode, setEditmode] = useState(false)

    const [services, setServices] = useState([])

    const { name, email, contact, location, tagLine, joinedOn, description } = values;

    const handleChange = (name, elementId) => event => {
        console.log(event.target.innerText)
        var range, selection;
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(elementId);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range)
        setvalues({ ...values, [name]: event.target.innerText })
    }


    const UIElementChanges = () => {
        setEditmode(false)
        document.getElementById("updateOptions").style.display = "none"
        document.getElementById("description").contentEditable = "false"
    }

    const updateProfile = event => {
        event.preventDefault();
        console.log(tagLine)
        updateUser({ name, tagLine, email, description, contact, location });
        UIElementChanges();
    }

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
                setvalues({ ...values, name: data.name, email: data.email, description: data.description, tagLine: data.tagLine, contact: data.contact, joinedOn: data.createdAt, location: data.location })
                console.log(data.createdAt.substr(0, 4))
                console.log(data.description)

            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        LoadUserById(match.params.userId)
        LoadServiceByUserId(match.params.userId)
    }, [])

    const profileCard = () => (
        <div class="profile-card-4 text-center" ><img style={{ height: '18rem' }} src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-fluid" />
            <div class="profile-content">
                <div class="profile-name" value={name}><h3><b>{name}</b></h3>
                </div>{updateOptions(document.getElementById("tagline"))}
                <div className="profile-description" value={tagLine} id="tagline" onInput={handleChange('tagLine', document.getElementById("tagline"))}>{tagLine}</div>
                <hr />
                <div className="row" style={{ color: "grey" }}><div className="col-sm text-left"><MdLocationOn /><span>  </span>From</div><div className="col-sm text-right"><b>India</b></div></div>
                <div className="row" style={{ color: "grey" }}><div className="col-sm text-left "><FaUserCheck /><span>   </span>Member since</div><div className="col-sm text-right"><b>{joinedOn.substr(0, 4)}</b></div></div>
            </div></div>
    )

    const updateOptions = (Id) => (
        <div> <div onClick={() => {
            setEditmode(true)
            Id.contentEditable = "true";
        }}>{!(Editmode) && !publicMode && (<FiEdit3 />)}</div >{(Editmode) && (<div className="row">
            <div className="col-sm"><div onClick={() => {
                setEditmode(false)
                Id.contentEditable = "false";
            }}><MdClear color="red" size='1.5rem' /></div></div><div className="col-sm"><div onClick={updateProfile}><FcOk color="green" size='1.5rem' /></div></div>
        </div>)
            }</div>
    )

    const descriptionOption = (Id) => (
        (!publicMode) && (
            <div onClick={() => {
                Id.contentEditable = "true";
                document.getElementById("updateOptions").style.display = "block"
                Id.focus();
            }}>Edit </div>
        )
    )



    const userDescriptionCard = () => {
        return (
            <div class="profile-card-4" >
                <div class="profile-content">
                    {(!publicMode) && (<div><button type="button" class="btn btn-success form-control">view Public view</button><br /><br /></div>)}
                    <div></div> <div className="row">
                        <div className="col-sm"><b>Description</b></div>
                        <div className="col-sm text-right">{descriptionOption(document.getElementById("description"))}</div><br /></div>
                    <div value={description} id="description" style={{ padding: "1rem" }} onInput={handleChange('description', document.getElementById("description"))}>{description}</div>
                    <div id="updateOptions" style={{ display: "none" }}>
                        <button type="button" style={{ marginBottom: '5px' }} class="btn btn-secondary form-control" onClick={() => {
                            document.getElementById("updateOptions").style.display = "none"
                            document.getElementById("description").contentEditable = "false"
                        }}>Cancel</button>
                        <button type="button" class="btn btn-success form-control" onClick={updateProfile}>Update</button>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <Home>
            <div className="row" >
                <div className="col-sm-4" >
                    {profileCard()}
                    {userDescriptionCard()}
                </div>

                <div className="col-sm-8" >
                    <h2>{name}'s work</h2><br />
                    <div >{services.map((service) => {
                        return (
                            <div key={service._id} style={{ justifyContent: 'center' }}>
                                <Cards Service={service} ></Cards>
                            </div>)
                    })}</div>
                </div>
            </div>
        </Home >
    )
}

export default Profile;
