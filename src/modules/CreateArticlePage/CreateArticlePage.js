import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

import DraftEditor from '../../components/DraftEditor/DraftEditor'

const CreateArticlePage = () => {

    const [jsonText, setJsonText] = useState('{"blocks":[{"key":"8aqt","text":"Введите текст","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}')
    
    const [dummyObserver, setDummyObserver] = useState('')

    const editorChangeHandler = (newJsonText) => {
        setJsonText(newJsonText)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h3>Мастер создания статей в формате JSON</h3>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col className="d-flex justify-content-center align-items-center">
                    <h4>WYSIWYG редактор</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <DraftEditor jsonText={jsonText} editorChangeHandler={editorChangeHandler} dummyObserver={dummyObserver}/>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col className="d-flex justify-content-center align-items-center">
                    <h4>JSON редактор</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Form>
                        <Form.Group controlId="textareaJSON">
                        <Form.Label>Вывод в формате JSON:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            // rows={3} 
                            value={jsonText}
                            onChange={(e)=>{editorChangeHandler(e.target.value); setDummyObserver(Math.random())}}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateArticlePage
