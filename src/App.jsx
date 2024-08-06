import { useState } from "react"
import Status from "./components/Status.jsx";


const App = ()=>{
    let [user,setUser] = useState("krish");

    return(
        <div>
            <Status 
            user ={user}
            setUser ={setUser} />
        </div>
    )
}

export default App