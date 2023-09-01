import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';
import ContactContent from './ContactContent';

function ContactWrapper() {
    return (
        <div id="contact" className="contact-wrapper">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <ContactContent/>
                    </Col>
                    <Col xs={12} md={6}>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactWrapper
