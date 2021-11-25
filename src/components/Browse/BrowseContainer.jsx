/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext,useState,useEffect} from 'react'
import { FirebaseContext } from '../../context/firebase'
import Loading from '../Loading/Loading'
import Profile from '../Profile/Profile'
import {Link as ReactRouterLink} from "react-router-dom"
import Footer from "../Footer/Footer"
import { 
    Group as CardGroup,
    Container as CardContainer,
    Title,
    Item,
    Entities,
    Image,
} from '../styles/card' 
import { Background, Search,SearchIcon,SearchInput,FeatureCallOut,Profile as HeaderProfile,Group,Picture,Dropdown ,Feature,Text,PlayButton,Logo,Container, Link} from '../styles/header'
import { ReleaseBody } from '../styles/loading'
import logo from "../../logo.svg"
import Card from '../Card/Card'
import PropTypes from "prop-types"


const BrowseContainer = ({slides}) => {
    const {firebase} =  useContext(FirebaseContext)
    const [profile, setProfile] =  useState({})
    const [loading,setLoading] = useState(false)
    const [searchTarget,setSearchTarget] = useState("")
    const [searchActive, setSearchActive] = useState("")
    const [category,setCategory] = useState("series")
    const [slidesData,setSlidesData] = useState([])
    const [itemFeature, setItemFeature] = useState({})
    const [showFeature,setShowFeature] = useState(false)
    console.log(process.env.REACT_APP_APIKEY)

    useEffect(() => {
        console.log(">>",profile)
        setTimeout(() => {
            setLoading(false)
            console.log(">> chaanges",loading)
        },3000)
        
    }, [profile.displayName])

    useEffect(() => {
        setSlidesData(slides[category])
        setShowFeature(false)
        setItemFeature({})
    },[slides,category])

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
                    (<Loading photoURL={profile?.photoURL}/>) : 
                    (<ReleaseBody/>)
                }

                <Background src="joker1" dontShowOnSmallViewPort> 
                    <Container> 
                        <Group>
                            <Logo src={logo} to="/" alt="Netflix"/>
                            <Link active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}> Series </Link>
                            <Link active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}> Films </Link>
                        </Group>
                        <Group>
                            <Search>
                                <SearchInput
                                value={searchTarget}
                                onChange={(e) => setSearchTarget(e.target.value)}
                                placeholder="Search Something"/>
                                <SearchIcon
                                onClick={() => setSearchActive() }
                                > 
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
                                        <Link onClick={() => firebase.auth().signOut()}> Sign Out</Link>
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
                <Card 
                category={category} 
                slidesData={slidesData}
                itemFeature={itemFeature}
                setItemFeature={setItemFeature}
                showFeature={showFeature}
                setShowFeature={setShowFeature}
                
                />
                <Footer/>
                </>
            ) :
            
            <Profile user={user} handleProfileClick={handleProfileClick}/>
            
        }
        </>
    )
}

export default BrowseContainer

BrowseContainer.propTypes = {
    slides: PropTypes.object
}