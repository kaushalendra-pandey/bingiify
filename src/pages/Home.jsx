import React from 'react'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import JumbotronContainer from '../components/Jumbotron'
import Header from '../components/Header/Header'

const Home = () => {
    return (
       <>
            <Header/>
            <JumbotronContainer/>
            <Faq/>
            <Footer/>
       </>
    )
}

export default Home
