import React from "react";
import Jumbo from "../components/Jumbo/Jumbo"
import { Container, Row, Col } from "react-bootstrap"

function Bio() {
  return (
    <>
      <Container fluid className="mt-5">
        <Jumbo blurb="About Me" />
        <Row>
          <Col md={6} className="mt-5">
            <img src="https://place-hold.it/300x300" alt="placeholder" className=""></img>
          </Col>
          <Col md={6} className="mt-5">
            <h4 className="text">Front-end web developer who uses previous experiences of working in a team to effectively collaborate with team members to achieve the desired outcome of a project. A recent graduate of the University of Richmond’s Coding Bootcamp, where I earned a Certificate in Full Stack Development and developed skills in CSS, Javascript, and React.js. A dedicated worker who has held two jobs at once in the past, I view challenges not as obstacles, but as opportunities to learn and further the development of my skills. I worked on a four person team to develop  a MERN app that is a forum where users can create a profile, create posts on topics, comment on posts, and upload images. I look forward to using my experience as part of a quality-driven team to help shape a better user experience on the web.</h4>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Bio