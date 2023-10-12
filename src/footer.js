import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col>
                        <Nav className="site-footer__menu">
                            <NavDropdown title="About" id="about-dropdown">
                                <NavDropdown.Item href="/">TechCrunch</NavDropdown.Item>
                                <NavDropdown.Item href="/pages/about-techcrunch">Staff</NavDropdown.Item>
                                <NavDropdown.Item href="/pages/contact-us/">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="/pages/advertisement-events-calendar/">Advertise</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.crunchboard.com/" target="_blank" rel="noopener noreferrer">
                                    Crunchboard Jobs
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/pages/site-map/">Site Map</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    {/* Ajoutez d'autres colonnes et composants React Bootstrap ici pour Legal, Trending Tech Topics, Social Links, Disclaimer, etc. */}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
