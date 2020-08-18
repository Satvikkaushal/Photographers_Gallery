import React from 'react'
import { FcApproval } from "react-icons/fc";
import '../Styles/Landingpage.css'
import CardsCarousel from './CardsCarousel';

const LandingPageWithoutLogin = () => {
    return (
        <div>
            <div style={{
                marginBottom: "20px", textAlign: "center", color: "black", backgroundRepeat: "no-repeat",
                backgroundSize: "auto", backgroundImage: "url('https://i.pinimg.com/originals/41/1e/19/411e198253e188a93e6de51e16517665.jpg')"
            }}>
                <div className="row" style={{ paddingTop: "50px" }}><div className="col-sm text-right options"><h4><a style={{ textDecoration: "none" }} className="freelancer" href="/freelancers">hire a Photographer</a></h4></div><div className="col-sm text-left"><h4><a style={{ textDecoration: "none" }} className="freelancer" href="/signIn    ">Become Photographer</a></h4></div></div><br /><br /><br />
                <div style={{ fontSize: "50px" }}>Get matched with vetted freelance<br /> developers in one day.</div><br /><div style={{ fontSize: "25px" }}>Gun.io conducts code, culture, and reference assessments on your behalf, giving your team<br /> an uncommon ability to find perfect fits, quickly.</div><br /><br /><br /><br /><br /><br /><br />
            </div>
            <h2>Popular Services</h2>
            <div className="row">
                <div className="col-sm" style={{ paddingRight: '100px' }}>
                    <h3><b>Get work done faster, with confidence</b></h3>
                    <br />
                    <h5><b><FcApproval /><span> </span>Payment protection, guaranteed</b></h5>
                    <h6 style={{ color: "grey" }}>Payment is released to the freelancer once you’re pleased and approve the work you get.</h6><br />
                    <h5><b><FcApproval /><span> </span>Know the price up front</b></h5>
                    <h6 style={{ color: "grey" }}>Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.</h6><br />
                    <h5><b><FcApproval /><span> </span>We’re here for you 24/7</b></h5>
                    <h6 style={{ color: "grey" }}>Reach out to us at any time! We have your back, from answering your questions to resolving issues.</h6><br />
                </div>
                <div className="col-sm" >
                    <img className="img img-fluid" src="https://thumbs.gfycat.com/LikableBraveGoosefish-size_restricted.gif" />
                </div>
            </div><br />

            <h2>Explore the Market Place</h2><br />
            <CardsCarousel />
        </div >

    )
}

export default LandingPageWithoutLogin;