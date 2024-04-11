import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nameTerm: "",
    typeTerm: "",
    offset: 0,
};

const apiSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setNameTerm: (state, action) => {
            state.typeTerm = "";
            state.offset = 0;
            state.nameTerm = action.payload;
        },
        setTypeTerm: (state, action) => {
            state.nameTerm = "";
            state.offset = 0;
            state.typeTerm = action.payload
        },
        setAllTerm: (state, action) => {
            state.nameTerm = "";
            state.typeTerm = "";
            state.offset = action.payload;
        },
    }
})

export const { setNameTerm, setTypeTerm, setAllTerm, setPaginatorNumber } = apiSlice.actions;
export default apiSlice.reducer;

