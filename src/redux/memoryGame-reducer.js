const PLAY_AGAIN = 'PLAY_AGAIN';

const initialState = {
    card: [3, 2, 7, 4, 3, 6, 1, 5, 4, 1, 7, 2, 8, 8, 6, 5].sort(() => Math.random() - 0.5)
};


const memoryGameReducer = (state = initialState, action) => {

    switch (action.type) {

        case PLAY_AGAIN:
            return {...state, card: state.card.sort(() => Math.random() - 0.5)}

        default:
            return state
    }
}

export const playAgain = () => ({type: PLAY_AGAIN});

export  default memoryGameReducer;