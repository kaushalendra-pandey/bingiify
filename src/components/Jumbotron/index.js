import React from "react";
import { Container } from "../styles/jumbotron";
import Jumbotron from "./Jumbotron";
import jumboData from "../../constants/jumbo.json"


const JumbotronContainer = () => {
    return (
        <Container>
            {
                jumboData.map(jumbo => (
                    <Jumbotron
                    key={jumbo.id}
                    title={jumbo.title}
                    subTitle={jumbo.subTitle}
                    imgSrc={jumbo.image}
                    direction={jumbo.direction}
                    />
                ))
            }
        </Container>
    )
}

export default JumbotronContainer
