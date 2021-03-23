import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import TechnologyTypeService from '../../services/apis/technology-type-service'

const initialState = {
    technologyTypes: [],
    getAllTechnologyTypes: {status: 'idle', error: null},
}

export const getAllTechnologyTypes = createAsyncThunk('technologyTypes/getAllTechnologyTypes', async() => {
    const response = await TechnologyTypeService.getAllTechnologyTypes()
    return response.data
})

const technologyTypeSlice = createSlice({
    name: 'technologyTypes',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllTechnologyTypes.pending]: (state) => {
            state.getAllTechnologyTypes.status = 'loading'
        },
        [getAllTechnologyTypes.fulfilled]: (state, action) => {
            state.getAllTechnologyTypes.status = 'succeeded'
            state.technologyTypes = action.payload ? action.payload : []
        },
        [getAllTechnologyTypes.rejected]: (state, action) => {
            state.getAllTechnologyTypes.status = 'failed'
            state.getAllTechnologyTypes.error = action.error.message
        },
    }
})

//selectors
export const selectAllTechnologyTypes = state => {
    var arr = state.technologyTypes.technologyTypes
    // сортируем значения в Array по orderNum
    var arrSorted = []
    if(arr.length>0){
        arrSorted = arr.slice().sort((a, b) => a.orderNum - b.orderNum)
    }
    return arrSorted
}
export const selectInfoGetAllTechnologyTypes = state => state.technologyTypes.getAllTechnologyTypes
export const selectTechnologyTypeById = (state, technologyTypeId) => state.technologyTypes.technologyTypes.find(technologyType => technologyType.id === technologyTypeId)

//reducer
export default technologyTypeSlice.reducer