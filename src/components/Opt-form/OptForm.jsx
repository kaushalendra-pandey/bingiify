import React from 'react'
import { Container,Input, Button,Break,Text } from '../styles/opt-form'

const OptForm = () => {
    return (
        <Container>
            <Input placeholder="Email Address"/>
            <Button> 
                Try it now 
                <img src="/images/icons/chevron-right.png" alt="Try Now" />
            </Button>
            <Break/>
            <Text>
                Ready to watch? Enter your email to create or restart
                your membership
            </Text>

        </Container>
    )
}

export default OptForm
