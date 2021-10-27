import memoryGameReducer from "./memoryGame-reducer";
import {combineReducers, createStore} from "redux";
import pytnashkiReducer from "./pytnashki-reducer";


let reducers = combineReducers({
    memoryGame: memoryGameReducer,
    pytnashki: pytnashkiReducer,
})

let store = createStore(reducers, +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
export default store;