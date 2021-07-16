git import {
    createSlice
} from "@reduxjs/toolkit";

const countriesCarouselSlice = createSlice({
    name: 'countriesCarousel',
    initialState: {currentItem: 0},
    reducers: {
        changeCountryItem(state, action) {
            state.currentItem = action.payload
        }
    }
})

export const selectCountriesCarouselItem = (state) => {
    return state.countriesCarousel.currentItem
}

export const {changeCountryItem} = countriesCarouselSlice.actions;
export default countriesCarouselSlice.reducer;