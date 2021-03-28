import React from "react";
import { Jumbotron } from "react-bootstrap"

function Jumbo(props) {
    return (
        <>
             <Jumbotron className="jumbo">
    <h1 className="m-auto">{props.blurb}</h1>
              </Jumbotron>
              
              <hr />
        </>
    )
}

export default Jumbo