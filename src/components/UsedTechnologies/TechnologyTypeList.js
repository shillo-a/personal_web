import React from 'react'
import { Card, Col } from 'react-bootstrap'
import useFollowLink from '../../services/customHooks/useFollowLink'

import TechnologyList from './TechnologyList'

const TechnologyTypeList = ({ technologyType }) => {

    const followLinkHandler = useFollowLink()

    var technologiesContent = ''
    if (technologyType){
        technologiesContent = technologyType.technologies.map(technology => {
            return(
                <TechnologyList key={technology.id} technology={technology.technology} technologyTypeId={technology.technologyType.id}/>
            )
        })
    }

    return (
            <Col className="mt-3 col-md-4 col-lg-3 col-12">
                <Card className="h-100 border-0">
                    <Card.Body className="pl-0">
                        <Card.Title><a className="text-primary nav-link p-0 m-0" onClick={()=>{followLinkHandler(`/technologies/${technologyType.id}`)}} style={{cursor: 'pointer'}}>{technologyType.type}</a></Card.Title>
                        <hr></hr>
                        {technologiesContent? technologiesContent : <>Информация о технологиях отсутствует</>}
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default TechnologyTypeList


