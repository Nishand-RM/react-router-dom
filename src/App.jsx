import {Component } from "react";
import './App.css'

class App extends Component{

    constructor(){
        //calling parent class constructor(component)
        super();

        //initialize a state
        this.state = {
            count:0
        }

    }

 //increment
    clickme = ()=>{
   
    this.setState({
       count:this.state.count + 1
    });

 }

 //decrement
 dec =()=>{
    this.setState({
        count:this.state.count - 1
    });
    
 }

 //reset
 reset_state =()=>{
    this.setState({
        count:0
    });
 }
    render(){
          return(
            <div className="box">
            <h1>Counter: {this.state.count}  !</h1>
            
            
            <button type="button" class="btn btn-primary" onClick={this.clickme}>Increment</button>
            <button type="button"  class="btn btn-secondary"onClick={this.dec}>Decrement</button>
            <button type="button" class="btn btn-success" onClick={this.reset_state}>Reset</button>


            </div>
          )
          }
}

export default App;