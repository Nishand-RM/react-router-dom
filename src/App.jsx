import {Component } from "react";
import './App.css'

class App extends Component{

    constructor(){
        //calling parent class constructor(component)
        super();

        //initialize a state
        this.state = {
            name:'niki',
            age:23
        }

    }

 clickme = ()=>{
    /*should not mutate the state directly
    this.state.name = "vishnu";
    this.state.age = 24;*/
    
    //instead we have to use setState(): which helps in update the state along with our given sate.
    this.setState({
        name:"vishnu",
        age:24
    });

 }
    render(){
          return(
            <div className="box">
            <h1>Hello {this.state.name}  !</h1>
            <h2>what is your age: {this.state.age}</h2>
            
            <button type="button" class="btn btn-primary" onClick={this.clickme}>Change</button>
            </div>
          )
          }
}

export default App;