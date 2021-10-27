import './App.css';
import React from 'react'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Home from "./components/Home";
import Witcher from "./components/Witcher";
import './components/style.css'
import PytnashkiContainer from "./components/Pytnashki/PytnashkiCpntainer";
import MemoryGameContainer from "./components/Memory Game/MemoryGameContainer";

function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <Route path='/memorygame/' render={() => <MemoryGameContainer/>}/>
                <Route exact path='/' render={()=> <Home/>}/>
                <Route  path='/pytnashki/' render={()=> <PytnashkiContainer/>}/>
                <Route  path='/witcher/' render={()=> <Witcher/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
