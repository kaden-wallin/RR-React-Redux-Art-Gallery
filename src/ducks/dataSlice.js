import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 10209,
    apiData: {}
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData: action.payload}
        },
        incrementId: (state) => {
            return {...state, objectId: state.objectId + 1}
        },
        decrementId: (state) => {
            return {...state, objectId: state.objectId - 1}
        },
        custonId: (state, action) => {
            return {...state, objectId: action.payload}
        },
        clearData: (state) => {
            return initialState
        }
    }
})

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const responseData = await response.json()
        dispatch(setData(responseData))
    }
    return dataThunk
}

export const {  setData, incrementId, decrementId, custonId, clearData } = dataSlice.actions

export default dataSlice.reducer