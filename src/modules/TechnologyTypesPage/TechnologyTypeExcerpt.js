import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

import useFollowLink from '../../services/customHooks/useFollowLink'

const TechnologyTypeExcerpt = ({ technologyType }) => {

    const followLinkHandler = useFollowLink()

    return (
        <Col className="mt-3 col-md-6 col-lg-6 col-12">
        <Card className="h-100 card-animated" onClick={()=>{followLinkHandler(`technologies/${technologyType.id}`)}} style={{cursor: 'pointer'}}>
            <Card.Body >
                <Row>
                    <Col sm={12} md={4} lg={3} >
                        <Card.Img 
                                src={(technologyType.backgroundPicture)
                                ? `data:image/svg+xml;base64,${technologyType.backgroundPicture}`
                                : 'media/no_image_icon.svg'
                            }
                            alt="Card image" 
                            height="80" 
                            width="auto"
                            className="mb-3"
                        />
                    </Col>
                    <Col sm={12} md={8} lg={9} >
                        <Card.Title> {technologyType.type} </Card.Title>
                        <hr></hr>
                        <Card.Text className="text-secondary"> {technologyType.shortDescription} </Card.Text>
                        
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </Col>
    )
}



export default TechnologyTypeExcerpt
