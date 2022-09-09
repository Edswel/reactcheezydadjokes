import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className='container'>
            <h1>Dad Jokes</h1>
            <div className='joke-list'>
                {jokes.map((joke) => (
                    <div key={joke}>{joke}</div>
                ))}
            </div>
        </div>
    )
}

export default JokeLists;