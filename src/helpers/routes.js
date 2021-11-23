import React from 'react';
import {Navigate} from 'react-router-dom';
import {PropTypes} from "prop-types"

export function IsUserRedirect({ user, loggedInPath, children, }) {
  return user ? <Navigate to={loggedInPath} /> : children;
}

export function ProtectedRoute({ user, children }) {
  return user ? children  : <Navigate to="/signin"/>
}

IsUserRedirect.propTypes = {
    user: PropTypes.any,
    loggedInPath: PropTypes.String,
    children: PropTypes.any
}

ProtectedRoute.propTypes = {
    user: PropTypes.any,
    children: PropTypes.any
}