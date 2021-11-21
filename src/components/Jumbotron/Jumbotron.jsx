import React from "react"
import PropTypes from "prop-types"
import {Image,Inner, SubTitle, Pane, Title, Item } from "../styles/jumbotron"

const Jumbotron = ({title, imgSrc, subTitle, direction="row"}) => {
    return (
        <Item>
            <Inner direction={direction}>
                <Pane>
                    <Title>
                        {title}
                    </Title>
                    <SubTitle>
                        {subTitle}
                    </SubTitle>
                </Pane>
                <Pane>
                    <Image src={imgSrc}/>
                </Pane>
            </Inner>
        </Item>
        
    )
}

export default Jumbotron

Jumbotron.propTypes = {
    title: PropTypes.String, 
    subTitle: PropTypes.String,
    imgSrc:PropTypes.String,
    direction:PropTypes.String
}