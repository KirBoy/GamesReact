import React from 'react'
import {NavLink} from "react-router-dom";
import '../style.css'

const MemoryResult = (props) => {


    const again = () => {
        props.playAgain()
        props.rebutGame()
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


export default MemoryResult;