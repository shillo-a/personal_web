import React from 'react'
import { Card, Col } from 'react-bootstrap'
import useFollowLink from '../../services/customHooks/useFollowLink'

const PortfolioExceprt = ({ portfolio }) => {
    
    const followLinkHandler = useFollowLink()

    return (
        <>
            <Col className="mt-3 col-md-6 col-lg-4 col-12">
                <Card className="h-100 card-animated border-0" onClick={()=>{followLinkHandler(`portfolios/${portfolio.portfolio.id}`)}} style={{cursor: 'pointer'}}>
                    <Card.Img src="/media/portfolio_example.png" alt="Card image" />
                    <Card.ImgOverlay className="text-center">
                        <Card.Title>{portfolio.portfolio.heading}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Col>   
        </>
    )
}

export default PortfolioExceprt