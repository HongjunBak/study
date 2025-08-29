/* 
  props
  - React에서 속성은 prop
  - props는 상위(App) Component에서 하위(Header, Nav, Article) Component로 data(속성="속성값") 또는 함수(이벤트속성=>{()=>{}}를 전달할 때 사용한다.
  - <Article title="Welocme" onChangemode={()=>{ alert('Article');}} />


  - function Article(props) {
    return (
      <>
        props.title
      </>
    );
  }
*/

// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
