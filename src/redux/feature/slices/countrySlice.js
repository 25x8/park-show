import {
    createEntityAdapter,
    createSelector,
    createSlice
} from "@reduxjs/toolkit";

const countriesAdapter = createEntityAdapter({});

const countriesSlice = createSlice({
    name: 'countries',
    initialState: countriesAdapter.getInitialState(),
    extraReducers: {
        "fetchData/fulfilled": (state, action) => {
            const {countries} = action.payload
            countriesAdapter.addMany(state, countries);
        }
    }
});

export const {
    selectById: selectCountryById,
    selectIds: selectCountriesIds,
    selectEntities: selectCountriesEntities,
    selectAll: selectCountries,
} = countriesAdapter.getSelectors(state => state.countries);

export const selectTwoCountriesByIds = createSelector(
    selectCountries,
    (state, idList) => idList,
    (countries, idList) => {
        return countries.filter(country => country.id === idList[0] || country.id === idList[1]);
    }
)

export const selectCountryFlag = createSelector(
    selectCountryById,
    (country) => {
        return country.flag
    }
)


export default countriesSlice.reducer;







