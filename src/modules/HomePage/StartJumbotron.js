import React from 'react'
import { Col, Container, Jumbotron, Row, Image } from 'react-bootstrap'

const StartJumbotron = () => {
    return (
        <>
        <Jumbotron className="pt-4 pb-0">
            <Container>
            <Row>
                <Col sm={12} md={6} className="align-self-center">
                    <Row>
                        <Col>
                            <h1>Системная разработка ИТ-продуктов для бизнеса</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <p className="lead">Систематизируем бизнес требования и реализуем по ним комплексные информационные решения:</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-none d-md-block" md={6}>
                    <Image src="/media/home_page_figure.svg" alt="Домашняя страница" className="float-right" fluid></Image>
                </Col>
            </Row>
            </Container>
        </Jumbotron>
        </>
    )
}

export default StartJumbotron
