import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        // console.log(props);

        // -- setting state
        this.state = {
            x: 11,
            classAnimals : props.animals
        }
    }

    someMethod() {
        // console.log(this?.state ? "yes" : "no");
        // altering state!
        // console.log(this.state.x);
        
        // setState is an async function!
        this.setState({
            // ...this.state,
            x : this.state.x + 1
        });
        
        // console.log(this.state.x);
    }

    
    render() {
        return (
            <fieldset>
                <legend>ClassComponent</legend>
                state : {JSON.stringify(this.state)}
                <div> hello from Class Component</div>
                <p>x : {this.state.x}</p>
                <button onClick={() => this.someMethod()}>click!</button>
                <p>
                    {JSON.stringify(this.state.classAnimals)}
                </p>
                <div>
                    {
                        this.state.classAnimals.map( (animal, i) => {
                            return (
                                <li key={i}> {animal}</li>
                            )
                        })
                    }
                    {/* {
                        this.state.classAnimals.map( (animal, i) =>  <li key={i}> {animal}</li>)
                    } */}
                </div>
            </fieldset>
           

        )
    }
}

export default ClassComponent;