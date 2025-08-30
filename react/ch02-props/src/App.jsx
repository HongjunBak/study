/* 
  props
  - React에서 속성은 prop
  - props는 상위(App) Component에서 하위(Header, Nav, Article) Component로 data(속성="속성값") 또는 함수(이벤트속성=>{()=>{}}를 전달할 때 사용한다.
  - <Article title="Welocme" onChangemode={()=>{ alert('Article');}} />


  - function Article(props) {
    return (
      <>
      </>
    );
  }
*/

// import { useState } from 'react'

import './App.css';

function Header(props){
  return(
    <header>
      <h1><a href='/'>{props.title}</a></h1>
      <p>{props.text}</p>
    </header>
  );
}

function Nav() {
  return(
    <nav>
      <ul>
        <li><a href='read/1'>HTML5</a></li>
        <li><a href='read/2'>CSS3</a></li>
        <li><a href='read/3'>JAVSSCRIPT</a></li>
      </ul>
    </nav>
  );
}

function Article() {
  return(
    <article>
      <h3>Welcome</h3>
      <p>Hello, React!</p>
    </article>
  );
}


import './App.css'

function App() {

  return (
    <>
       <Header title="jQuery" text="lulu" />
      <Nav />
      <Article />
    </>
  )
}

export default App
