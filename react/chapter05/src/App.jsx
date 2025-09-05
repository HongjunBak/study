import './App.css'
import { useState } from 'react'

const Left1 = (props) => {return (<div><h2>Left1 Component</h2><Left2 number={props.number} /></div>)}
const Left2 = (props) => {return (<div><h2>Left2 Component</h2><Left3 number={props.number} /></div>)}
const Left3 = (props) => {return (<div><h2>Left3 Component</h2><p>number 스테이트 값 : {props.number}</p></div>)}

function App() {
  const [number, setNumber] = useState(1);

  return (
      <div id="container">
        <div id="grid">
          <Left1 number={number} />
          <Right1 changeState={()=>{setNumber(number+1)}} />
        </div>
      </div>
  )
}

const Right1 = (props) => {return (<div><h2>Right 1 Component</h2><Right2 changeState={()=>{props.changeState();}} /></div>)}

const Right2 = (props) => {return (<div><h2>Right 2 Component</h2><Right3 changeState={()=>{props.changeState();}} /></div>)}

const Right3 = (props) => {return (<div><h2>Right 3 Component</h2><button type="button" onClick={()=>{props.changeState();}}> + </button></div>)}

export default App
