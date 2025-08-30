/*
  ※ Component
  - 재사용이 가능한 UI 요소이다.
  - App Component는 Header, Nav, Article로 화면을 구성.
  - 컴포넌트 정의 문법
      function(매개변수) {
        <>

        </>
      }
  - 컴포넌트 호출 문법
    <컴포넌트명 />
*/

import './App.css';

function Header(){
  return(
    <header>
      <h1><a href='/'>REACT</a></h1>
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

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Article />
    </>
  );
}

export default App; // Web Browser로 App Component를 export한다.
