import React,{useState,useContext} from 'react'
import { FirebaseContext } from '../../context/firebase';
import { Container, Error,Title,Base,Text, Input, Link,  Submit, TextSmall } from '../styles/signinForm'
import { useNavigate } from 'react-router';

const SigninForm = () => {
    const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(emailAddress,password)
        .then(() => {
            navigate("/browse")
        }).catch((err) => {
            setEmailAddress("")
            setPassword("")
            setError(err.message)
        })
    }

    return (
        <Container>
            <Title>
                Signin
            </Title>
            {
                error && <Error data-testid="error">{error}</Error>
            }
            <Base onSubmit={handleSubmit} method="POST">
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
