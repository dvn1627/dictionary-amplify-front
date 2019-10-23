import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllPage() {

    const [itemsList, setItemsList] = useState([]);

    const options = {
        headers: {
            'x-api-key' : 'yybTDPxOF96jzOQa0bm4g6LM8kd9FDjw2z1hRg7q'
        }
    }
    const url = 'https://et489h5atg.execute-api.us-west-2.amazonaws.com/default/Dictionary';

    function fetchItems() {
        axios.get(url, options).then( res => {
            setItemsList(res.data);
        }).catch( err => {
            console.error('ERROR:', err.message);
        })
    }

    useEffect(() => {
        if (!itemsList.length) {
            fetchItems();
        }
    });

    function deleteWord(item) {
        
        const data = {
            data: {
                eng: item.eng,
            },
            ...options,
        }
        console.log('data', data);
        axios.delete(url, data).then( res => {
            fetchItems();
        }).catch( err => {
        })
    }

    return(
        <div>
            <h2>All words</h2>
            <div className="all-words-list">
                <ul>
                    { itemsList.map( item => (<li key={item.eng} >
                        <span>
                            <strong>{ item.eng }</strong>
                            <i>{ item.rus }</i>
                        </span>
                        <button onClick={() => deleteWord(item)}>del</button>
                    </li>)) }
                </ul>
            </div>
        </div>
    );
}