import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button, Container, NavDropdown,  } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import useFollowLink from '../../services/customHooks/useFollowLink'

import navLinks from '../../lists/navLinks'

const NavbarMain = ({ currentPathname, setOrderProjectFormShow }) => {

    const followLinkHandler = useFollowLink()

    // change color on scroll BEGIN //
    var listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 50) {
            if (scrollState !== "offTop") {
            setScrollState("offTop")
            }
        } else {
            if (scrollState !== "top") {
            setScrollState("top")
            }
        }
        })
        return () => {
        document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    const navLinksContent = navLinks.map((navLink)=>{
        return (
            <Nav.Link 
                key={navLink.pathname} 
                eventKey={`/${navLink.pathname}`} 
                onClick={()=>followLinkHandler(`/${navLink.pathname}`)}
            >
                {navLink.title}
            </Nav.Link>
        )
    })
    // change color on scroll END //

    return (
        
        <Navbar sticky="top" expand="md" variant="light" className={scrollState==="offTop"?'shadow-sm bg-white':''} style={{transition: '.3s'}}>
        <Container >
            
            <Link to={'/'}>
                <Navbar.Brand>
                Shillo.Co
                    {/* <img src={logo} width="30" height="60" className="d-inline-block align-top" alt="Российские веб технологии"/> */}
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="main-navbar-nav"/>
            <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
                <div className="dummy-div"></div>
                <Nav activeKey={currentPathname}>
                    {navLinksContent}
                </Nav>

                <Button 
                    variant="primary" 
                    onClick={()=>{setOrderProjectFormShow(true)}}
                >
                    Заказать проект
                </Button>
                
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    )
}

export default NavbarMain
