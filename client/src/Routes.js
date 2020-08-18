import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import LandingPage from './core/LandingPage'
import signIn from './user/signIn'
import signUp from './user/signUp'
import Profile from './user/Profile'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './Admin/AdminDashboard'
import PrivateRoutes from './privateRoutes/PrivateRoutes'
import AdminRoutes from './privateRoutes/AdminRoutes'
import ManageCategories from './Admin/ManageCategories'
import ManageServices from './Admin/ManageServices'
import Customers from './Admin/Customers'
// import Sellers from './Admin/Sellers'
import UpdateService from './Admin/UpdateService'
import Saved from './core/Saved'
import Sellers from './core/Sellers'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signIn" exact component={signIn} />
                <Route path="/signUp" exact component={signUp} />
                <Route path="/user/:userId" exact component={Profile} />/our-freelancers
                <Route path="/freelancers" exact component={Sellers} />
                <PrivateRoutes path="/dashboard" exact component={Dashboard} />
                <PrivateRoutes path="/saved" exact component={Saved} />
                <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoutes path="/admin/categories" exact component={ManageCategories} />
                <AdminRoutes path="/admin/services" exact component={ManageServices} />
                <AdminRoutes path="/admin/customers" exact component={Customers} />
                {/* <AdminRoutes path="/admin/sellers" exact component={Sellers} /> */}
                <AdminRoutes path="/admin/updateservice" exact component={UpdateService} />

            </Switch>
        </BrowserRouter>
    )
}
