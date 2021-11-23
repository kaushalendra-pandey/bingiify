import React from 'react'
import {Background, Container,Logo,ButtonLink } from '../styles/header'
import {Link as ReactRouterLink} from "react-router-dom"
import logo from "../../logo.svg"
import PropTypes from "prop-types"
import Feature from '../Feature/Feature'
import SigninForm from '../SigninForm/SigninForm.jsx'
import SignupForm from '../SignupForm/SignupForm'


const Header = ({signin=false,signup=false}) => {
    return (
        <Background>
            <Container>
                <ReactRouterLink to="/">
                    <Logo src={logo} alt="Netflix"></Logo>
                </ReactRouterLink>
                <ButtonLink to="/signin">
                    Sign In
                </ButtonLink>
            
            </Container>
            {
                signin ? <SigninForm/> : 
                signup ? <SignupForm/> :
                <Feature/>
            }
            
        </Background>
    )
}

export default Header

Header.propTypes = {
    signin: PropTypes.bool,
    signup: PropTypes.bool
}