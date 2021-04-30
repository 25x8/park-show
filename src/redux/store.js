import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import winnersReducer from "./feature/slices/winnersSlice";
import gamesReducer from "./feature/slices/gamesSlice";
import countriesReducer from "./feature/slices/countrySlice";
import countriesResultReducer from "./feature/slices/countriesResultSlice";
import countriesCarouselReducer from "./feature/slices/countriesCarouselSlice";
import afkReducer from "./feature/slices/afkSlice";

const middleware = getDefaultMiddleware();


export default configureStore({
    reducer: {
        winners: winnersReducer,
        games: gamesReducer,
        countries: countriesReducer,
        countriesResult: countriesResultReducer,
        countriesCarousel: countriesCarouselReducer,
        afk: afkReducer
    },
    middleware
});
