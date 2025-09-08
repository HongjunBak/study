// import './App.css'
// import { useState } from 'react'

// const Left1 = (props) => {return (<div><h2>Left1 Component</h2><Left2 number={props.number} /></div>)}
// const Left2 = (props) => {return (<div><h2>Left2 Component</h2><Left3 number={props.number} /></div>)}
// const Left3 = (props) => {return (<div><h2>Left3 Component</h2><p>number 스테이트 값 : {props.number}</p></div>)}

// function App() {
//   const [number, setNumber] = useState(1);

//   return (
//       <div id="container">
//         <div id="grid">
//           <Left1 number={number} />
//           <Right1 changeState={()=>{setNumber(number+1)}} />
//         </div>
//       </div>
//   )
// }

// const Right1 = (props) => {return (<div><h2>Right 1 Component</h2><Right2 changeState={()=>{props.changeState();}} /></div>)}

// const Right2 = (props) => {return (<div><h2>Right 2 Component</h2><Right3 changeState={()=>{props.changeState();}} /></div>)}

// const Right3 = (props) => {return (<div><h2>Right 3 Component</h2><button type="button" onClick={()=>{props.changeState();}}> + </button></div>)}

import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch, connect } from 'react-redux'

const reducer = (currentState, action) => {
    if (currentState === undefined) {
        return { number: 1};
    }
    const newState = { ... currentState };
    if (action.type === 'PLUS') {
        newState.number++;
    }
    return newState;
}
const store = createStore(reducer);

const Left1 = () => {return (<div><h2>Left1 Component</h2><Left2 /></div>)}
const Left2 = () => {return (<div><h2>Left2 Component</h2><Left3 /></div>)}
const Left3 = () => {
    const number = useSelector((state) => state.number);
    return (<div><h2>Left3 Component</h2><p>number 스테이트 값 : {number}</p></div>)}

function App() {
  return (
      <div id="container">
        <div id="grid">
            <Provider store={store}>
                <Left1 />
                <Right1 />
            </Provider>
        </div>
      </div>
  )
}

const Right1 = () => {return (<div><h2>Right 1 Component</h2><Right2 /></div>)}
const Right2 = () => {return (<div><h2>Right 2 Component</h2><Right3 /></div>)}
const Right3 = () => {
    const dispatch = useDispatch();
    return (<div><h2>Right 3 Component</h2><button type="button" onClick={()=>{dispatch({type: 'PLUS'});}}> + </button></div>)}

export default App