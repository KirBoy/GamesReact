import React, {createRef} from 'react'
import './style.css'
import {Redirect} from "react-router-dom";


class Witcher extends React.Component {
    constructor(props) {
        super(props);
        this.video = React.createRef()
    }

    state = {
        redirect: false
    }

    redirect() {
        this.setState({redirect: true})
    }

    componentDidMount() {
        this.video.current.volume = '0.2';
        this.video.current.autoplay = true;
    }

    render() {
        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to='/'/>
        }

        return (
            <>
                <video ref={this.video} className="video" src="/video.mp4" onClick={() => this.redirect()}>
                </video>
                <span className="sorry">:))))))))</span> <span
                className="notification">Нажми на любое место чтобы выйти</span>
            </>
        )
    }
}

export default Witcher;