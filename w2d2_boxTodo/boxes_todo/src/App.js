import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import New from './components/New';

function App() {

  const [boxes, setBoxes] = useState([
    { color: "green", status: true },
    { color: "red", status: true },
    { color: "blue", status: false },
  ])

  // create
  const createBox = (newBox) => {
    console.log(newBox);
    const copyBoxes = [...boxes];
    copyBoxes.push(newBox)
    setBoxes(copyBoxes)
    // setBoxes([...boxes, newBox])
  }

  // delete
  const deleteBox = (deleteIdx) => {
    // console.log(deleteIdx);
    // const newBoxes = boxes.filter((box, i) => {
    //   if (deleteIdx !== i) {
    //     return true;
    //   } else return false;
    // })
    const newBoxes = boxes.filter((box, i) => i !== deleteIdx ? true : false)
    setBoxes(newBoxes);
  }

  // update
  const updateBox = (idx) => {
    // console.log(idx);
    const copyBoxes = [...boxes];
    // if (copyBoxes[idx].status === true) {
    //   copyBoxes[idx].status = false 
    // } else {
    //   copyBoxes[idx].status = true 
    // }
    copyBoxes[idx].status = !copyBoxes[idx].status;
    setBoxes(copyBoxes);
  }

  return (
    <div className="App">
      <h1>Boxes 📦</h1>
      {JSON.stringify(boxes)} <br />
      <New createBox={createBox} />
      <p></p>
      <hr />
      {
        boxes.map((box, i) => {
          return <Box key={i} 
                      idx={i} 
                      box={box} 
                      deleteBox={deleteBox}
                      updateBox={updateBox} />
        })
      }

    </div>
  );
}

export default App;
