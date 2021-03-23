import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { useSelector } from 'react-redux'

import JumbotronHeader1 from '../../components/JumbotronHeader1'
import { selectAllPortfolios } from '../../stateManagement/slices/portfolioSlice'
import PortfolioExceprt from './PortfolioExceprt'
import PortfolioFilterBySolutions from './PortfolioFilterBySolutions'

const PortfoliosPage = () => {

    // state management via redux BEGIN
    const portfolios = useSelector(selectAllPortfolios)
    // state management via redux END

    // local state management BEGIN //
    const [currentFilter, setCurrentFilter] = useState('all')
    // local state management END //

    var portfoliosContent = ''
    if (portfolios) {
        portfoliosContent = portfolios.map(portfolio => {
            if(portfolio.solution.id === currentFilter || currentFilter === 'all'){
                return (
                    <PortfolioExceprt key={portfolio.portfolio.id} portfolio={portfolio} />
                ) 
            }
        })
    }

    return (
        <>
            <JumbotronHeader1 head='Портфолио' image="/media/all_portfolios_page_figure.svg" body='Наша команда предоставляет услуги по разработке комплексных информационных решений, внедрению инструментов для проведения бизнес анализа, а также по настройке интеграции с существующими информационными системами'/>
            <PortfolioFilterBySolutions currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            <Container>
                <Row>
                    { portfoliosContent }
                </Row>
            </Container>
        </>
    )
}

export default PortfoliosPage

