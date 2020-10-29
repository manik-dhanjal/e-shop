import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
const Header = () => {
    return (
        <header>
           
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                <Container>
                <LinkContainer to='/'>{( <Navbar.Brand >Beard Boss</Navbar.Brand>)}</LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                           {( <Nav.Link href="/cart"><i className="fas fa-shopping-cart"/>Cart</Nav.Link>)}
                        </LinkContainer>
                        <LinkContainer to="/sign">
                           {( <Nav.Link href="/sign">
                                <i className="fas fa-user"/> Sign In
                            </Nav.Link>)}
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                  
        </header>
    )
}

export default Header
