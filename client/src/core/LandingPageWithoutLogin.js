import React from 'react'
import { FcApproval } from "react-icons/fc";

const LandingPageWithoutLogin = () => {
    return (
        <div>
            <div>
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
                        <img class="img img-fluid" src="https://thumbs.gfycat.com/LikableBraveGoosefish-size_restricted.gif" />
                    </div>
                </div><br />
            </div>

        </div>
    )
}

export default LandingPageWithoutLogin;