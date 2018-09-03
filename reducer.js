
const initialState = {
 player1Score: 0,
 player2Score: 0
}


function reducer(state, action){
 if (!state) {
  state = initialState;
  }
  switch (action.type) {
    case "player1ScoreIncrease":
          const newScore = state.player1Score + 1;
          const newScore = object.assign({}, state, { player1Score: newScore });
          return newState;
    case "player1ScoreIncrease":
          const newScore2 = state.player2Score + 1;
          const newScore2 = object.assign({}, state, { player1Score: newScore });
    return newState2;
  }

  return state;
};

module.exports = reducer;
