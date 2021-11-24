import React,{useEffect,useState} from 'react'
import { Logo,Container } from '../styles/header'
import logo from "../../logo.svg"
import {ProfileContainer,Title, List, Picture, Name, Item } from '../styles/profile'
import {PropTypes} from "prop-types"

const Profile = ({user,handleProfileClick}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000)
    }, [])

    return (
        <>
            <Container>
                <Logo src={logo} to="/" alt="Netflix"/>
            </Container>
             {console.log(">>>>",user)}
            <ProfileContainer>
                {
                    loading ? <img src="/images/misc/loading.gif" alt="loader" /> :
                    <>
                    <Title> {`Who's watching?`} </Title>
                    <List>
                        <Item onClick={() => {handleProfileClick({displayName:user?.displayName,photoURL:user.photoURL})}}>
                            <Picture src={"/images/users/1.png"}/>
                            <Name> {user?.displayName} </Name>

                        </Item>
                    
                    </List>
                    </>
                }
            </ProfileContainer>
            
        </>
    )
}

export default Profile

Profile.propTypes = {
    user: PropTypes.String,
    handleProfileClick: PropTypes.any
}