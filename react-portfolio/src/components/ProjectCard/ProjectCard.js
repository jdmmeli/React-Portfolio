import React from "react";
import { Card } from "react-bootstrap";


function ProjectCard(props) {
    return (
        <>

            <Card className="bg-light text-black">
                <a href={props.url} target="_blank" rel="noreferrer" >
                    <Card.Img className="border-bottom border-lightgrey" src={props.image} alt={props.name} />

                    <Card.Body>
                        <h3 className="projectLink" style={{ textAlign: "center" }}>{props.projectName}</h3>
                    </Card.Body>
                </a>
            </Card>

        </>
    )
}

export default ProjectCard