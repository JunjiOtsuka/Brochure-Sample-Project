import { Nav, Navbar, Container, } from 'react-bootstrap'

export default function SiteNavBar() {
    return (
        <>
            <Navbar style={{position: "fixed", zIndex: "10", width: "100%"}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#review">Customer Review</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
