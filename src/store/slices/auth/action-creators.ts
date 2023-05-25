import { AppDispatch } from "../..";
import { getAuth, setUser, setUserError, setUserLoading } from ".";
import { IUser } from "../../../models/IUser";
import UserService from "../../../api/UserService";

function getErrorType(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export const authActionCreators = {
    setAuth: (auth: boolean) => getAuth(auth),
    setUser: (user: IUser) => setUser(user),
    setUserError: (payload: string) => setUserError(payload),
    setUserLoading: (payload: boolean) => setUserLoading(payload),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(setUserLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', username)
                    dispatch(setUser(mockUsers))
                    dispatch(getAuth(true))
                } else {
                    dispatch(setUserError('Некорректный логин или пароль'))
                }
            }, 1000)
        } catch (e) {
            dispatch(setUserError(getErrorType(e)))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
       localStorage.removeItem('auth')
       localStorage.removeItem('username')
       dispatch(setUser({} as IUser))
       dispatch(getAuth(false))
    }
}