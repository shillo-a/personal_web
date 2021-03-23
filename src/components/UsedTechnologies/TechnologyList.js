import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import useFollowLink from '../../services/customHooks/useFollowLink'

const TechnologyList = ({ technology }) => {

    return (
        <div className="pt-1 ">
             <kbd >{technology}</kbd>
         </div> 
    )
}

export default TechnologyList