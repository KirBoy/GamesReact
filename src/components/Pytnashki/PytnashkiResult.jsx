import {NavLink} from "react-router-dom";
import React from "react";

const PytnashkiResult = (props) => {
debugger
    const again = () => {
        props.playAgain()
    }

    return (
        <div className="result">
            <p className="result__text">Ты прошел игру</p>
            <div>
                <button className="again" onClick={() => again()}>Начать заново.</button>
                <NavLink to={'/'}>
                    home
                </NavLink>
            </div>
        </div>
    )

}

export  default  PytnashkiResult;