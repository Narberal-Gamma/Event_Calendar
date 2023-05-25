import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isError: '',
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuth: (state: AuthState, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
            state.isLoading = false
        },
        setUserLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
        },
        setUserError: (state, action: PayloadAction<string>) => {
            state.isError = action.payload
            state.isLoading = false
        }
    },
    extraReducers: {}
})

export const { getAuth, setUser, setUserError, setUserLoading } = authSlice.actions

export default authSlice.reducer