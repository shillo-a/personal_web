import React, { useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import JumbotronHeader1 from '../../components/JumbotronHeader1'
import useFollowLink from '../../services/customHooks/useFollowLink'
import { selectAllTechnologyTypes, selectInfoGetAllTechnologyTypes } from '../../stateManagement/slices/technologyTypeSlice'
import TechnologyTypeExcerpt from './TechnologyTypeExcerpt'

const TechnologyTypesPage = () => {

    const followLinkHandler = useFollowLink()

    // state management via redux BEGIN
    const technologyTypes = useSelector(selectAllTechnologyTypes)
    // state management via redux END

    var technologyTypesContent = ''
    if (technologyTypes) {
        technologyTypesContent = technologyTypes.map(technologyType => {
            return(
                <TechnologyTypeExcerpt key={technologyType.id} technologyType={technologyType}/>
            )
        })
    }

    return (
        <>
            <JumbotronHeader1 head='Технологии' image='/media/all_technologies_page_figure.svg' body='Наша команда предоставляет услуги по разработке комплексных информационных решений, внедрению инструментов для проведения бизнес анализа, а также по настройке интеграции с существующими информационными системами'/>
                    
            <Container className="mt-5">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h4>Категории</h4>
                    </Col>
                </Row>
                <Row>
                    {technologyTypesContent}
                </Row>  
            </Container>
        </>
    )
}

export default TechnologyTypesPage
