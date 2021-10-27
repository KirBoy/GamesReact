import React from 'react'
import {NavLink} from "react-router-dom";
import '../style.css'
import MemoryResult from "./MemoryResult";

class MemoryGame extends React.Component {

    constructor(props) {
        super(props);
        this.list = React.createRef();
        this.props.playAgain()
        this.timer()
    }

    state = {
        done: false,
        items: [],
        sec: 0,
        min: 0,
        cards: [],
        couple: [],
        mistakes: 0
    }

    timer() {
        setInterval(() => {
            if (this.state.sec === 60) {
                this.setState({
                    sec: 0,
                    min: this.state.min + 1
                })
            }
            this.setState({
                sec: this.state.sec + 1
            })
        }, 1000)
    }

    static getDerivedStateFromProps(props, state) {

        if (JSON.stringify(props.memoryGame.card) === JSON.stringify(state.items)) {
            return state;

        } else {

            return {
                done: false,
                items: [...props.memoryGame.card]
            }
        }

    }

    flip(e) {
        if (e.target.className === 'front') {
            let inner = e.target.parentElement.childNodes[1].innerHTML
            this.setState({
                cards: [...this.state.cards, [e.target, inner]]
            })

            this.state.cards.forEach((el) => {
                if (el[1] === inner && el[0] !== e.target) {
                    this.setState({
                        couple: [...this.state.couple, inner]
                    })
                }
            })

            this.state.couple.forEach((el) => {
                if (el === inner) {
                    this.setState({
                        mistakes: this.state.mistakes + 1
                    })
                }
            })
            console.log(this.state.mistakes,this.state.couple)
            let active = [];


            for (let i = 0; i < 16; i++) {
                if (e.target.parentNode.parentNode.parentNode.childNodes[i].childNodes[0].classList.contains('active')) {
                    active.push(i)
                }
            }

            if (active.length === 1 || active.length === 0) {
                e.target.parentNode.classList.add(('active'))
                active = []
                for (let i = 0; i < 16; i++) {
                    if (e.target.parentNode.parentNode.parentNode.childNodes[i].childNodes[0].classList.contains('active')) {
                        active.push(i)
                    }
                }
            }


            if (active.length === 2) {
                let firstEl = e.target.parentNode.parentNode.parentNode.childNodes[active[0]].childNodes[0].childNodes[1];
                let secondEl = e.target.parentNode.parentNode.parentNode.childNodes[active[1]].childNodes[0].childNodes[1];
                if (firstEl.innerHTML === secondEl.innerHTML) {
                    let number = firstEl.childNodes[0].getAttribute('data-number');
                    let audio = new Audio();
                    audio.volume = 0.5;
                    audio.src = `/audio/${number}.mp3`;
                    audio.autoplay = true;
                    e.target.parentNode.parentNode.parentNode.childNodes[active[0]].childNodes[0].classList.add('done')
                    e.target.parentNode.parentNode.parentNode.childNodes[active[0]].childNodes[0].classList.remove('active')
                    e.target.parentNode.parentNode.parentNode.childNodes[active[1]].childNodes[0].classList.add('done')
                    e.target.parentNode.parentNode.parentNode.childNodes[active[1]].childNodes[0].classList.remove('active')

                } else {
                    setTimeout(() => {
                        e.target.parentNode.parentNode.parentNode.childNodes[active[0]].childNodes[0].classList.remove('active')
                        e.target.parentNode.parentNode.parentNode.childNodes[active[1]].childNodes[0].classList.remove('active')

                    }, 800)
                }
            }
            this.countDone(e)

        }

    }

    countDone(e) {
        let done = 0;
        for (let i = 0; i < 16; i++) {
            if (e.target.parentNode.parentNode.parentNode.childNodes[i].childNodes[0].classList.contains('done')) {
                done++
            }
        }

        if (done === 16) {
            this.setState({
                done: true
            })
        } else {
            this.setState({
                done: false
            })
        }

    }

    rebutGame() {
        this.list.current.childNodes.forEach((el) => el.childNodes[0].className = 'flipper')
    }

    render() {
        return (
            <>
                <span>{this.state.min}</span>
                <span>{this.state.sec}</span>
                {this.state.done ?
                    <MemoryResult playAgain={this.props.playAgain} rebutGame={this.rebutGame.bind(this)}/> : null}
                <ul className="list list--game" ref={this.list} onClick={(e) => this.flip(e)}>
                    {this.props.memoryGame.card.map((el, i) => <Card key={i} card={el}/>)}
                </ul>
                <NavLink className='home-main' exact to={'/'}>
                    home
                </NavLink>
            </>
        )

    }
}

function Card(props) {

    let path = '/cards/' + props.card + '.png';

    return (
        <div className="item">
            <div className='flipper'>
                <div className="front">
                </div>
                <div className="back">
                    <img className="card" data-number={props.card} src={path} alt="">
                    </img>
                </div>
            </div>
        </div>
    )
}

export default MemoryGame;