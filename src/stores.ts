import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


export interface TicTacToeState {
    winners: string[],
    points: {
        [key: string]: number;
    }
};

const initialState: TicTacToeState = {
    winners: [],
    points: {
        player1: 0,
        player2: 0
    }
};

export interface AddWinnerAction {
    type: 'ADD_WINNER';
    payload: string;
}

export interface AddPointAction {
    type: 'ADD_POINT';
    payload: string;
}

export interface ResetPointsAction {
    type: 'RESET_POINTS',
}


export type TicTacToeAction = AddWinnerAction | AddPointAction | ResetPointsAction;

function pointsReducer(state = initialState.points, action: TicTacToeAction) {
    switch (action.type) {
        case 'ADD_POINT':
            const player = action.payload;
            return {
                ...state,
                [player]: state[player] + 1,
            };
        case 'RESET_POINTS':
            return {
                player1: 0,
                player2: 0
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    points: pointsReducer
})

const enhancers = compose(applyMiddleware(thunk), composeWithDevTools());

const store = createStore(rootReducer, enhancers);


export default store;