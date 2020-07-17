import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import signIn from './user/signIn'
import signUp from './user/signUp'
import Profile from './user/Profile'
import Dashboard from './user/UserDashboard'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signIn" exact component={signIn} />
                <Route path="/signUp" exact component={signUp} />
            </Switch>
        </BrowserRouter>
    )
}
