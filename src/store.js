import { configureStore } from '@reduxjs/toolkit'
import { logger } from './ducks/middleware'
import dataReducer from './ducks/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [ logger ]
})
