import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectPortfolioById } from '../../stateManagement/slices/portfolioSlice'
import JumbotronHeader2 from '../../components/JumbotronHeader2'
import JsonTextBlock from '../../components/DraftEditor/JsonTextBlock'
import TechnologyService from '../../services/apis/technology-service'
import TechnologyTransform from '../../services/transforms/technology-transform'
import UsedTechnologiesBlock from '../../components/UsedTechnologies/UsedTechnologiesBlock'
import PageNotFound from '../../components/ErrorPages/PageNotFound'

const OnePortfolioPage = ({ match }) => {

    const {portfolioId} = match.params

    // state management via redux BEGIN //
    const portfolio = useSelector(state => selectPortfolioById(state, portfolioId))
    // state management via redux END //
    
    // local state management BEGIN //
    const [technologies, setTechnologies] = useState('')
    const [statusGTBPI, setStatusGTBPI] = useState('idle')
    const getTechnologiesByPortfolioId = (portfolioId) => {
        setStatusGTBPI('loading')
        TechnologyService.getTechnologiesByPortfolioId(portfolioId)
            .then(response => {
                setTechnologies(
                    //Трансформируем полученные данные
                    TechnologyTransform.convertFromRawTechnology2(response.data)
                )
                setStatusGTBPI('succeeded')
            })
            .catch(error => {
                console.log(error)
                setStatusGTBPI('failed')
            })
    }
    useEffect(()=>{
        getTechnologiesByPortfolioId(portfolioId)
    }, [portfolioId])
    // local state management END //

    return (
        <>
            {portfolio && statusGTBPI==="succeeded" && technologies?
                <>
                    <JumbotronHeader2 head={portfolio.portfolio.heading} pathName={'Портфолио'} path={'portfolios'}/>
                    
                    <JsonTextBlock head='Задача' jsonText={portfolio.portfolio.task}/>
                    <JsonTextBlock head='Решение' jsonText={portfolio.portfolio.solution}/>
                    <UsedTechnologiesBlock technologies={technologies}/>
                    <JsonTextBlock head='Результат' jsonText={portfolio.portfolio.result}/>
                </> : <></>}

            { portfolio ? <></> : <PageNotFound/> }
        </>
    )
}

export default OnePortfolioPage
