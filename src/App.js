import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            to: 0,
            from: 0,
        }
    };

    setCounterValue(value) {
        this.setState({
            from: parseInt(value)
        })
    }

    setTimer() {
        let interval = setInterval(() => {
            if(this.state.from > 0) {
                this.setState({
                    from: this.state.from -= 1
                })
            }
            else {
                clearInterval(interval);
            }
        }, 1000);

    };

    niceFromDisplay() {
        let view = this.state.from;
        let minSec = Math.floor((Number(view) / 60)) + ':' + Math.floor((view % 60))
        return minSec
    };

    resetTimer() {
        this.setState({
            from: 0,
        });
    }

    render() {
        return (
            <div className='timer__main'>
                <div className='timer__counter'>
                    {this.niceFromDisplay()}
                </div>
                <div className='timer__set-timer'>
                    <label className='timer__text' htmlFor="inputNum">Set value in seconds:</label>
                    <input
                        className='timer__input'
                        id="inputNum"
                        type="text"
                        placeholder={this.state.from}
                        onChange={(e) => this.setCounterValue(e.target.value)}
                        maxlength="6"/>
                    <button className='timer__button-set' onClick={() => this.setTimer()}>Set Timer</button>
                    <button className='timer__button-reset' onClick={() => this.resetTimer()}>Reset</button>
                </div>
            </div>)
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter/>
            </div>
        );
    }
}

export default App;
