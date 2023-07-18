import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor() {
        super();
        this.state={
            counter:0
        }
        console.log("Constructor Invoked");
    }

    increment=()=>{
        this.setState((prev,prop)=>({counter:prev.counter+1}))
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render() {
        console.log("render Invoked");
        return (
            <div>hooks {this.state.counter}
            <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default LifeCycle;
