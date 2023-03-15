import { createSlice } from "@reduxjs/toolkit";


const Loading = createSlice({
    name: "loading",
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            return action.payload;
        }
    }
});

export const { setLoading } = Loading.actions;
export default Loading.reducer;