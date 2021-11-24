/* eslint-disable no-unused-vars */
import React, {useContext,useState,useEffect} from 'react'
import { FirebaseContext } from '../../context/firebase'
import Loading from '../Loading/Loading'
import Profile from '../Profile/Profile'
import { ReleaseBody } from '../styles/loading'

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
                loading ? <Loading/> : <ReleaseBody/>
            ) :
            
            <Profile user={user} handleProfileClick={handleProfileClick}/>
            
        }
        </>
    )
}

export default BrowseContainer
