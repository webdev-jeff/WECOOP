import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { cookie } from '../shared/cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.

  return (
    <Route
      {...rest}
      render={props =>
        cookie.get('login') === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/notlogin', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
