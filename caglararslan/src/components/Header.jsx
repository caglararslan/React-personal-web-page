import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsGithub,BsLinkedin,BsMoon } from 'react-icons/bs';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
    <div className={`header ${theme ? "dark" : ""}`}>
        <Container>
            <Row>
                <Col xs={6} xl={5}>
                    <div className="logo">Çağlar Arslan</div>
                </Col>
                <Col xs={6} xl={7}>
                    <div className="header-right">
                        <div className="header-link-wrapper">
                            <ul>
                                <li>
                                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                    <BsMoon />
                                    </button>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-social">
                            <div className="header-social-content">
                                <div>
                                    <a href="#">
                                        <BsGithub />
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header-contact">
                            <a href="#contact">Contact w/ Me !</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Header
