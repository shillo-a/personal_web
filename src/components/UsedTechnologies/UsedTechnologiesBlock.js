import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TechnologyTypeList from './TechnologyTypeList'

const UsedTechnologiesBlock = ({ technologies }) => {

    var technologyTypesContent = ''
    if (technologies){
        technologyTypesContent = technologies.map(technologyType => {
            return(
                <TechnologyTypeList key={technologyType.id} technologyType={technologyType}/>
            )
        })
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h4>Используемые технологии</h4>
                </Col>
            </Row>
            <Row>
                {technologyTypesContent? technologyTypesContent : <Col>Информация о технологиях отсутствует</Col>}
            </Row>
        </Container>
    )
}

export default UsedTechnologiesBlock
