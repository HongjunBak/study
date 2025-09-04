import useState from 'react'




const App= ()=>{
  const [count, setCount] = useState(0);

  return (
    <>
        <button type="button" onClick={()=>{setCount(count-1)}}>-</button>
        <button type="button">0</button>
        <button type="button">+</button>
        <span>{count}</span>
    </>
  )
}

export default App
