import React, {useState} from 'react'

const Counter = (props) => {

    //    the state var
    //              function to set state
    //      v         v
    const [state, setState] = useState({
        clickCount: 0,
        message: "ok"
    })

    const handleClick = () => {
        // console.log("clicked");
        setState({
            ...state,
            clickCount: state.clickCount + 1
        });
    }


    return (
        <div>
            state is {JSON.stringify(state)} <br/>
            counter is {state.clickCount}
            <button onClick={ () => handleClick() }>Click Me</button>
        </div>
    )
}

export default Counter;
