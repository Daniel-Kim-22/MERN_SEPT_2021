import React, { Component } from 'react';
// import myCoolStyle from "./SomeClassComponent.module.css";


const x = {
    backgroundColor : "teal"
}
class SomeClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPerson : this.props.person,
            age : this.props.person.age
        }
        
    }


    increaseAge = () => {
        console.log("clicked");
        // STATE IS IMMUTABLE!!! 👀
        // setState -> allows us to change our state var
        this.setState({
            ...this.state,
            age: this.state.age + 1
        })
    }

    render() {
        // console.log("render");
        return (
            <>
                <div>This is our first class component.

                <p>{JSON.stringify(this.state.myPerson)}</p>
                <p>Bob's age is : {this.state.age}</p>
                <button onClick={this.increaseAge}>increase {this.state.myPerson.name}'s age +1</button>

                </div>
            </>
        )
    }
}

export default SomeClassComponent;