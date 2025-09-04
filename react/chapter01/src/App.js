import './App.css';
import {useState} from 'react'; // state에 값을 설정하기 위해 useState를 import한다.

function Header(props) { // Header 컴포넌트 정의
  // props 매개변수에는 title 속성과 값, onChangeMode 속성과 값이 객체 {} 로 전달된다.
  // return (); 에서 () 내부에서는 JSX(JavaScript XML) 문법을 따른다. JSX 문법에서 변수의 값을 출력하고자 할 때 표현식 {}을 사용해야 한다.
  // { } 내부의 코드는 자바스크립트 문법을 따른다.
  return (
    <div>
      <header>
         {/* 리액트는 이벤트 속성명으로 카멜 표기법을 사용한다. ex)onClick, ohChange 등. js는 스네이크 표기법
          이벤트 속성값으로 익명함수(바로 실행 함수)를 사용한다. */}
        
        {/* event 변수에는 이벤트 객체가 자동 저장된다. */}
        <h1><a href="/" onClick={(event)=> {
          event.preventDefault(); // 하이퍼링크 기능 제거
          props.onChangeMode(); //
        }}>{props.title}</a></h1>
      </header>
    </div>
);
}
function Nav(props) {
  const menu = [];
  for (let i=0; i<props.topics.length; i++) {
    let topic = props.topics[i];
    menu.push(<li key={topic.id} className="list-group-item list-group-item-action list-group-item-warning"><a id={topic.id} href={"/read/" + topic.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id)); // topic.id가 a 태그의 id값으로 들어가게 되기 때문에 문자형이 돼버려서 그런듯
    }}>{topic.title}</a></li>);
  }
  return (
    <div>
      <nav>
        <ul className="list-group">
          {menu}
        </ul>
      </nav>
    </div>
  );
}
function Article(props) {
  return (
    <div>
      <article className="alert alert-warning">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </article>
    </div>
  );
}

function Create(props) {
  return (
    <>
      <article class="alert alert-info">
        <h3>Create</h3>
        <form onSubmit={(event)=>{
          event.preventDefault(); // 서버단으로 입력한 값을 전달 못하게 막는다.
          const title = event.target.title.value; // title 입력폼에 입력된 값을 얻어 title 상수에 저장한다.
          // event.target은 form 요소이다. 자바스크립트는 요소를 이름(중복 X)으로 선택한다.
          const body=event.target.body.value; // 자바스크립트에서 입력폼을 선택할 때 주로 name 속성값을 사용한다.
    
          props.onCreate(title, body); // Create 컴포넌트에서 App 컴포넌트로 사용자가 입력폼에 입력한 값을 전달한다.
        }}>
          <input type="text" name="title" placeholder="제목 입력" className="form-control" />
          <textarea name="body" placeholder="본문 내용 입력" className="form-control text" />
          <button className="btn btn-dark reg" type='submit'>Register</button>
          { /* submit 버튼을 클릭하면 form 요소에 이벤트가 발생되어 onSubmit 속성의 화살표 함수가 실행된다.
          form 요소의 onSubmit 속성에서 onCreate 속성을 호출하면서 title 값과 body 값을 전달한다. */ }

        </form>
      </article>
    </>
  );
}

const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <>
      <article class="alert alert-success">
        <h3>Update</h3>
        <form onSubmit={(event)=>{
          event.preventDefault();
          const title = event.target.title.value;
          const body=event.target.body.value;
    
          props.onUpdate(title, body);
        }}>
          <input type="text" name="title" value = {title}  className="form-control" onChange={(event)=>{setTitle(event.target.value)}} />
          <textarea name="body" value = {body} className="form-control text" onChange={(event)=>{setBody(event.target.value)}} />
          <button className="btn btn-dark reg" type='submit'>Register</button>

        </form>
      </article>
    </>
  );
}




function App() { // 리액트 프로젝트 시작 컴포넌트

  const [topics, setTopics] = useState([
    {id: 1, title: 'HTML5', body: 'HTML5 is... Structure'},
    {id: 2, title: 'CSS', body: 'CSS3 is... Stylesheet'},
    {id: 3, title: 'JAVASCRIPT', body: 'JavaScript is Effect'}
  ])
  const [nextId, setNextId] = useState(4);

  // const mode = 'WELCOME';
  const [mode, setMode] = useState('WELCOME');
  // mode state에 초기값을 useState()를 사용하여 'WELCOME'으로 설정한다.
  // mode state 값을 변경할 때는 setMode()를 사용한다.
  // state 값이 변경되면 render()가 재실행된다.

  const [id, setId] = useState(null); // id state의 value는 Nav Component의 메뉴 id (topics 배열의 id) 값이다.

  let content = null, title = null, body = null, updateBtn = null, deleteBtn = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />
  } else if (mode === 'READ') {
     for (let i=0; i<topics.length; i++){
      if(topics[i].id===id) {
        title=topics[i].title;
        body = topics[i].body;
      }
     }

     content = <Article title={title} body={body}  />
     updateBtn = <a href={'/update/' + id} className="btn btn-primary up-btn" onClick={(event)=>{
      event.preventDefault();
      setMode('UPDATE');
     }}>UPDATE</a>

     deleteBtn = <button type="button" className="btn btn-danger up-btn" onClick={()=>{
      const newTopics = []
      for (let i=0; i<topics.length; i++) {
        if (topics[i].id !== id){
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
     }}>DELETE</button>

  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = ({ id: nextId, title: _title, body: _body});
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setNextId(nextId + 1);
      
    }} />} else if (mode === 'UPDATE') {
      for (let i=0; i<topics.length; i++) {
        if (topics[i].id === id) {
          title = topics[i].title;
          body = topics[i].body;
        }
      }
    
      content = <Update title={title} body={body} onUpdate={(_title, _body)=>{

      const updateTopic = ({ id: id,  title: _title, body: _body});
      const newTopics = [...topics];
     
      for (let i=0; i<topics.length; i++){
      if(topics[i].id===id) {
        newTopics[i] = updateTopic;
        break;
      }
    }
    setTopics(newTopics);
    setMode('READ');
  }} />
    // Create 컴포넌트에서 입력폼과 textarea에 값을 입력하고 서브밋 버튼을 누르면 title 변수와 body 변수에 입력한 값이 전달된다.
  }


  return (
    <div className="alert alert-primary wrap">
      <Header title="React CRUD Project" onChangeMode={()=> { setMode('WELCOME'); }} /> {/* 컴포넌트 사용 */}

      <Nav topics={topics} onChangeMode={(menu_id)=>{
        setMode('READ');
        setId(menu_id);
        }} />
      {/* <Article title="Welcome" body="Hello, Web" /> */}
      { content }

      <a href="/create" className="btn btn-dark" onClick={(event)=>{
        event.preventDefault();
        setMode('CREATE')
        }}>CREATE</a>
        {updateBtn}
        {deleteBtn}
      
    </div>
  );
}

export default App;
// 웹 브라우저로 App 컴포넌트를 출력한다.