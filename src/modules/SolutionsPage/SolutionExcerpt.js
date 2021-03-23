import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import useFollowLink from '../../services/customHooks/useFollowLink'

const SolutionExcerpt = ({ solution }) => {

    const followLinkHandler = useFollowLink()

    return (
        <Col className="mt-3 col-md-6 col-lg-4 col-12">
        <Card className="h-100 border-0">
            <Card.Img 
                variant="top"  
                src={(solution.backgroundPicture)
                    ? `data:image/png;base64,${solution.backgroundPicture}`
                    : 'media/no_image_picture.svg'
                    } 
                width='auto' 
                height='auto'
            />
            <Card.Body className="pl-0 pr-0">
                <Card.Title> {solution.heading} </Card.Title>
                <hr></hr>
                <Card.Text className="text-secondary"> {solution.shortDescription} </Card.Text>
                <a className="text-primary nav-link p-0 m-0" onClick={()=>{followLinkHandler(`solutions/${solution.id}`)}} style={{cursor: 'pointer'}}>Подробнее</a>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default SolutionExcerpt
