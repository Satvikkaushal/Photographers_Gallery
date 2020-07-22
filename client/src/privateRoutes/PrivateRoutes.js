import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IsAuthenticated } from '../user/apiCalls/localstorage';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                IsAuthenticated() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signIn",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoutes;
