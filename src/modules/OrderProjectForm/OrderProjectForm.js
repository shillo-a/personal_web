import React from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const OrderProjectForm = ({orderProjectFormShow, setOrderProjectFormShow}) => {
    return (
    <Modal 
        size="lg"
        centered
        show={orderProjectFormShow}
        onHide={()=>{setOrderProjectFormShow(false)}}
    >
        <Modal.Header className="border-0 mb-0 pb-0" closeButton>
        </Modal.Header>

        <Modal.Body className="border-0 mt-0 pt-0">
            <Container >
                <h2 className="text-center">Заказать проект</h2>

                <p className="mt-4">
                    Проконсультируем и сориентируем по необходимому бюджету и срокам разработки. <br/>
                    Заполните форму или позвоните / отправьте нам письмо.
                </p>
        
                <Form >
                <Row className="mt-4">
                    <Col>
                        <Form.Group controlId="textarea">
                            {/* <Form.Label className="font-weight-bold">Суть проекта:</Form.Label> */}
                            <Form.Control as="textarea" rows={8} placeholder="Пожалуйста, опишите задачу"/>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="email">
                        {/* <Form.Label className="font-weight-bold">Электронная почта:</Form.Label> */}
                        <Form.Control type="email" placeholder="Введите электронную почту" />
                    </Form.Group>
                    <Form.Group controlId="name">
                        {/* <Form.Label className="font-weight-bold">Ваше имя:</Form.Label> */}
                        <Form.Control type="text" placeholder="Укажите Ваше имя" />
                    </Form.Group>
                    <Form.Group controlId="name">
                        {/* <Form.Label className="font-weight-bold">Телефон:</Form.Label> */}
                        <Form.Control type="text" placeholder="Укажите контактный телефон" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Я даю согласие Shillo.Co на обработку персональных данных, указанных в заявке." />
                        </Form.Group>
                    </Col>
                
                </Row>

                <Row className="mt-2">
                    <Col className="text-center">
                        <Button variant="primary" type="submit" >
                            Заказать проект
                        </Button>
                    </Col>
                </Row> 
                
                </Form>
            
            </Container>
        </Modal.Body>
    </Modal>
    )
}

export default OrderProjectForm


{/* <h4>Спасибо. Мы свяжемся с Вами в ближайшее время!</h4>
        <p>
            Спасибо. Мы свяжемся с Вами в ближайшее время!
        </p> */}