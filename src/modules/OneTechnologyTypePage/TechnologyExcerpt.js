import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const TechnologyExcerpt = ({ technology }) => {
    return (
        <Col className="mt-3 col-md-6 col-lg-6 col-12">
        <Card className="h-100">
            <Card.Body>
                <Row>
                    <Col sm={12} md={4} lg={3} >
                        <Card.Title className="mb-3 text-primary"> {technology.technology} </Card.Title>
                    </Col>
                    <Col sm={12} md={8} lg={9} >
                        <Card.Text className="text-secondary"> {technology.description} </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Col>

    
    )
}

export default TechnologyExcerpt