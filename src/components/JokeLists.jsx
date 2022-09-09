import { useEffect, useState } from 'react';
import axios from 'axios';
import './JokeLists.css';

function JokeLists({ numJokesToGet = 10 }) {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        async function getJokes() {
            try {
                let jokes = [];
                while (jokes.length < numJokesToGet) {
                    let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: 'application/json' } });
                    jokes.push(res.data.joke);
                }
                setJokes(jokes);
            } catch (error) {

            }
        }
        getJokes();
    }, []);

    return (
        <div className='Container'>
            <div className='Container-sidebar'>
                <h1 className='Container-title'><span>Dad</span> Jokes</h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                <button className='Container-fresh'>New Jokes</button>
            </div>

            <div className='Container-jokes'>
                {jokes.map((joke) => (
                    <div key={joke}>{joke}</div>
                ))}
            </div>
        </div>
    )
}

export default JokeLists;