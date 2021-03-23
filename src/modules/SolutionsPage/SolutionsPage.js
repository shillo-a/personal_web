import { Container, Row } from 'react-bootstrap'
import React from 'react'
import { useSelector } from 'react-redux'

import { selectAllSolutions } from '../../stateManagement/slices/solutionSlice'

import SolutionExcerpt from './SolutionExcerpt'

import JumbotronHeader1 from '../../components/JumbotronHeader1'

const SolutionsPage = () => {

    // state management via redux BEGIN //
    const solutions = useSelector(selectAllSolutions)
    // state management via redux END //

    var solutionsContent = ''
    if (solutions) {
        solutionsContent = solutions.map(solution => {
            return(
                <SolutionExcerpt key={solution.id} solution={solution}/>
            )
        })
    }

    return (
        <>
            <JumbotronHeader1 head='Решения' image="/media/all_solutions_page_figure.svg" body='Наша команда предоставляет услуги по разработке комплексных информационных решений, внедрению инструментов для проведения бизнес анализа, а также по настройке интеграции с существующими информационными системами'/>
            <Container>
                <Row>
                    {solutionsContent}
                </Row>
            </Container>
        </>
    )

}

export default SolutionsPage

