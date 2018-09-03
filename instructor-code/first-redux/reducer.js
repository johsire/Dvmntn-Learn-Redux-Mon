const initialState = {
    player1Score: 0,
    player2Score: 0
}


function reducer(state, action) {
    if (!state) {
        state = initialState;
    }
    switch (action.type) {
        case "player1ScoreIncrease":
            const newScore = state.player1Score + 1;
            const newState = Object.assign({}, state, { player1Score: newScore });
            return newState;
        case "player2ScoreIncrease":
            const newScore2 = state.player2Score + 1;
            const newState2 = Object.assign({}, state, { player2Score: newScore2 });
            return newState2;
    }

    return state;
}

module.exports = reducer;