import React from 'react'
import { Container,Title,Inner } from '../styles/accordion'
import faqData from "../../constants/faqs.json"
import Accordion from '../Accordion/Accordian'


const Faq = () => {
    return (
        <Container>
            <Inner>
                <Title>Frequently Asked Questions</Title>
                {
                    faqData.map(faq => (
                        <Accordion
                        key={faq.id}
                        header={faq.header}
                        body={faq.body}
                        />

                    ))
                }

            </Inner>
            
        </Container>   
    )
}

export default Faq
