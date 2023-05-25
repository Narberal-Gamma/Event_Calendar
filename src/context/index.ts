import { createContext, useContext } from "react";

interface GlobalContext {
    isAuth?: boolean,
    setIsAuth?: (arg: any) => void
}

export const AuthContext = createContext<GlobalContext | null>(null)

export const useGlobalContext = () => useContext(AuthContext)