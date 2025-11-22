import { useState } from 'react';
import './style.css';
import {ItemList} from "./components/ItemList.jsx";

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

function App() {
  const [items, setItems] = useState(["item1", "item2"]);

  const add = () => setItems([...items, 'item${items.length + 1']);

  return(
    <div>
      <ItemList items={items}></ItemList>
      <button> onClick={add}More!</button>
    </div>
  )
}
/*
export  function App() {
  const [items, setItems] = useState([1, 2]);

  const add = () => {
    setItems([...items, items.length + 1]);
  }
  
  const remove = () => {
    if (items.length > 0) {
      setItems(items.slice(0,-1));
    }
  }

  return (
    <div classname = "index">
      <div>
        <h1>My first website gang</h1>
        <h2>Yuh</h2>
        <h3>We gonna web this site</h3>

        <p id="intro">
          <u>In the beginning</u> was the word, and the word was <em>with God</em>, and the word{' '}
          <strong>was God</strong>.
        </p>

        <p>And uhh... I forgot the rest</p>
      </div>

      <ul>
        {items.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button onClick={add}>More!</button>
      <button onClick={remove}>Less!</button>


      <div className="myBox1">
        <h4>My grocery list:</h4>
        <ul>
          <li><strong>White monster</strong></li>
          <li><em>beans</em></li>
          <li><u>chicken stock</u></li>
        </ul>
      </div>

      <p>
        This line has <strong>BOLD</strong>, <em>italicized</em>, AND <u>underlined</u>, text
      </p>

      <ul>
        <li>numbah 1</li>
        <li>numbah 2</li>
      </ul>

      <ol>
        <li>numbah 3</li>
        <li>numbah 4</li>
      </ol>

      <p>Things I plan on doing this week:</p>

      <ol>
        <li>Do engineering homework</li>
        <li>Stay for club meetings</li>
        <li>Apply for engineering internships</li>
        <li>Do engineering homework</li>
        <li>Go to church</li>
      </ol>
    </div>
  )
}
*/

export default App;
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/