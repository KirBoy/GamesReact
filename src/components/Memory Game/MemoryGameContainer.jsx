import React from 'react';
import {connect} from "react-redux";
import MemoryGame from "./MemoryGame";
import {playAgain} from "../../redux/memoryGame-reducer";


let mapStateToProps = (state) => {

    return {
        memoryGame: state.memoryGame,
    }
}

let mapDispatchToProps = (dispatch) => {
    return ({
        playAgain: () => {
            dispatch(playAgain());
        }
    })
}

const MemoryGameContainer = (props) => {

    return (
        <MemoryGame memoryGame={props.memoryGame} playAgain={props.playAgain}/>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(MemoryGameContainer);
