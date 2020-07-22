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



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signIn" exact component={signIn} />
                <Route path="/signUp" exact component={signUp} />
                <PrivateRoutes path="/dashboard" exact component={Dashboard} />
                <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoutes path="/admin/categories" exact component={ManageCategories} />
                <AdminRoutes path="/admin/services" exact component={ManageServices} />
            </Switch>
        </BrowserRouter>
    )
}
