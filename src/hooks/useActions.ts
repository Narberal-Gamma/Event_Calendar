import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./redux"
import { allActionCreators } from "../store/slices/action-creators"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}