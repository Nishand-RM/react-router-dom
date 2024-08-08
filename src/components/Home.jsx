import React from 'react'

const Home = () => {
    return (
        <div>
            <ul>
                <li style={padding}>
                    <a href='/'>Home</a>
                </li>

                <li>
                    <a href='/notes'>Notes</a>
                </li>

                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
            <h1>Welcome to Home!!</h1>
        </div>
    )

}

export default Home;
