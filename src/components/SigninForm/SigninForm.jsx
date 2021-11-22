import React,{useState} from 'react'
import { Container, Title,Base,Text, Input, Link,  Submit, TextSmall } from '../styles/signinForm'

const SigninForm = () => {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    return (
        <Container>
            <Title>
                Signin
            </Title>
            <Base>
                <Input 
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                />
                <Input
                type="password"
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Submit>
                    Sign in
                </Submit>
            </Base>
            <Text>
                New to Netflix? <Link to="/signup"> Sign up Now </Link>
            </Text>
            <TextSmall>
                This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
            </TextSmall>
        </Container>
    )
}

export default SigninForm
