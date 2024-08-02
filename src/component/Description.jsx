import { Component } from "react";

class Description extends Component{
    render(){
       return <p>Nice to meet you {this.props.name}</p>
    }
}

export default Description;