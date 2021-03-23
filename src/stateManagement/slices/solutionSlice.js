import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import SolutionService from '../../services/apis/solution-service'

const initialState = {
    solutions: [],
    getAllSolutions: {status: 'idle', error: null},
}

export const getAllSolutions = createAsyncThunk('solutions/getAllSolutions', async() => {
    const response = await SolutionService.getAllSolutions()
    return response.data
})

const solutionSlice = createSlice({
    name: 'solutions',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllSolutions.pending]: (state) => {
            state.getAllSolutions.status = 'loading'
        },
        [getAllSolutions.fulfilled]: (state, action) => {
            state.getAllSolutions.status = 'succeeded'
            state.solutions = action.payload ? action.payload : []
        },
        [getAllSolutions.rejected]: (state, action) => {
            state.getAllSolutions.status = 'failed'
            state.getAllSolutions.error = action.error.message
        },
    }
})

//selectors
export const selectAllSolutions = state => state.solutions.solutions
export const selectInfoGetAllSolutions = state => state.solutions.getAllSolutions
export const selectSolutionById = (state, solutionId) => state.solutions.solutions.find(solution => solution.id === solutionId)

//reducer
export default solutionSlice.reducer