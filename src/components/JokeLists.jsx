import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeLists.css';
import Joke from './joke/Joke';

function JokeLists({ numJokesToGet = 10 }) {
    const [jokes, setJokes] = useState([]);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        async function getJokes() {
            try {
                let jokes = [];
                while (jokes.length < numJokesToGet) {
                    let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: 'application/json' } });
                    jokes.push({ id: uuidv4(), text: res.data.joke, votes: points });
                }
                setJokes(jokes);
            } catch (error) {

            }
        }
        getJokes();
    }, []);

    function handleVotes(id, delta) { }

    return (
        <div className='Container'>
            <div className='Container-sidebar'>
                <h1 className='Container-title'><span>Dad</span> Jokes</h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                <button className='Container-fresh'>New Jokes</button>
            </div>

            <div className='Container-jokes'>
                {jokes.map((joke) => (
                    <Joke key={joke.id} votes={joke.votes} text={joke.text} upVote={() => handleVotes(joke.id, 1)} downVote={() => handleVotes(joke.id, -1)} />
                ))}
            </div>

        </div>
    )
}

export default JokeLists;