import React,{useState} from 'react'
import {PropTypes} from "prop-types"
import {Item,Header,Body} from '../styles/accordion'

const Accordian = ({header,body}) => {
    const [toggleShow,setToggleShow] = useState(false)
    
    const handleToggleShow = () => {
        console.log(toggleShow)
        setToggleShow(!toggleShow)
    }

    return (
    
            <Item>
                <Header onClick={handleToggleShow}>
                    {header}
                    {
                        toggleShow ? 
                        <img src="/images/icons/close-slim.png" alt="close" /> :
                        <img src="/images/icons/add.png" alt="open" />
                    }
                </Header>
                
               <Body className={toggleShow ? "open" : "closed"}>
                   <span> {body} </span>
               </Body>
                
            </Item>
        
    )
}

export default Accordian

Accordian.propTypes = {
    header: PropTypes.String, 
    body: PropTypes.String,
}