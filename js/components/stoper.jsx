import React from 'react';

export default class Stopwatch extends React.Component {
    constructor(){
        super();
        this.state = this.initialState = {
            timeElapsed: 0,
            min: 0,
            sec: 0,
            msec: 0,
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.setState(this.initialState);

        fetch('http://localhost:3000/times', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    componentDidMount(){
       this.intervalId = setInterval(() => {
          this.setState({
             timeElapsed: this.state.timeElapsed + 10.1,
              min: Math.floor((this.state.timeElapsed / 1000) / 60).toString(),
              sec: Math.floor((this.state.timeElapsed/ 1000) % 60).toString(),
              msec: ((this.state.timeElapsed/ 1000) % 1).toFixed(3).substring(2)
          });
       },10);
    }


    render(){
        return(
        <div id='stopwatch'>
            <span>{this.state.min}:</span>
            <span>{this.state.sec}:</span>
            <span id='msec'>{this.state.msec}</span>
        </div>

    )}
}
