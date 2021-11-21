import React from 'react'
import {Background, Container,Logo,ButtonLink } from '../styles/header'
import {Link as ReactRouterLink} from "react-router-dom"
import logo from "../../logo.svg"
import Feature from '../Feature/Feature'

const Header = () => {
    return (
        <Background>
            <Container>
                <ReactRouterLink to="/">
                    <Logo src={logo} alt="Netflix"></Logo>
                </ReactRouterLink>
                <ButtonLink to="/signIn">
                    Sign In
                </ButtonLink>
                
            </Container>
            <Feature/>
        </Background>
    )
}

export default Header
