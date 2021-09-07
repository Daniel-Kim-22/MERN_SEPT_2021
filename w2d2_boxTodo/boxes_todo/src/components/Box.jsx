import React from 'react'

const Box = ({ idx, box, deleteBox, updateBox }) => {



    return (
        <div key={idx} style={{
            backgroundColor: box.color,
            height: "100px",
            width: "100px",
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: box.status ? "line-through" : ""
        }}>{box.color}
            <button onClick={() => deleteBox(idx)}>delete</button>
            completed
            <input type="checkbox"
                checked={box.status}
                onChange={() => updateBox(idx)} />
        </div>
    )
}

export default Box;
