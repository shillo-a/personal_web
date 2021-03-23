import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, CardColumns, Spinner } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import useFollowLink from '../../services/customHooks/useFollowLink'

import { selectInfoGetAllSolutions, selectSolutionById } from '../../stateManagement/slices/solutionSlice'
import FeatureService from '../../services/apis/feature-service'
import TechnologyService from '../../services/apis/technology-service'
import TechnologyTransform from '../../services/transforms/technology-transform'

import FeatureExcerpt from './FeatureExcerpt'
import PageNotFound from '../../components/ErrorPages/PageNotFound'
import JumbotronHeader2 from '../../components/JumbotronHeader2'
import JsonTextBlock from '../../components/DraftEditor/JsonTextBlock'
import UsedTechnologiesBlock from '../../components/UsedTechnologies/UsedTechnologiesBlock'

const OneSolutionPage = ({ match }) => {

    const { solutionId } = match.params

    const followLinkHandler = useFollowLink()

    // state management via redux BEGIN //
    const solution = useSelector(state => selectSolutionById(state, solutionId))
    const infoGAS = useSelector(selectInfoGetAllSolutions)
    // state management via redux END //

    // local state management BEGIN //
    const [features, setFeatures] = useState('')
    const [statusGFBSI, setStatusGFBSI] = useState('idle')
    const getFeaturesBySolutionId = (solutionId) => {
        setStatusGFBSI('loading')
        FeatureService.getFeaturesBySolutionId(solutionId)
            .then(response => {
                setFeatures(response.data)
                setStatusGFBSI('succeeded')
            })
            .catch(error => {
                console.log(error)
                setStatusGFBSI('failed')
            })
    }
    useEffect(()=>{
        getFeaturesBySolutionId(solutionId)
    }, [solutionId])

    const [technologies, setTechnologies] = useState('')
    const [statusGTBSI, setStatusGTBSI] = useState('idle')
    const getTechnologiesBySolutionId = (solutionId) => {
        setStatusGTBSI('loading')
        TechnologyService.getTechnologiesBySolutionId(solutionId)
            .then(response => {
                setTechnologies(
                        //Трансформируем полученные данные
                        TechnologyTransform.convertFromRawTechnology(response.data)
                    )
                setStatusGTBSI('succeeded')
            })
            .catch(error => {
                console.log(error)
                setStatusGTBSI('failed')
            })
    }
    useEffect(()=>{
        getTechnologiesBySolutionId(solutionId)
    }, [solutionId])
    // local state management END //

    var featuresContent = ''
    if (features){
        featuresContent = features.map(feature => {
            return(
                <FeatureExcerpt key={feature.id} text={feature.feature}/>
            )
        })
    }
 
    return (
    <>
        { solution ?
            <>
                <JumbotronHeader2 head={solution.heading} pathName={'Решения'} path={'solutions'}/>

                <JsonTextBlock head='Обзор решения' jsonText={solution.description}/>
                <JsonTextBlock head='Преимущества внедрения' jsonText={solution.advantages}/>

                <Container className="mt-5">
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                            <h4>Функциональные возможности</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardColumns className="mt-3">
                                {featuresContent ? featuresContent : <>Информация о функциях отсутствует</>}
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>

                <UsedTechnologiesBlock technologies={technologies}/>

                <Container className="mt-5">
                    <Row>
                        <Col className="text-center">
                            <Button variant="outline-primary" onClick={()=>followLinkHandler(`/portfolios`)}>Перейти к портфолио</Button>
                        </Col>
                    </Row>
                </Container>
            </> : <></>}

        { solution ? <></> : <PageNotFound/> }

    </>
    )
}

export default OneSolutionPage
