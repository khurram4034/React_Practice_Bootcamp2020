import React, { useState } from 'react';
import Message from './Message';
import './App.css';

function State() {
    let [count, setCount] = useState(0);
    let [isMorning, setMorning] = useState(false);

    return (
        <div className={`box ${isMorning ? 'dayLight' : 'Night'}`}>
            <h1>Good  {isMorning ? 'MORNING' : 'NIGHT'}</h1>

            <Message counter={count} />
            <br/>
            <button onClick={
                () => setCount(count + 1)
                }>
                Updated Counter
            </button>

            <button onClick={
                () => setMorning(!isMorning)
                }>
                Update Day
            </button>
        </div>
    )
}

export default State
