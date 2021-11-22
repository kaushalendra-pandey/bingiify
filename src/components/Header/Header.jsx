import React from 'react'
import {Background, Container,Logo,ButtonLink } from '../styles/header'
import {Link as ReactRouterLink} from "react-router-dom"
import logo from "../../logo.svg"
import PropTypes from "prop-types"
import Feature from '../Feature/Feature'
import SigninForm from '../SigninForm/SigninForm.jsx'


const Header = ({show=true}) => {
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
                show ? <Feature/> : <SigninForm/>
            }
            
        </Background>
    )
}

export default Header

Header.propTypes = {
    show: PropTypes.bool
}