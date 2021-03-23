import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import DraftEditorView from './DraftEditorView'

const JsonTextBlock = ({ head, jsonText }) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                <h4>{head}</h4>
                <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-left align-items-center">
                    <DraftEditorView jsonText={jsonText} />
                </Col>
            </Row>
        </Container>
    )
}

export default JsonTextBlock
