import React , {Component} from 'react'

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }

    }
    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    render(){
        return(
            <div>
                <p>This is a Class Component</p>
                <p>{this.props.title}</p>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }

}

export default Welcome;