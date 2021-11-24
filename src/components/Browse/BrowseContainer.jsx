/* eslint-disable no-unused-vars */
import React, {useContext,useState,useEffect} from 'react'
import { FirebaseContext } from '../../context/firebase'
import Loading from '../Loading/Loading'
import Profile from '../Profile/Profile'
import {Link as ReactRouterLink} from "react-router-dom"
import { Background, Search,SearchIcon,SearchInput,FeatureCallOut,Profile as HeaderProfile,Group,Picture,Dropdown ,Feature,Text,PlayButton,Logo,Container, Link} from '../styles/header'
import { ReleaseBody } from '../styles/loading'
import logo from "../../logo.svg"

const BrowseContainer = () => {
    const {firebase} =  useContext(FirebaseContext)
    const [profile, setProfile] =  useState({})
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        console.log(">>",profile)
        setTimeout(() => {
            setLoading(false)
            console.log(">> chaanges",loading)
        },3000)
        
    }, [profile.displayName])

    const user = firebase.auth().currentUser || {}

    const handleProfileClick = (profileObj) => {
            setProfile(profileObj)
            setLoading(true)
    }
    
    return (
        <>
        {
            profile?.displayName ? (
                <>
                {
                    loading ? 
                    (<Loading/>) : 
                    (<ReleaseBody/>)
                }

                <Background src="joker1" dontShowOnSmallViewPort> 
                    <Container> 
                        <Group>
                            <Logo src={logo} to="/" alt="Netflix"/>
                            <Link> Series </Link>
                            <Link> Films </Link>
                        </Group>
                        <Group>
                            <Search>
                                <SearchInput placeholder="Search Something"/>
                                <SearchIcon> 
                                    <img src="/images/icons/search.png" alt="" />    
                                 </SearchIcon>
                            </Search>
                        
                            <HeaderProfile>
                                <Picture src={profile?.photoURL}/>
                                {/* <Picture src="/images/users/2.png"/> */}
                                <Dropdown>
                                    <Group>
                                        <Picture src={profile?.photoURL}/>
                                        <Link> {profile?.displayName} </Link>
                                        
                                    </Group>  
                                    <Group>
                                        <Link> Sign Out</Link>
                                    </Group>
                                </Dropdown>
                               
                            </HeaderProfile>
                        </Group>
                        
                    </Container>
                    
                    <Feature>
                            <FeatureCallOut> Watch Joker Now!</FeatureCallOut>
                           <Text>
                           Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                            futile attempt to feel like he is part of the world around him.

                           </Text>
                           <PlayButton> Play </PlayButton>
                       </Feature>
                </Background>
                </>
            ) :
            
            <Profile user={user} handleProfileClick={handleProfileClick}/>
            
        }
        </>
    )
}

export default BrowseContainer
