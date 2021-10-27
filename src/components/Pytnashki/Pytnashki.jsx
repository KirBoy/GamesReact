import React from 'react'
import {NavLink} from "react-router-dom";
import './../style.css'

import PytnashkiResult from "./PytnashkiResult";

class Pytnashki extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.list = React.createRef()
        this.props.playAgain()
        // this.checkGame()
    }


    // checkGame() {
    //     console.log(this.props)
    //     let cards = this.props.pytnashki.cards;
    //
    //     let mass = cards.map((el, i) => {
    //
    //         return cards.filter((item, pos) => {
    //
    //             return cards[i + 1 + pos] < el
    //         }).length
    //
    //     })
    //     console.log(mass.reduce((previousValue, currentValue) => previousValue + currentValue))
    //     if (mass.reduce((previousValue, currentValue) => previousValue + currentValue) % 2 !== 0) {
    //         this.props.playAgain()
    //     }
    //     if (true) {
    //         this.props.playAgain()
    //     }
    // }

    componentDidMount() {
        let cards = this.props.pytnashki.cards;

        let mass = cards.map((el, i) => {

            return cards.filter((item, pos) => {

                return cards[i + 1 + pos] < el
            }).length

        })
        console.log(mass.reduce((previousValue, currentValue) => previousValue + currentValue))
        if (mass.reduce((previousValue, currentValue) => previousValue + currentValue) % 2 !== 0) {
            this.props.playAgain()
        }
    }

    countDone() {
        let cards = [];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.list.current.childNodes[i].childNodes[j].childNodes[0] === undefined) {
                    continue
                }
                cards.push(+this.list.current.childNodes[i].childNodes[j].childNodes[0].getAttribute('src').split('.')[1])
            }
        }


        if (JSON.stringify(cards) === JSON.stringify(this.props.pytnashki.result)) {
            this.props.gameResult()
        }

    }

    move(e) {

        const position = e.nativeEvent.path
        let y = e.target.parentElement.getAttribute('data-y')
        let x = e.target.parentElement.getAttribute('data-x')

        try {
            if (position[3].children[y - 2].children[x - 1].innerHTML === '') {
                let inner = position[1].innerHTML
                position[1].innerHTML = '';
                position[1].classList.add('last');
                position[3].children[y - 2].children[x - 1].classList.remove('last');
                position[3].children[y - 2].children[x - 1].innerHTML = inner
            }
        } catch (error) {
        }

        try {
            if (position[3].children[y].children[x - 1].innerHTML === '') {
                let inner = position[1].innerHTML
                position[1].innerHTML = '';
                position[1].classList.add('last');
                position[3].children[y].children[x - 1].classList.remove('last');
                position[3].children[y].children[x - 1].innerHTML = inner
            }
        } catch (error) {
        }

        try {
            if (position[2].children[x].innerHTML === '') {
                let inner = position[1].innerHTML
                position[1].innerHTML = '';
                position[1].classList.add('last');
                position[2].children[x].classList.remove('last');
                position[2].children[x].innerHTML = inner
            }
        } catch (error) {
        }

        try {
            if (position[2].children[x - 2].innerHTML === '') {
                let inner = position[1].innerHTML
                position[1].innerHTML = '';
                position[1].classList.add('last');
                position[2].children[x - 2].classList.remove('last');
                position[2].children[x - 2].innerHTML = inner
            }
        } catch (error) {
        }
        this.countDone()
    }

    render() {

        return (
            <>{this.props.pytnashki.gameComplited ?
                <PytnashkiResult playAgain={this.props.playAgain}/> : null}
                <ul className="list display-block" ref={this.list} onClick={(e) => this.move(e)}>
                    {this.props.pytnashki.row.map((el, i) => <Item key={i} y={el} row={this.props.pytnashki.row}
                                                                   numbers={this.props.pytnashki.cards.slice((el - 1) * 4, el * 4)}/>)}
                </ul>
                <NavLink className='home-main' exact to={'/'}>
                    home
                </NavLink>
            </>
        )
    }
}

const Item = (props) => {

    return (
        <li className="row">
            {props.row.map((el, i) => <ItemPosition key={i} y={props.y} x={el} numbers={props.numbers[i]}/>)}
        </li>
    )
}

const ItemPosition = (props) => {
    let path = '/numbers/img.' + props.numbers + '.png';
    return (
        <div className="number" data-y={props.y} data-x={props.x}>
            {props.numbers && <img className="card" src={path} alt=""></img>}
        </div>
    )
}

export default Pytnashki;