import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppDispatch: () => AppDispatch = useDispatch