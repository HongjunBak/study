import { useReducer } from 'react';

const App= ()=>{
  const numReducer = (oldNum, newNum) => { return newNum; }
  const [num, numDispatch] = useReducer(numReducer, 0);

  const countReducer = (oldCount, action) => {
  if (action === 'down') {
    return oldCount - num;
  } else if (action === 'reset') {
    return 0;
  } else if (action === 'up') {
    return oldCount + num;
  }
}
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={()=>{countDispatch('down')}}>-</button>
          <button type="button" onClick={()=>{countDispatch('reset')}}>0</button>
          <button type="button" onClick={()=>{countDispatch('up')}}>+</button>
        </li>
        <li><input type="number" onChange={(e)=>{ numDispatch(Number(e.target.value)) }} /></li>
        <li>{count}</li>
      </ul>
    </>
  )
}

export default App