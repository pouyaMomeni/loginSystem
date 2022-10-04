import { configureStore } from '@reduxjs/toolkit'
import tokenRed from './reducers/tokenReducer'

export const store = configureStore({
    reducer: {
        token: tokenRed,
    }
})