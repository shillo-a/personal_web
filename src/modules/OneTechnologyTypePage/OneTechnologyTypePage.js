import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import JumbotronHeader2 from '../../components/JumbotronHeader2'
import TechnologyService from '../../services/apis/technology-service'
import useFollowLink from '../../services/customHooks/useFollowLink'
import { selectInfoGetAllTechnologyTypes, selectTechnologyTypeById } from '../../stateManagement/slices/technologyTypeSlice'
import DraftEditorView from '../../components/DraftEditor/DraftEditorView'
import PageNotFound from '../../components/ErrorPages/PageNotFound'
import TechnologyExcerpt from './TechnologyExcerpt'
import JsonTextBlock from '../../components/DraftEditor/JsonTextBlock'

const OneTechnologyTypePage = ({ match }) => {

    const { technologyTypeId } = match.params

    const followLinkHandler = useFollowLink()

    // state management via redux BEGIN //
    const technologyType = useSelector(state => selectTechnologyTypeById(state, technologyTypeId))
    const infoGATT = useSelector(selectInfoGetAllTechnologyTypes)
    // state management via redux END //

    // local state management BEGIN //
    const [technologies, setTechnologies] = useState('')
    const [statusGTBTI, setStatusGTBTI] = useState('idle')
    const getTechnologiesByTechnologyTypeId = (solutionId) => {
        setStatusGTBTI('loading')
        TechnologyService.getTechnologiesByTechnologyTypeId(solutionId)
            .then(response => {
                setTechnologies(response.data)
                setStatusGTBTI('succeeded')
            })
            .catch(error => {
                console.log(error)
                setStatusGTBTI('failed')
            })
    }
    useEffect(()=>{
        getTechnologiesByTechnologyTypeId(technologyTypeId)
    }, [technologyTypeId])
    // local state management END //

    var technologiesContent = ''
    if (technologies){
        technologiesContent = technologies.map(technology => {
            return(
                <TechnologyExcerpt key={technology.id} technology={technology}/>
            )
        })
    }

    return (
        <>
    
            {technologyType ?
                <>
                    <JumbotronHeader2 head={technologyType.type} pathName={'Технологии'} path={'technologies'}/>

                    <JsonTextBlock head='Описание' jsonText={technologyType.description}/>

                    <Container className="mt-5">
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center">
                                <h4>Перечень технологий</h4>
                            </Col>
                        </Row>
                        <Row>
                            {technologiesContent ? technologiesContent : <>Информация о технологиях отсутствует</>}
                        </Row>
                    </Container>
                </> : <></>}
            
            {technologyType ? <></> : <PageNotFound/>}
    
        </>
        )
}

export default OneTechnologyTypePage
