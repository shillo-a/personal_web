import React from 'react'
import { Breadcrumb, Button, Col, Container, Jumbotron, Row, Spinner, Image } from 'react-bootstrap'

const JumbotronHeader1 = ({ head, image, body }) => {
    return (
        <>
        <Jumbotron className="pt-4 pb-0">
            <Container>
            <Row>
                <Col sm={12} md={6} className="align-self-center">
                    <Row>
                        <Col>
                            <h1 className="text-primary">{head}</h1>
                            
                        </Col>
                    </Row>
                    
                    <Row className="mt-2">
                        <Col>
                        <hr></hr>
                            <p className="lead">{body}</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-none d-md-block" md={6}>
                    <Image src={image} alt={head} className="float-right" fluid></Image>
                </Col>
            </Row>
            </Container>
        </Jumbotron>
        </>
    )
}

export default JumbotronHeader1

