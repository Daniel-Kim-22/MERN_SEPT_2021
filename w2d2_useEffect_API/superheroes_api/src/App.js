import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [heroes, setHeroes] = useState([]);


  console.log("🎈🎈 11111");
  
  useEffect(()=>{
    // console.log("🎈🎈 33333");
    axiosHeroes()
  }, []) // NEVER PUT STATE AND SETSTATE HERE!!!!
  
  console.log("🎈🎈 2222222");

  // fetch
  const fetchHeroes = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setHeroes(jsonResponse)
      })
      .catch(err => console.log(err))
  }

  // axios
  const axiosHeroes = () => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(res => {
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => console.log(err))
  }
  // axiosHeroes(); // makes this run forever!

  let content = (
    heroes.length === 0 ?
    <h3>please wait, fetching data ⏳</h3>
    :
    <table>
        <thead>
          <tr>
            <th>Hero name</th>
            <th>full name</th>
            <th>Publisher</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => (
              <tr key={i}>
                <td> {hero.name} </td>
                <td> {hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName} </td>
                <td> {hero.biography.publisher} </td>
                <td> {hero.appearance.gender} </td>
                <td> <img src={hero.images.xs} alt={`extra small name of ${hero.name}`} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  )

  return (
    <div className="App">
      <h1>Superheroes API 🦸‍♀️🦸‍♂️</h1>
      {/* <button onClick={fetchHeroes}>fetch Superheroes</button>
      <button onClick={axiosHeroes}>axios Superheroes</button> */}
      <hr />
      {content}
      {/* {JSON.stringify(heroes)} */}
      {/* <table>
        <thead>
          <tr>
            <th>Hero name</th>
            <th>full name</th>
            <th>Publisher</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => (
              <tr key={i}>
                <td> {hero.name} </td>
                <td> {hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName} </td>
                <td> {hero.biography.publisher} </td>
                <td> {hero.appearance.gender} </td>
                <td> <img src={hero.images.xs} alt={`extra small name of ${hero.name}`} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
