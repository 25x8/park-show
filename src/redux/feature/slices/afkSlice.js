import {
    createSelector,
    createSlice
} from "@reduxjs/toolkit";

const afkSlice = createSlice({
    name: 'afk',
    initialState: {afk: false},
    reducers: {
        changeAfkState(state, action) {
            state.afk = action.payload
        }
    }
})

export const selectAfkState = (state) => {
    return state.afk.afk
}

export const {changeAfkState} = afkSlice.actions;
export default afkSlice.reducer;