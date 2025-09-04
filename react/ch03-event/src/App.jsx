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
function Nav(props) {
  const menu = [];
  for (let i=0; i<props.topics.length; i++) {
    let topic = props.topics[i];
    menu.push(
    <li key={topic.id}><a id={topic.id} href={'/read/' + topic.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeId(e.target.id)
    }}>{topic.title}</a></li>)
  }
  return (
    <>
      <nav>
        <ul>
          {menu}
        </ul>
      </nav>
    </>
  )
}


function App() {
  
    

  const topics = [
    { id: 1, title: 'HTML5', body: 'aaaaaaaaaaaaaaaaaaa' },
    { id: 2, title: 'CSS3', body: 'bbbbbbbbbbbbbbbbbbbb' },
    { id: 3, title: 'JavaScript', body: 'ccccccccccccccc' }
  ];


  

  return (
    <>
      <Header title="React" onChangeMode={(msg)=> {alert(msg);}} />
      <Nav topics = {topics} onChangeId={(id)=>{alert(id)}} />
    </>
  )
}

export default App