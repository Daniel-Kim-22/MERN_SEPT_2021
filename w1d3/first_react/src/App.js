import './App.css';
import logo from './logo.svg';

import SomeClassComponent from "./components/SomeClassComponent";
import PropsComponent from './components/PropsComponent';

function App() {

  const message = "this is my message 🎇🎇🎇🎇";
  const animals = ["tiger", "elephant", "zebra"];
  const person = {
    name: "bob",
    favFood: "🍕",
    age: 33
  }

  return (
    <div>
      <h1>hello</h1>
      <h3>
      </h3>
      <p>this is a test!! 🎈🎈🎈</p>

        <SomeClassComponent person={person}/>
        <hr/>
        <PropsComponent message={message} x={3} animals={animals}/>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
