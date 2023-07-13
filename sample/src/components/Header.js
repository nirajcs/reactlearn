//CLASS COMPONENT
// import {Component} from 'react'

// class Header extends Component {
//     render(){
//         return(<h1>Hello Iam class function {this.props.data}</h1>)
//     }
// }
 
function Header(props){
    return(<h1>Hello Iam function {props.data}</h1>)
}

export default Header