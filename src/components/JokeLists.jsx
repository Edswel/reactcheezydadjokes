import { useEffect } from 'react';
import axios from 'axios';

function JokeLists({ numJokesToGet = 10 }) {

    useEffect(() => {
        async function getJokes() {
            try {
                let res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: 'application/json' } });
                console.log(res.data.joke);
            } catch (error) {

            }
        }
        getJokes();
    }, []);

    return (
        <div>
            <h1>Dad Jokes</h1>
        </div>
    )
}

export default JokeLists;