import React from 'react';
import {connect} from "react-redux";
import Pytnashki from "./Pytnashki";
import {gameResult, playAgain} from "../../redux/pytnashki-reducer";


let mapStateToProps = (state) => {

    return {
       pytnashki: state.pytnashki,
    }
}

let mapDispatchToProps = (dispatch) => {
    return ({
        playAgain: () => {
            dispatch(playAgain());
        },
        gameResult: ()=> {
            dispatch(gameResult())
        }
    })
}

const PytnashkiContainer = (props) => {

    return (
        <Pytnashki pytnashki={props.pytnashki} playAgain={props.playAgain} gameResult={props.gameResult}/>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(PytnashkiContainer);
