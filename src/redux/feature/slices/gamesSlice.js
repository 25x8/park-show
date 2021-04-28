import {
    createEntityAdapter,
    createSelector,
    createSlice
} from "@reduxjs/toolkit";

const gamesAdapter = createEntityAdapter({});

const gamesSlice = createSlice({
    name: 'games',
    initialState: gamesAdapter.getInitialState(),
    extraReducers: {
        "fetchData/fulfilled": (state, action) => {
            const {games} = action.payload
            gamesAdapter.addMany(state, games);
        }
    }
});

export const {
    selectById: selectGameById,
    selectIds: selectGamesIds,
    selectEntities: selectGamesEntities,
    selectAll: selectGames,
} = gamesAdapter.getSelectors(state => state.games);

export const selectGameIconAndNameById = createSelector(
    selectGameById,
    ({image, name}) => {
        return  {
            name: name.ru,
            icon: image
        }
    }
)

export const selectGameByArrayOfId = createSelector(
    selectGames,
    (state, idArr) => idArr,
    (games, idArr) => {
        const result = [];
        idArr.forEach(el => {
            const game = games.find(game => game.id === el.gameId);
            result.push({
                game: game,
                year: el.year,
                rank: el.rank,
                result: el.result
            });
        })
        return result
    }

)


export default gamesSlice.reducer;


export const selectYearsForGameResult = createSelector(
    selectGames,
    (state, gameId) => gameId,
    (gamesResult, _gameId) => {
        return gamesResult.reduce((arr, {gameId, year}) => {
            return gameId === _gameId ? [...arr, year] : arr
        }, [])
    }
);

export const selectLocationGameResultByYear = createSelector(
    selectGames,
    (state, {gameId, year}) => ({gameId, year}),
    (gamesResult, {gameId: _gameId, year: _year}) => {
        return gamesResult.reduce((l, {gameId, year, location}) => {
            return gameId === _gameId && year === _year ? location : l;
        }, "");
    }
);




