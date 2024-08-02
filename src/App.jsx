//class component (stateful component)

import Header from "./component/Header";
import Description from "./component/Description";
import { Component } from "react";
import Hello from "./component/Hello";





class App extends Component{
    render()
    {
        const name =["niki","vijay","Ajith"]
        return(
            <div>
                <Hello 
                name={name[0]} />
                <Hello 
                name ={name[1]}/>
                
            </div>
        )
    }
}


export default App;