//class component (stateful component)

import Header from "./component/Header";
import Description from "./component/Description";
import { Component } from "react";
import Hello from "./component/Hello";





class App extends Component{
    render()
    {
        return(
            <div>
                <Header/>
                <Description />
                <Hello />
                
            </div>
        )
    }
}


export default App;