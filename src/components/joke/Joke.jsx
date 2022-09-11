import React from 'react';
import './Joke.css';

function Joke({ votes, text, upVote, downVote }) {

    return (
        <div className='Joke'>
            <div className='Joke-buttons'>
                <i className='fas fa-thumbs-up' onClick={upVote}></i>
                <span className='Joke-votes'>{votes}</span>
                <i className='fas fa-thumbs-down' onClick={downVote}></i>
            </div>
            <div className='Joke-text'>{text}</div>
            <div className='Joke-smiley'><i className='em em-rolling_on_the_floor_laughing' /></div>
        </div>
    )
}

export default Joke;