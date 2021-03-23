import React from 'react'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'

import solutionTypes from '../../lists/solutionTypes'
import useFollowLink from '../../services/customHooks/useFollowLink'

const SolutionTypesCards = () => {

    const followLinkHandler = useFollowLink()

    var solutionTypesCards = solutionTypes.map((solutionType, index) => {
        return(
            <Col key={index}>
                <Card className="text-center h-100 border-0" >
                    <Card.Body>
                        <Card.Img src={solutionType.image} alt="Card image" height="80"/>
                        <Card.Title className="mt-3">{solutionType.head}</Card.Title>
                        <Card.Text>{solutionType.body}</Card.Text>
                    </Card.Body>
                </Card>  
            </Col>
        )
    }) 

    return (
        <>
            <Container>
                <Row>
                    {solutionTypesCards}
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button variant="outline-primary" onClick={()=>followLinkHandler(`/solutions`)}>Все решения</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SolutionTypesCards