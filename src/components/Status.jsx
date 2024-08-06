const Status =({user,setUser}) =>{
    function handle(){
    setUser("viki");
    }

    return(
        <div>
            <h1>{user} has logged in succesfully!</h1>
            <button onClick={handle}>Update</button>
        </div>
    )
}

export default Status;