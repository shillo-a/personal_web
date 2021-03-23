import React from 'react'
import { Container, Jumbotron, Row, Col, Button, CardColumns, Spinner , Image } from 'react-bootstrap'
import useFollowLink from '../services/customHooks/useFollowLink'

const JumbotronHeader2 = ({ head, pathName, path }) => {

    const followLinkHandler = useFollowLink()

    return (
        <>
        <Jumbotron className="pt-4 pb-0">
            <Container>

            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                <a className="text-secondary nav-link p-0 m-0 mr-2" onClick={()=>{followLinkHandler('/')}} style={{cursor: 'pointer'}}>Главная</a>
                <span className="text-secondary">/</span>
                <a className="text-secondary nav-link p-0 m-0 ml-2" onClick={()=>{followLinkHandler(`/${path}`)}} style={{cursor: 'pointer'}}>{pathName}</a>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-primary">{head}</h1>
                </Col>
            </Row>
            
            </Container>
        </Jumbotron>
        </>
    )
}

export default JumbotronHeader2