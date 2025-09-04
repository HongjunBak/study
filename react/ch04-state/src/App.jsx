/*
리액트의 저장 공간은 props와 state
- state는 component 내부에서 데이터를 사용할 때 필요한 저장 공간이다. state가 저장하고 있는 데이터가 변경되면 render()를 호출한다.
*/

import { useState } from 'react';
import './App.css'

function Header(props) {
  return (
    <>
      <h2><a href="/" onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h2>
    </>
  );
}

function Article(props) {
  return (
    <>
      <h3>{ props.title }</h3>
      <p>{ props.body }</p>
    </>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="WELCOME WEB" body="Hello, WEB" />
  } else if (mode === "READ") {
    content = <Article title="WELCOME REACT" body="Hello, REACT" />
  }
  return (
    <>
      <Header title="WEB" onChangeMode={() => {
        setMode('READ');
      }} />
      { content }
    </>
  )
}

export default App
