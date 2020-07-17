import React from 'react'
import Footer from './Footer'
import NavbarItems from './Navbar';


const Home = ({ tittle = "My Tittle",
    className = "p-4 jumbotron",
    children
}) => {
    return (
        <div>
            <NavbarItems />
            <div className="container-fluid">
                <div className={className}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;

