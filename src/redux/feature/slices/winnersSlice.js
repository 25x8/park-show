import {
    createEntityAdapter,
    createSelector,
    createSlice
} from "@reduxjs/toolkit";

const winnersAdapter = createEntityAdapter({});

const winnersSlice = createSlice({
    name: 'winners',
    initialState: winnersAdapter.getInitialState(),
    extraReducers: {
        "fetchData/fulfilled": (state, action) => {
            const {winners} = action.payload
            winnersAdapter.addMany(state, winners);
        }
    }
});

export const {
    selectById: selectWinnersById,
    selectIds: selectWinnersIds,
    selectEntities: selectWinnersEntities,
    selectAll: selectWinnersAll
} = winnersAdapter.getSelectors(state => state.winners);

export const selectSortedWinnersIds = createSelector(
    selectWinnersAll,
    (winners) => {

        const uniqNames = [];
        const uniqWinners = []

        winners.forEach(el => {
            if(!uniqNames.includes(el.name.ru)) {
                if (!el.name.ru.includes('.')) {
                    uniqNames.push(el.name.ru);
                    uniqWinners.push(el);
                }
            }
        })

        const sorted = uniqWinners.sort((a, b) => {
            return a.name.ru < b.name.ru ? -1 : 1
        })

        return sorted.map(winner => winner.id);
    }
)

export const selectWinnersByCountryIdYearAndGameId = createSelector(
    selectWinnersAll,
    (state, countryList, gameId, year) => {
       return {
           countryList,
           gameId,
           year
       }
    },
    (winners, {countryList, gameId, year}) => {
        return  winners.filter(winner => {
                return ((winner.countryId === countryList[0]) && (winner.gameId === gameId) && (+winner.year === +year)) ||
                    ((winner.countryId === countryList[1]) && (winner.gameId === gameId) && (+winner.year === +year))
            })
    }
)
//
export const selectWinnerByName = createSelector(
    selectWinnersAll,
    (state, name) => name,
    (winners, name) => {
        return winners.filter(winner => winner.name.ru === name);
    }
)


export const {
    selectAll: selectAllGamesResult,
    selectById: selectGamesResultById
} = winnersAdapter.getSelectors(state => state.gamesResult);

export const selectYearsForGame = createSelector(
    selectAllGamesResult,
    (state, gameId) => gameId,
    selectWinnersEntities,
    (gamesResult, _gameId, winners) => {
        return gamesResult.reduce((arr, {gameId, year}) => {
            return gameId === _gameId ? [...arr, year] : arr
        }, [])
    }
)


export default winnersSlice.reducer;
