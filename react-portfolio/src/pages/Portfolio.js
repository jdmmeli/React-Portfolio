import React from "react";
import Jumbo from "../components/Jumbo/Jumbo";
import { CardDeck, Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import saiddit5 from "../images/saiddit5.png"
import lyrics4 from "../images/lyrics4.png"
import trivia3 from "../images/trivia3.png"

function Portfolio() {
    return (
        <>
            <Container fluid className="mt-5">
                <Jumbo blurb="Portfolio" />
                <CardDeck className="mt-5">
                    <ProjectCard
                        image={trivia3}
                        name="lott"
                        projectName="Lord of the Trivia"
                        url="https://lord-of-the-trivia.herokuapp.com/"
                    />
                    <ProjectCard
                        image={saiddit5}
                        name="parrot"
                        projectName="Saiddit"
                    />
                    <ProjectCard
                        image={lyrics4}
                        name="FindALyric"
                        projectName="Find a Lyric"
                        url="https://jdmmeli.github.io/FindaLyric"
                    />
                </CardDeck>

            </Container>
        </>
    )
}

export default Portfolio