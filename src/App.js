import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useLocation} from 'react-router-dom'
import { Image, Spinner } from 'react-bootstrap'

// import rewrited bootstrap scss
import './scss/main.scss'

import useLoadApi from './services/customHooks/useLoadApi'

import NavbarMain from './modules/Navbar/NavbarMain'
import HomePage from './modules/HomePage/HomePage'
import SolutionsPage from './modules/SolutionsPage/SolutionsPage'
import OneSolutionPage from './modules/OneSolutionPage/OneSolutionPage';
import FoooterMain from './modules/Footer/FoooterMain';
import PortfoliosPage from './modules/PortfoliosPage/PortfoliosPage';
import TechnologyTypesPage from './modules/TechnologyTypesPage/TechnologyTypesPage'
import OneTechnologyTypePage from './modules/OneTechnologyTypePage/OneTechnologyTypePage'
import AboutPage from './modules/AboutPage/AboutPage'
import ContactsPage from './modules/ContactsPage.js/ContactsPage'
import OnePortfolioPage from './modules/OnePortfolioPage/OnePortfolioPage'
import PageLoadingSpinner from './components/PageLoadingSpinner'
import CreateArticlePage from './modules/CreateArticlePage/CreateArticlePage'
import OrderProjectForm from './modules/OrderProjectForm/OrderProjectForm'
import TestComponent from './_randomFiles/TestComponent'


const App = () => {

    //загружаем основные API в момент запуска приложения
    const statusULA = useLoadApi()

    //Определяем, какая сейчас открыта вкладка
    //Смотрим только первый уровень nav
    const currentPathname = useLocation().pathname.split("/", 2).join("/")

    //определяем, показывать модальное окно или нет чтобы сделать заказ
    const [orderProjectFormShow, setOrderProjectFormShow] = useState(false)
    
    return (
        <>  
        {/* { statusULA === 'loading' ? <PageLoadingSpinner/> : <></> } */}
        <div className="d-flex flex-column min-vh-100"> 
        <Image style={{position: 'absolute', top:'0', right: '0'}} src='/media/background_1.svg'></Image>

            <NavbarMain currentPathname={currentPathname} setOrderProjectFormShow={setOrderProjectFormShow}/>
            <OrderProjectForm orderProjectFormShow={orderProjectFormShow} setOrderProjectFormShow={setOrderProjectFormShow}/>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/solutions' component={SolutionsPage}/>
                <Route exact path='/solutions/:solutionId' component={OneSolutionPage}/>
                <Route exact path='/technologies' component={TechnologyTypesPage}/>
                <Route exact path='/technologies/:technologyTypeId' component={OneTechnologyTypePage}/>
                <Route exact path='/portfolios' component={PortfoliosPage}/>
                <Route exact path='/portfolios/:portfolioId' component={OnePortfolioPage}/>
                <Route exact path='/contacts' component={ContactsPage}/>

                <Route exact path='/create-article' component={CreateArticlePage}/>
                <Redirect to='/'/> 
            </Switch>
            <FoooterMain/>
        </div>

        </>
 
    )
}

export default App
