import React from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import navLinks from '../../lists/navLinks'
import useFollowLink from '../../services/customHooks/useFollowLink'
import { selectAllPortfolios } from '../../stateManagement/slices/portfolioSlice'
import { selectAllSolutions } from '../../stateManagement/slices/solutionSlice'
import { selectAllTechnologyTypes } from '../../stateManagement/slices/technologyTypeSlice'

// import './footer.css'

const FoooterMain = () => {

    const followLinkHandler = useFollowLink()
    
    // state management via redux BEGIN
    const solutions = useSelector(selectAllSolutions)
    const technologyTypes = useSelector(selectAllTechnologyTypes)
    const portfolios = useSelector(selectAllPortfolios)
    // state management via redux END

    var solutionsContent = ''
    if (solutions) {
        solutionsContent = solutions.map(solution => {
            return(
                <ListGroup.Item className="p-0 m-0 mt-1 border-0 bg-transparent" key={solution.id}>
                    <a className="text-secondary nav-link p-0 m-0" onClick={()=>{followLinkHandler(`/solutions/${solution.id}`)}} style={{cursor: 'pointer'}}><small>{solution.heading}</small></a>
                </ListGroup.Item>
            )
        })
    }

    var technologyTypesContent = ''
    if (technologyTypes) {
        technologyTypesContent = technologyTypes.map(technologyType => {
            return(
                <ListGroup.Item className="p-0 m-0 mt-1 border-0 bg-transparent" key={technologyType.id}>
                    <a className="text-secondary nav-link p-0 m-0" onClick={()=>{followLinkHandler(`/technologies/${technologyType.id}`)}} style={{cursor: 'pointer'}}><small>{technologyType.type}</small></a>
                </ListGroup.Item>
            )
        })
    }

    var portfoliosContent = ''
    if (portfolios) {
        portfoliosContent = portfolios.map(portfolio => {
            return(
                <ListGroup.Item className="p-0 m-0 mt-1 border-0 bg-transparent" key={portfolio.portfolio.id}>
                    <a className="text-secondary nav-link p-0 m-0" onClick={()=>{followLinkHandler(`/portfolios/${portfolio.portfolio.id}`)}} style={{cursor: 'pointer'}}><small>{portfolio.portfolio.heading}</small></a>
                </ListGroup.Item>
            )
        })
    }

    var contactsContent = (
        <>
            <ListGroup.Item className="p-0 m-0 border-0 bg-transparent">
                <a href="tel:+79958966376" className="text-primary nav-link p-0 m-0"><h4>+7 995 896-63-76</h4></a>
                <a href="mailto:info@Shillo.Co" className="text-primary nav-link p-0 m-0">info@Shillo.Co</a>
            </ListGroup.Item>
        </>
    )

    const navLinksContent = navLinks.map((navLink)=>{
        return (
            <Col key={navLink.pathname} className="mt-5 col-md-4 col-lg-3 col-12">
                <a className="text-dark nav-link p-0 m-0" onClick={()=>{followLinkHandler(`/${navLink.pathname}`)}} style={{cursor: 'pointer'}}><h6>{navLink.title}</h6></a>
                <ListGroup className="mt-3">
           
                    {navLink.pathname==="solutions" ? solutionsContent : null}
                    {navLink.pathname==="technologies" ? technologyTypesContent : null}
                    {navLink.pathname==="portfolios" ? portfoliosContent : null}
                    {navLink.pathname==="contacts" ? contactsContent : null}

                </ListGroup>
            </Col>
        )
    })

    return (
        <>
        <div className="dummy mt-5"></div>
        <footer className="mt-auto" style={{background: "#EEFAF6"}}>
            <Container>
                <Row>
                    {navLinksContent}
                </Row>
                
                <hr className="mt-3 mb-0"/>

                <Row>
                    <Col className="mt-4 mb-4">
                        <small>2014 — {new Date().getFullYear()} © Shillo Co. Все права защищены</small>
                    </Col>
                </Row>

            </Container>
        </footer>
        </>
    )
}

export default FoooterMain

{/* <li key={solution.id} className="pt-1">
<a href="" className="text-dark" onClick={()=>{followLinkHandler(`solutions/${solution.id}`)}}>{solution.heading}</a>
</li> */}

{/* <Col key={navLink.pathname} className="col-md-4 col-lg-3 col-12">
    <Button className="p-0 m-0" variant="link" className="text-dark" onClick={()=>{followLinkHandler(`/${navLink.pathname}`)}}><h6>{navLink.title}</h6></Button>
    <ul className="p-0 m-0">
        {navLink.pathname==="solutions" ? solutionsContent : null}
    </ul>
</Col> */}