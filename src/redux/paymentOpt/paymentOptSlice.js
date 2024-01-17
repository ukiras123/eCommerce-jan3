import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentOptList: []
}

const paymentOptSlice = createSlice({
    name: "paymentOpt",
    initialState,
    reducers: {
        setPaymentOptList: (state, action) => {
            state.paymentOptList = action.payload;
        }
    }
})

const { actions, reducer } = paymentOptSlice;
export const { setPaymentOptList } = actions;
export default reducer;