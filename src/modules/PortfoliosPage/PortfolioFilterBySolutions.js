import React, { useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectAllSolutions } from '../../stateManagement/slices/solutionSlice'

const PortfolioFilterBySolutions = ({ currentFilter, setCurrentFilter }) => {

    // state management via redux BEGIN //
    const solutions = useSelector(selectAllSolutions)
    // state management via redux END //

    // local state management BEGIN //
    const [title, setTitle] = useState('Все')
    // local state management END //

    const isActive = (solutionId, filter) => {
        if(solutionId===filter){
            return true
        } else return false
    }

    const changeFilterHandler = (solutionId, solutionHeading) => {
        setCurrentFilter(solutionId)
        setTitle(solutionHeading)
    }
    

    
    var dropDownItemsContent = ''
    if(solutions){
        var dropDownItemsContent = solutions.map(solution => {
            return (
                <Dropdown.Item 
                    key={solution.id} 
                    onClick={()=>{changeFilterHandler(solution.id, solution.heading)}} 
                    active={isActive(solution.id, currentFilter)}
                >
                    {solution.heading}
                </Dropdown.Item>
                
            )
        })
    }

    return (
        <Container>
            <Row>
            <Col>
                <DropdownButton id="dropdown-basic-button" title={title}>
                    {dropDownItemsContent}
                    <Dropdown.Item 
                        onClick={()=>{changeFilterHandler('all', 'Все')}}
                        active={isActive('all', currentFilter)}
                    >
                        Все
                    </Dropdown.Item>
                </DropdownButton>
            </Col>
            </Row>
        </Container>
    )
}

export default PortfolioFilterBySolutions

{/* <Dropdown.Item href="#/action-1">BI-платформа</Dropdown.Item>
<Dropdown.Item href="#/action-2">Интернет магазин</Dropdown.Item>
<Dropdown.Item href="#/action-3">ERP - система</Dropdown.Item>
<Dropdown.Item href="#/action-4">Интеграционные решения</Dropdown.Item>
<Dropdown.Item href="#/action-5">База знаний</Dropdown.Item>
<Dropdown.Item href="#/action-6">Маркетплейс</Dropdown.Item>
<Dropdown.Item href="#/action-7">Система упрвления проектами</Dropdown.Item>
<Dropdown.Item href="#/action-8">Система управления задачами</Dropdown.Item>
<Dropdown.Item href="#/action-9" active>Все</Dropdown.Item> */}