import React from 'react';

function Joke({ votes, text }) {
    return (
        <div className='Joke'>
            <div className='Joke-buttons'>
                <i className='fas fa-thumbs-up'></i>
                <span>{votes}</span>
                <i className='fas fa-thumbs-down'></i>
            </div>
            <div className='Joke-text'>{text}</div>
        </div>
    )
}

export default Joke;