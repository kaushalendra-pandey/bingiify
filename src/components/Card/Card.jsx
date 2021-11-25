/* eslint-disable no-unused-vars */
  import React,{useState} from 'react'
  import {
    Container as CardContainer,
    Group as CardGroup,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
  } from '../styles/card';

  import PropTypes from "prop-types"

  
  
  const Card = ({category,slidesData,setShowFeature,showFeature,itemFeature,setItemFeature}) => {
    
      return (
          <>
           <CardGroup>
                    {
                        slidesData.map((slideItem) => (
                            <CardContainer key={`${category}-${slideItem.title.toLowerCase()}`}>
                                <Title>
                                    {slideItem.title}
                                </Title>
                                <Entities>
                                    {slideItem.data.map((item) => (
                                        <Item key={item.docId} onClick={() => {
                                            setItemFeature(item)
                                            setShowFeature(true)
                                        }}>
                                            <Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}></Image>
                                            <Meta>
                                                <SubTitle>
                                                    {item.title}
                                                </SubTitle>
                                                <Text>
                                                    {item.description}
                                                </Text>
                                            </Meta>
                                        </Item>

                                    ))}
                                </Entities>
                                {
                                    showFeature && (
                                        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
                                            <Content>
                                                <FeatureTitle>
                                                    {itemFeature?.title}
                                                </FeatureTitle>
                                                <FeatureText>
                                                    {itemFeature.description}
                                                </FeatureText>
                                                <FeatureClose onClick={() => setShowFeature(false)}>
                                                    <img src="/images/icons/close.png" alt="Close" />
                                                </FeatureClose>

                                                <CardGroup margin="30px 0" flexDirection="row" alignItems="center">
                                                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                                                    <FeatureText fontWeight="bold">
                                                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                                                    </FeatureText>
                                                </CardGroup>
                                            </Content>
                                        </Feature>
                                    )
                                }
                            </CardContainer>
                        ))
                    }
               </CardGroup>
            
          </>
      )
  }
  
  export default Card
  
  Card.propTypes = {
      slidesData: PropTypes.array,
      category : PropTypes.string,
      showFeature: PropTypes.bool,
      itemFeature: PropTypes.any,
      setShowFeature: PropTypes.func,
      setItemFeature: PropTypes.func
  }