import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './ducks/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})
