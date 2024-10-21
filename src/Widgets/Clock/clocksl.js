import React from 'react'
import './Clock.css'
var moment = require('moment-timezone');
class ClockSl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { h: 0, m: 0, s: 0, mute: false }
        this.updateClock = this.updateClock.bind(this)
    }

    componentWillMount() {
        this.updateClock()
    }

    componentDidMount() {
        //***var tick = document.querySelector('audio')
        setInterval(() => {
            this.updateClock()
            // if (!this.state.mute) {
            //     tick.volume = 0.1
            //     tick.play()
            // }
        }, 1000)
        // document.addEventListener('click', () => this.setState({ mute: !this.state.mute }))
    }

    updateClock() {
        var now = Math.round((parseInt(moment().tz("Asia/Colombo").format("x")) - parseInt(moment().tz("Asia/Colombo").startOf('day').format("x"))) / 1000)
        // console.log(this.props.timezone);
        this.setState({ h: now / 720, m: now / 60, s: now })
    }

    render() {
        
        // console.log(moment().tz("Asia/Colombo").hour());
        // console.log(moment().tz("America/Los_Angeles").minutes());
        // console.log(moment().tz("America/Los_Angeles").seconds());
        return (
            <div>
                
                {/* <div className="copy">Click anywhere to {this.state.mute ? 'un' : null}mute</div> */}
                <div className="clock"  style={{backgroundColor:this.props.status?"#f8f8f852":"#363434"}}>
                    {/* <div className="nums">
                        {Array(12).fill().map(() => <div className="num" />)}
                    </div> */}
                    
                    <div className="clock-container">
                        <ClockHand name="hoursl" rotate={this.state.h} />
                        <ClockHand name="minsl" rotate={this.state.m} />
                        <ClockHand name="secondsl" rotate={this.state.s} />
                    </div>
                    {/* <audio src="http://ianespanto.com/archive/files/tick.mp3" /> */}
                </div>
            </div>
        )
    }
}

class ClockHand extends React.Component {
    render() {
        var tf = { transform: `translateY(-50%) rotate(${this.props.rotate * 6 - 90}deg)` }
        return <div className={`hand ${this.props.name}`} style={tf} />
    }
}

export default ClockSl