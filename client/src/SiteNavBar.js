import { Nav, Navbar, Container, } from 'react-bootstrap'
import React from 'react'

export default function SiteNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#Brand">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Sample Brochure
                    </Navbar.Brand>
                </Container>
                <Container className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
