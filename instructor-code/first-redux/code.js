const store = require('./store');

const player1ScoreAction = {
    type: 'player1ScoreIncrease'
}

const player2ScoreAction = {
    type: 'player2ScoreIncrease'
}

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(player1ScoreAction);
store.dispatch(player1ScoreAction);
store.dispatch(player1ScoreAction);
store.dispatch(player2ScoreAction);