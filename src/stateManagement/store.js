import { configureStore } from '@reduxjs/toolkit'

import solutionSlice from '../stateManagement/slices/solutionSlice'
import technologyTypeSlice from '../stateManagement/slices/technologyTypeSlice'
import portfolioSlice from '../stateManagement/slices/portfolioSlice'

const store = configureStore({
    reducer: {
        solutions: solutionSlice,
        technologyTypes: technologyTypeSlice,
        portfolios: portfolioSlice
    }
})

export default store;