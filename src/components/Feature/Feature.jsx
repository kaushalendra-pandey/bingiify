import React from 'react'
import { Container, SubTitle, Title } from "../styles/feature"
import OptForm from "../Opt-form/OptForm"

const Feature = () => {
    return (
        <Container>
            <Title> Unlimited Films, TV, Programs and more... </Title>
            <SubTitle> Watch Anywhere, Cancel Anytime </SubTitle>
            <OptForm/>
        </Container>
    )
}

export default Feature
