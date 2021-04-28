import {
    createEntityAdapter,
    createSelector,
    createSlice
} from "@reduxjs/toolkit";

const countriesResultAdapter = createEntityAdapter({});

const countriesResultSlice = createSlice({
    name: 'countries',
    initialState: countriesResultAdapter.getInitialState(),
    extraReducers: {
        "fetchData/fulfilled": (state, action) => {
            const {countriesResult} = action.payload
            countriesResultAdapter.addMany(state, countriesResult);
        }
    }
});

export const {
    selectById: selectCountryResultById,
    selectIds: selectCountriesResultIds,
    selectEntities: selectCountriesResultEntities,
    selectAll: selectCountriesResult,
} = countriesResultAdapter.getSelectors(state => state.countriesResult);


export const selectCountriesResultByCountryId = createSelector(
    selectCountriesResult,
    (state, countryId) => countryId,
    (results, countryId) => {
        return results.filter(result => result.countryId === countryId)
    }
)

const selectResultsByGameId = createSelector(
    selectCountriesResult,
    (state, gameId) => gameId,
    (results, gameId) => {
        return results.filter(result => result.gameId === gameId);
    }
)

export const selectCountryResultsByGameId = createSelector(
    selectResultsByGameId,
    (results) => {
        let resultStructure = getResultStructure();

        results.forEach(result => {
            resultStructure[result.year][result.rank].push(result.countryId)

        });
        return resultStructure;
    }
);

export const selectGameResultsYearsByCountryId = createSelector(
    selectResultsByGameId,
    (results) => {

        const yearSet = new Set();
        results.forEach(result => yearSet.add(result.year));
        return Array.from(yearSet);
    }
)

export const selectCountryResultByCountryId = createSelector(
    selectCountriesResultByCountryId,
    (results) => {
        let resultStructure = getResultStructure()

        results.forEach(result => {
            resultStructure[result.year][result.rank].push(result.gameId)

        })

        return resultStructure;
    }
);

export const selectCountriesResultYearsByCountryId = createSelector(
    selectCountriesResultByCountryId,
    (results) => {
        const yearSet = new Set();
        results.forEach(result => yearSet.add(result.year));
        return Array.from(yearSet);
    }
)

export default countriesResultSlice.reducer;

function getResultStructure() {
    return   {
        "2015": {
            "1": [],
            "2": [],
            "3": [],
        },
        "2016": {
            "1": [],
            "2": [],
            "3": [],
        },
        "2017": {
            "1": [],
            "2": [],
            "3": [],
        },
        "2018": {
            "1": [],
            "2": [],
            "3": [],
        },
        "2019": {
            "1": [],
            "2": [],
            "3": [],
        },
        "2020": {
            "1": [],
            "2": [],
            "3": [],
        },
    }

}