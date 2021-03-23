import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllSolutions, selectInfoGetAllSolutions } from "../../stateManagement/slices/solutionSlice"
import { getAllTechnologyTypes, selectInfoGetAllTechnologyTypes } from "../../stateManagement/slices/technologyTypeSlice"
import { getAllPortfolios, selectInfoGetAllPortfolios } from "../../stateManagement/slices/portfolioSlice"

// происходит выгрузка всех основных данных по сайту через REDUX

const useLoadApi = () => {
    
    const dispatch = useDispatch()
    
    const [statusULA, setStatusULA] = useState('loading')

    // state management via redux BEGIN
    const infoGAS = useSelector(selectInfoGetAllSolutions)
    useEffect(()=>{
        if(infoGAS.status === 'idle'){
            dispatch(getAllSolutions())
        }
    }, [infoGAS.status])

    const infoGATT = useSelector(selectInfoGetAllTechnologyTypes)
    useEffect(()=>{
        if(infoGATT.status === 'idle'){
            dispatch(getAllTechnologyTypes())
        }
    }, [infoGATT.status])

    const infoGAP = useSelector(selectInfoGetAllPortfolios)
    useEffect(()=>{
        if(infoGAP.status === 'idle'){
            dispatch(getAllPortfolios())
        }
    }, [infoGAP.status])
    // state management via redux END

    useEffect(()=>{
        if(
            infoGAS.status === 'succeeded' &&
            infoGATT.status === 'succeeded' &&
            infoGAP.status === 'succeeded'
        ){
            // setStatusULA('succeeded')
            setTimeout(()=>{setStatusULA('succeeded')}, 200)
        }
    }, [infoGAS.status, infoGATT.status, infoGAP.status])
    
    return statusULA
}

export default useLoadApi


// const solutions = useSelector(selectAllSolutions)
// const infoGAS = useSelector(selectInfoGetAllSolutions)

// const technologyTypes = useSelector(selectAllTechnologyTypes)
// const infoGATT = useSelector(selectInfoGetAllTechnologyTypes)