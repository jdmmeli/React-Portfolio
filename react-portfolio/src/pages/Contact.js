import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import Jumbo from "../components/Jumbo/Jumbo";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactCard from "../components/ContactCard/ContactCard"






function Contact() {
    return (
        <>
            <Container fluid className="mt-5">
                
                <Jumbo blurb="Contact Info" />
                   <CardDeck>
                      <ContactCard icon= {faEnvelopeOpenText} text="jdmmeli@yahoo.com" />
                      <ContactCard icon={faMobileAlt} text="804-762-3651" />
                      <ContactCard icon={faLinkedin} text={<a href="https://www.linkedin.com/in/jason-meli-3913281a1/" target="_blank" rel="noreferrer"  className="contactText">Linkedin</a>} />
                      <ContactCard icon={faGithub} text={<a href="https://github.com/jdmmeli" target="_blank" rel="noreferrer" className="contactText" >Github</a>} />
                      <ContactCard icon={faFilePdf}text="resume" />
                    </CardDeck>
               
                  
                

            </Container>

        </>
    )
}

export default Contact