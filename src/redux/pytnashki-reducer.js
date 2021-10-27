const PLAY_AGAIN = 'PLAY_AGAIN';
const GAME__COMPLITED = 'GAME__COMPLITED';

const initialState = {
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,  15, 14],
    row: [1, 2, 3, 4],
    result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    gameComplited: false
};

const pytnashkiReducer = (state = initialState, action) => {

    switch (action.type) {

        case PLAY_AGAIN:
            return {...state, cards: state.cards.sort(() => Math.random() - 0.5), gameComplited: false}

        case GAME__COMPLITED:
            return {...state, gameComplited: true}

        default:
            return state
    }
}

export const playAgain = () => ({type: PLAY_AGAIN});
export const gameResult = () => ({type: GAME__COMPLITED});

export default pytnashkiReducer;