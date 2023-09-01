import React from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import ReactLogo from '../assets/images/header-img.svg';
import Typewriter from 'typewriter-effect';

function EntryTop() {
    return (
        <div className="entry-top">
            <Container>
                <Row>
                    <Col xs={12} xl={8}>
                        <div className="entry-left-content">
                            <div className="left-content-top-title">Welcome To My Web Page!</div>
                            <div className="left-content-main-title"><div className="name-title">Hi! I'm Çağlar </div>
                            <Typewriter
                                options={{
                                    strings: [' Frontend Developer', ' Computer Engineer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </div>
                            <div className="left-content-sub-title">Hello, im Çağlar. İn this website you can get to know me a little bit and you can contact with me and tell me about your great projects. In the meantime, you can click on the GitHub link for the projects i have developed.</div>
                            <div className="left-content-button">
                                <a href="#contact">
                                    <span>Let's Connect</span>
                                    <BsArrowRightCircleFill/>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={4}>
                        <div className="entry-right-content">
                        <img src={ReactLogo} alt="React Logo" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EntryTop
