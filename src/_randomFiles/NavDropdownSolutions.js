import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import useFollowLink from '../services/customHooks/useFollowLink'

const NavDropdownSolutions = () => {

    const followLinkHandler = useFollowLink()

    const [show, setShow] = useState(false)
    const showDropdown = (e) => {
        setShow(true)
    }
    const hideDropdown = (e) => {
        setShow(false)
    }

    return (
        <NavDropdown 
            title="Решения" 
            id="main-nav-dropdown" 
            onClick={()=> show===false ? followLinkHandler('/solutions') : null}
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
        >
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/1')}>ERP-система</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/2')}>База знаний</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/3')}>BI-платформа</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/4')}>Система управления задачами</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/5')}>Система управления проектами</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/6')}>Интернет-магазин</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/7')}>Маркетплейс</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>followLinkHandler('/solutions/8')}>Интеграционные решения</NavDropdown.Item>
        </NavDropdown>
    )
}

export default NavDropdownSolutions
