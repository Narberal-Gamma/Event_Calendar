import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import eventReducer from "./slices/event"

const setup = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            event: eventReducer
        }
    })
}

export const store = setup()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch