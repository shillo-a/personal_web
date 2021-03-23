import React from 'react'
import { Card, Col } from 'react-bootstrap'

const FeatureExcerpt = ({ text }) => {
    return (
        <Card className="text-center">
            <Card.Body>{text}</Card.Body>
        </Card>
    )
}

export default FeatureExcerpt
