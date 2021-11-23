import React,{useState,useContext} from 'react'
import { FirebaseContext } from '../../context/firebase';
import { Container, Error,Title,Base,Text, Input, Link,  Submit, TextSmall } from '../styles/signinForm'
import {useNavigate} from "react-router-dom"

const SignupForm = () => {
    const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('');
    const [firstname, setFirstname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstname === "" || password === "" || emailAddress === ""

    const handleSubmit = (e) => {
        e.preventDefault()
        return firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password)
                .then((result) =>
                    result.user
                    .updateProfile({
                        displayName: firstname,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    navigate("/browse")
                })
      )
      .catch((error) => {
        setFirstname('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
        

    return (
        <Container>
            <Title>
               Signup
            </Title>
            {
                error && <Error data-testid="error">{error}</Error>
            }
            <Base onSubmit={handleSubmit} method="POST">
                <Input 
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />  
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
                <Submit
                disabled={isInvalid}
                type="submit"
                data-testid="sign-up"
                >
                    Sign up
                </Submit>
            </Base>
            <Text>
                Already a User <Link to="/signin"> Sign in Now </Link>
            </Text>
            <TextSmall>
                This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
            </TextSmall>
        </Container>
    )
}

export default SignupForm
