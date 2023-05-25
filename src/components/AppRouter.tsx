import { Navigate, Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../router/routes"
import { useAppSelector } from "../hooks/redux"
import { FC } from "react"

const AppRouter: FC = () => {

    const { isAuth } = useAppSelector(state => state.auth)

    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path} />    
                    )}
                    <Route path="*" element={<Navigate to={'/'}  replace/>} />
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path} />    
                    )}
                    <Route path="*" element={<Navigate to={'/login'}  replace/>} />
                </Routes>
            }
        </>
    )
}

export default AppRouter