import { createSlice } from '@reduxjs/toolkit'
import cookies from 'js-cookie'
export const tokenSlider = createSlice({
    name: 'token',
    initialState: {
        token: ""
    },
    reducers: {
        exite: () => {
            cookies.remove('user')
        },
        // addToken: (state, action) => {
        //     state.token = action.payload()
        //     console.log('----', state.token);
        // }
    }
});

export const { exite } = tokenSlider.actions;
export default tokenSlider.reducer;

