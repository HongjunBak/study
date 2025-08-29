/*
  ※ 이벤트 (Event)
  - 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 때 사용한다.
  - 이벤트 속성명은 카멜 표기법을 사용한다.
  - 이벤트 속성값은 익명(무명, 콜백, 바로실행, 화살표) 함수이다.

*/

// import { useState } from 'react'
import './App.css'

function Header(props) {
  return (
    <>
      <header>
        <h1><a href='/' onClick={e=>{
          e.preventDefault();
          props.onChangeMode('리액트의 세상에');
        }}>{ props.title} </a></h1>
      </header>
    </>
  );
}
function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><a href='/read/1' onClick={(e)=>{
            e.preventDefault();
          }}>HTML5</a></li>
          <li><a href='/read/2' onClick={(e)=>{
            e.preventDefault();
          }} >CSS3</a></li>
          <li><a href='/read/3' onClick={(e)=>{
            e.preventDefault();
          }}>JavaScript</a></li>
        </ul>
      </nav>
    </>
  )
}

function Article(props) {
  return(
    <>
      <article>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </article>
    </>
  );
}

function App() {
  // const [mode, setMode] = useState('WRITE');
  // let content = null;
  //   if (mode === 'READ') {
  //   content = <p>입니다</p>

  

  return (
    <>
      <Header title="React" onChangeMode={(msg)=> {alert(msg);}} />
      <Nav />
      <Article title="hEllo" body="REeeeeeeeeeeeact" />
      {/* {content} */}
    </>
  )
}

export default App