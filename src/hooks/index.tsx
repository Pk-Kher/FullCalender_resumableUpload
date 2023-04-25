import { TypedUseSelectorHook, useDispatch as baseUseDispatch, useSelector as baseUseSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const useDispatch: () => AppDispatch = baseUseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = baseUseSelector;
