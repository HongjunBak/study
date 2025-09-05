/* eslint-disable */
// 코드 경고 없애기

/*
응용1. 글에 아무것도 입력안하고 발행버튼 누르는거 막으려면? 
유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됩니다. 

응용2. 글을 하나 추가하면 따봉갯수 개별적용하던 것도 이상해질 수 있습니다.
어떻게 해결하면 될까요? 
아마 글이 하나 추가되면 따봉기록할 곳도 하나 더 만들어줘야할듯요.

응용3. 날짜데이터는?
state에 글만 저장되어있는데 날짜같은 것도 저장해두고 보여주는 식으로 하면 재밌을 것 같군요. 
자바스크립트로 현재 날짜같은 것도 출력해볼 수 있어서 글 발행시 그런 기능을 더해줄 수도 있겠네요.  
*/

import { useState } from 'react'
import './App.css'

const Modal = (props) =>{
  return (
      <div className="modal" style={ {background: props.color} }>
        <h4>{props.title[props.activeNum]}</h4>
        <p>날짜 {props.date}</p>
        <p>상세내용 {props.text}</p>
        <button class="coat" type="button" onClick={()=>{
          const wonbon = [...props.title];
          wonbon[props.activeNum] = '여자 코트 추천';
          props.setTitle(wonbon);
        }}>글수정</button>
      </div>
  );
};

function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  const [like, setLike] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const[activeNum, setActiveNum] = useState(null);
  let [입력값, 입력값변경] = useState('');
  

  return (
    <>
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div>
        
        <button type="button" onClick={()=>{
          const sorted = [...title.sort()];
          setTitle(sorted);
        }}>가나다순정렬</button>
      </div>
      

      {
        title.map(function(arrdata, i){
          return (
            <div className="list" key={i}>
              <h4>{ arrdata }
                <span onClick={()=>{
                  const like_copy = [...like];
                  like_copy[i] = like[i] + 1;
                  setLike(like_copy)
                }}>❤️ {like[i]}개</span> 
                <span onClick={(e)=>{
                  e.stopPropagation // 상위 html로 증식하는 이벤트 버블링 차단
                  setActiveNum(i);
                  setModal(!modal);
                  }}> modal</span>
                <span onClick={()=>{
                  let newTitle = [...title];
                  newTitle.splice(i, 1);
                  setTitle(newTitle);
                  // let newTitle = [];
                  // title.map(function(t_title, j) {
                  //   if(j !== i) { newTitle.push(t_title); }
                  // })
                  // setTitle([...newTitle]);
                }}>DELETE</span>
                
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      <input onInput={(e)=>{
        입력값변경(e.target.value); // state 같은 경우엔 비동기처리라서 늦게 처리됨. 느려서 그냥 밑의 코드부터 실행하게 만듦.
        console.log(입력값);
      }} />
      <button type="button" onClick={()=>{
        let newTitle = [...title];
        newTitle.unshift(입력값);
        setTitle(newTitle);
        
        /*
        let newTitle = [];
        newTitle.push(입력값);
        title.map(function(t_title){
          newTitle.push(t_title);
        })
        setTitle([...newTitle]);
        */

      }}>글추가</button>

      { modal ? <Modal color='orange' title={title} setTitle={setTitle} activeNum={activeNum} /> : null }
      
    </>
  )
}

export default App