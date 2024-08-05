import { useState } from "react";

//Function component

const App = ()=>{

//here useState returns 2 value i)name(name) ii)function(setName) created a destrucurring array and stored the useState return value in it.
    
const [count,setcount] = useState(0);
const [clicks,setclick] = useState([]);

function increment(){
    setcount(count + 1)
    setclick([...clicks, 'INC'])
}

function decrement(){
    setcount(count - 1)
    setclick([...clicks, 'DEC'])

}

function reset(){
    setcount(0)
    setclick([...clicks, 'RST'])

}

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button type="button" class="btn btn-primary" onClick={increment}>INC</button>
            <button type="button" class="btn btn-secondary" onClick={decrement}>DEC</button>
            <button type="button" class="btn btn-success" onClick={reset}>Reset</button>
            <p>History: {clicks.join(',')}</p>



        </div>
    )
}

export default App;