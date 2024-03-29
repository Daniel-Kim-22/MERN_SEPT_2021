import React, { useState } from 'react';
import coolCss from "./FunctionalComponent.module.css";

// const FunctionalComponent = ({animals, x}) => {
const FunctionalComponent = (props) => {
    // console.log(props);
    const btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
        color: '#fff',
        border: 'none'
    };

//       state var      setting state 
//          v            v
    const [myVarX , setMyVarX] = useState(props.x)

    // const { animals } = props;
    // console.log(animals);

    const increaseX = () => {
        console.log("clicked");
        let newX = myVarX + 1
        setMyVarX(newX)
    }
 
    return (
        <fieldset>
            <legend>Functional Component</legend>
            <p>
                animals:
                {
                    props.animals.map((a, i) => {
                        return <li key={i}>{a}</li>
                    })

                }
            </p>
            <p className={coolCss.red}> x is {myVarX}</p>
            <button onClick={() => increaseX()} style={btnStyle}>click!</button>
            <div> this is the Functional Comp.</div>
        </fieldset>
    )
}

export default FunctionalComponent;