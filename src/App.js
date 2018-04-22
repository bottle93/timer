import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            to: 0,
            onSuccess: false,
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
                this.setState({
                    onSuccess: true,
                });
                clearInterval(interval);
            }
        }, 1000);

    };

    niceFromDisplay() {
        let view = this.state.from
        let minSec = parseInt(view / 60) + ':' + (view % 60)
        return minSec
    };

    resetTimer() {
        this.setState({
            from: 0,
            onSuccess: false,
        });
    }

    render() {
        if(!this.state.onSuccess) {
            return (
                <div>
                    <div>
                        {this.niceFromDisplay()}
                    </div>
                    <div>
                        <label htmlFor="inputNum">Set value in seconds</label>
                        <input
                            id="inputNum"
                            type="text"
                            placeholder={this.state.from}
                            onChange={(e) => this.setCounterValue(e.target.value)}
                            maxlength="4"/>
                        <button onClick={() => this.setTimer()}>Set Timer</button>
                        <button onClick={() => this.resetTimer()}>Reset</button>
                    </div>
                </div>)
        } else if (this.state.onSuccess && this.state.from > 0){
            return (
                <div>
                    <h1>STOP!</h1>
                    <div>
                        {this.state.from}
                    </div>
                    <div>
                        <label htmlFor="inputNum">Set value in seconds</label>
                        <input
                            id="inputNum"
                            type="text"
                            placeholder={this.state.from}
                            onChange={(e) => this.setCounterValue(e.target.value)}
                            maxlength="4"/>
                        <button onClick={() => this.setTimer()}>Set Timer</button>
                    </div>
                </div>)
        }
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
