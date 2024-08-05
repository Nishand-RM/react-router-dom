import { useState } from "react";

//Function component

const App = ()=>{

//here useState returns 2 value i)name(name) ii)function(setName) created a destrucurring array and stored the useState return value in it.
    
const [count,setcount] = useState(0);

function increment(){
    setcount(count + 1)
}

function decrement(){
    setcount(count - 1)
}

function reset(){
    setcount(0)
}

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button type="button" class="btn btn-primary" onClick={increment}>INC</button>
            <button type="button" class="btn btn-secondary" onClick={decrement}>DEC</button>
            <button type="button" class="btn btn-success" onClick={reset}>Reset</button>



        </div>
    )
}

export default App;