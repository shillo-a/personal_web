import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import PortfolioService from '../../services/apis/portfolio-service'

const initialState = {
    portfolios: [],
    getAllPortfolios: {status: 'idle', error: null},
}

export const getAllPortfolios = createAsyncThunk('portfolios/getAllPortfolios', async() => {
    const response = await PortfolioService.getAllPortfolios()
    return response.data
})

const portfolioSlice = createSlice({
    name: 'portfolios',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllPortfolios.pending]: (state) => {
            state.getAllPortfolios.status = 'loading'
        },
        [getAllPortfolios.fulfilled]: (state, action) => {
            state.getAllPortfolios.status = 'succeeded'
            state.portfolios = action.payload ? action.payload : []
        },
        [getAllPortfolios.rejected]: (state, action) => {
            state.getAllPortfolios.status = 'failed'
            state.getAllPortfolios.error = action.error.message
        },
    }
})

// //selectors
export const selectAllPortfolios = state => state.portfolios.portfolios
export const selectInfoGetAllPortfolios = state => state.portfolios.getAllPortfolios
export const selectPortfolioById = (state, portfolioId) => state.portfolios.portfolios.find(portfolio => portfolio.portfolio.id === portfolioId)

//reducer
export default portfolioSlice.reducer