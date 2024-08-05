import { useState } from "react";

//Function component

const App = ()=>{

//here useState returns 2 value i)name(name) ii)function(setName) created a destrucurring array and stored the useState return value in it.
    
const [name,setName] = useState("Niki");

function clickme(){
    setName('Vijay')
}

    return(
        <div>
            <h1>Hello {name}</h1>
            <button type="button" class="btn btn-primary" onClick={clickme}>ChangeName</button>

        </div>
    )
}

export default App;