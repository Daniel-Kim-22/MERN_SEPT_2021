import './App.css';
import React, {useState} from 'react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import DisplayUser from './components/DisplayUser';

function App() {

  const [allUsers, setAllUsers] = useState([
    // {
    //   usename: "jman", 
    //   email: "j@m.com"
    // },
    // {
    //   usename: "bob",
    //    email: "b@b.com"
    //   },
    // { username: "cool",
    //   email: "c@c.com"
    // }
  ]);

  const addNewUser = (newUserObj) => {
    console.log("app.js function");
    console.log(newUserObj);

    const newUsersArray = [...allUsers];
    newUsersArray.push(newUserObj);
    setAllUsers(newUsersArray);

    // alt way
    // setAllUsers([...allUsers, newUserObj]);
  }

  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>app.js</h1>
      {/* {JSON.stringify(allUsers)} */}
      {/* <Counter/> */}
      <UserForm addNewUser={addNewUser} />
      <DisplayUser allUsers={allUsers}/>
    </fieldset>
  );
}

export default App;
