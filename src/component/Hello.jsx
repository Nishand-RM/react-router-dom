import { Component } from "react";
import Header from "./Header";
import Description from "./Description";

class Hello extends Component{
    render(){
        return(
            <div>
              <Header  
              name ={this.props.name}/>
              <Description
              name={this.props.name} />
            </div>
        )
    }
}

export default Hello;