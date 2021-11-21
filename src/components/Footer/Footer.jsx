import React from 'react'
import { Container,Text ,Title,Row,Column,Break,Link } from './styles/footer'

const Footer = () => {
    return (
        <Container>
            <Title> Questions? Contact us. </Title>
            <Break/>
            <Row>
                <Column>
                    <Link href='#'> Dummy </Link>
                    <Link href='#'> Dummy </Link>
                    <Link href='#'> Dummy </Link>
                    <Link href='#'> Dummy </Link>
                    <Link href='#'> Dummy </Link>
                    <Link href='#'> Dummy </Link>
                </Column>

                <Column>
                    <Link href='#'> Help Center </Link>
                    <Link href='#'> Jobs </Link>
                    <Link href='#'> Terms of Use </Link>
                    <Link href='#'> Contact us </Link>
                </Column>

                <Column>
                    <Link href='#'> Account </Link>
                    <Link href='#'> Redeem Gift Cards </Link>
                    <Link href='#'> Privacy </Link>
                    <Link href='#'> Speed Test </Link>
                    <Link href='#'> Cookie Preference </Link>
                    <Link href='#'> Legal Notice </Link>
                </Column>
            </Row>
            <Break/>
            <Text> Netflix India </Text>

        </Container>
    )
}

export default Footer
