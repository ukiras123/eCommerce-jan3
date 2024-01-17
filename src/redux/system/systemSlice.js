import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false,
}

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            state.modalOpen = action.payload;
        }
    }
})

const { actions, reducer } = systemSlice;
export const { setModalOpen } = actions;
export default reducer;