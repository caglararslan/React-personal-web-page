import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div className="about-wrapper">
            <Container>
                <div className="about-title">About & Resume</div>
                <div className="about-content">
                    I graduated from Namık Kemal University in 2021 by completing computer engineering.I dealt with many projects during my student years. I started my working life as a front-end developer while still a student. 
                    I am very happy to do the job I love, my biggest goal is to add great value to the projects I take part in by constantly improving myself.
                </div>
                <a href='../assets/files/myresume.pdf' className="resume-button" download>Download Resume</a>
            </Container>
        </div>
    )
}

export default About
