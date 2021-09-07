import React from 'react'
import {useState} from 'react';

const New = ({createBox}) => {

    const [newColor, setNewColor] = useState("");

    const submitColor = (e) => {
        e.preventDefault();
        // let myNewBox = {
        //     color: newColor
        // }
        // createBox(myNewBox);
        createBox({color: newColor, status: false});
        setNewColor("");
    }

    return (
        <fieldset>
            <legend>New.jsx</legend>
            {JSON.stringify(newColor)}
            <form onSubmit={(e)=> submitColor(e)}>

            enter color: 
            <input type="color" onChange={(e) => setNewColor(e.target.value)} value={newColor} />
            <button>add color</button>
            </form>
        </fieldset>
    )
}

export default New;
