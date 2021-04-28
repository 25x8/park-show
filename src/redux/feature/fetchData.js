import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk(
    'fetchData',
    async (payload, thunkApi) => {
        let winners, games, countries, countriesResult;

        await Promise.all(
            [
                winners = await getData('winners'),
                games = await getData('games'),
                countries = await getData('countries'),
                countriesResult = await getData('countriesResult')
            ]
        )

        return {winners, games, countries, countriesResult};
    }
)

async function getData(object) {
    if(window.location.href[0] === 'h'){
        const result = await fetch(`/json/${object}.json`);
        return await result.json()
    } else {
        return require(`../../../public/json/${object}.json`)
    }
}
