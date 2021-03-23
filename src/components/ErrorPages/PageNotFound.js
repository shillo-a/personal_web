import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import useFollowLink from '../../services/customHooks/useFollowLink'

const PageNotFound = () => {

    const followLinkHandler = useFollowLink()

    return (
        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <h2>Страница не найдена</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-center" >
                    <Button variant="outline-primary" onClick={()=>followLinkHandler(`/`)}>Вернуться на главную</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound
