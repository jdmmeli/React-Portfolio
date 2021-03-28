import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { Card } from "react-bootstrap";
import "./style.css"


function ContactCard(props) {
    return (
        <>
           <Card className="card border border-0">
              <FontAwesomeIcon icon={props.icon} className="m-auto icons"/>
              <Card.Body className="m-auto cardText"><p>{props.text}</p></Card.Body>
           </Card>
        </>
    )
}

export default ContactCard