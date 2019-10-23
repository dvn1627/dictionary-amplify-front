import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeanPage() {

    const [itemsList, setItemsList] = useState([]);
    const [word, setWord] = useState(null);
    const [history, setHistory] = useState([]);

    function getWord(items) {
        const number = Math.floor(Math.random() * Math.floor(items.length));
        return items[number];
    }

    useEffect(() => {
        if (!itemsList.length) {
            fetch();
        }
    });

    function fetch() {
        const options = {
            headers: {
                'x-api-key' : 'yybTDPxOF96jzOQa0bm4g6LM8kd9FDjw2z1hRg7q'
            }
        }
        const url = 'https://et489h5atg.execute-api.us-west-2.amazonaws.com/default/Dictionary';
        axios.get(url, options).then( res => {
            const total = res.data.length;
            setItemsList(res.data);
            setWord(getWord(res.data));
        }).catch( err => {
            console.error('ERROR:', err.message);
        })
    }

    function check(item) {
        let result = item.rus === word.rus;
        const newHistory = [{word: word.eng, result}, ...history];
        setHistory(newHistory);
        setWord(getWord(itemsList));
    }

    return (
        <div>
            <h2>Leaning</h2>
            <h2>{ word && word.eng }</h2>
            <ul className="options-list">
                { itemsList.map(item => (<li onClick={() => check(item)} key={item.rus}> {item.rus} </li>)) }
            </ul>
            <div className="history-list">
                <ul>
                    { history.map( (h, index) => (<li key={index}> <strong style={{color: h.result ? 'green' : 'red'}}>{h.word}</strong> </li>)) }
                </ul>
            </div>
        </div>
    )
}