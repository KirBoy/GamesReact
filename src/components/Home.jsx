import React from 'react'
import {BrowserRouter, NavLink} from "react-router-dom";
import './style.css'


const Home = () => {
    return (

        <div className="main__inner">
            <h1 className="title">Выбери игру</h1>
            <ul className="list">
                <div className="choice">
                    <NavLink to={'/memorygame/'}>
                        Найди пару
                    </NavLink>
                </div>
                <div className="choice">
                    <NavLink to={'/pytnashki/'}>
                        Пятнашки
                    </NavLink>
                </div>
                <div className="choice">
                    <NavLink className='name' to={'/witcher/'}>
                        Ведьмак 3
                    </NavLink>
                </div>
            </ul>
        </div>

    )
}

export default Home;