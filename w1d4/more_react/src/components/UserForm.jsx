import React, { useState } from 'react';
import style from "./UserForm.module.css";


const UserForm = (props) => {

    // const {addNewUser} = props;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    // const [age, setAge] = useState(null);

    const [user, setUser] = useState({});

    const [nameError, setNameErr] = useState("");

    const createUser = (e) => {
        e.preventDefault()
        // console.log("no longer refreshes!");
        // const newUser = { username, email, password };
        const newUser = {
            username,
            email,
        }
        setUser(newUser);
        // props.addNewUser(newUser);

        // // ALT way
        // const newUsersArray = [...props.allUsers];
        // newUsersArray.push(newUser);
        // props.setAllUsers(newUsersArray);

        // 🎈🎈🎈 calling the function from app.js and pass the new user obj we created
        props.addNewUser(newUser);
    
    };



    const checkLength = (aString) => {
        console.log(aString);

        // set to state to save the string
        setUsername(aString);

        // check errors
        if (aString.length < 3) {
            setNameErr("must be longer than 3 chars")
        }
        else if (aString === "" ){
            setNameErr("at least put something here 🙃");
        }
        else {
            // else clear the input 
            setNameErr("")
        }
    }

    return (
        <fieldset className={style.wrap}>
            <legend>UserForm.jsx</legend>
            <form onSubmit={createUser}>
                username: {JSON.stringify(username)} <br />
                email: {JSON.stringify(email)} <br />
                user: {JSON.stringify(user)} <br />

                <div>
                    <label>Username: </label>
                    {/* <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} /> */}
                    <input type="text" onChange={(e) => checkLength(e.target.value)} value={username} /><br />
                    {nameError ? <span style={{ color: "red" }}>{nameError}</span> : <span>&nbsp;</span>}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </fieldset>
    );
};

export default UserForm;