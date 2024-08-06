import { useEffect, useState } from "react"


const App = ()=>{
    let [count,setcount] = useState(0);


//this run when component is mounted
    useEffect(()=>{
        console.log(`component is mounted`);
    },[]);

//this runs component is updated

    useEffect(()=>{
        console.log(`componet is updated ${count}`)
    },[count]);

    //method

    function click(){
        setcount(count + 1);
    }


    return(
        <div>
           <h1>counter:{count}</h1>
           <button onClick={click}>INC</button>
        </div>
    )
}

export default App