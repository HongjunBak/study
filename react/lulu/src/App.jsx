/* eslint-disable */
// 코드 경고 없애기

import { useState } from 'react'
import './App.css'

const Modal = (props) =>{
  return (
      <div className="modal" style={ {background: props.color} }>
        <h4>{props.title[props.activeNum]}</h4>
        <p>날짜 {props.wriDate[props.activeNum]}</p>
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
  const [입력값, 입력값변경] = useState('');
  const [wriDate, setWriDate] = useState(['2025-05-01', '2025-06-02', '2025-06-03']);
  

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

                  let newDate = [...wriDate];
                  newDate.splice(i, 1);
                  setWriDate(newDate);
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
        if(입력값.length<1){alert('글제목 입력해주세요');}
        else{
        let newTitle = [...title];
        newTitle.unshift(입력값);
        setTitle(newTitle);



        let tempDate = new Date();
        let formatted = tempDate.toISOString().split('T')[0];


        let newDate = [...wriDate];
        newDate.unshift(formatted);

        setWriDate(newDate);
        }
        
        /*
        let newTitle = [];
        newTitle.push(입력값);
        title.map(function(t_title){
          newTitle.push(t_title);
        })
        setTitle([...newTitle]);
        */

      }}>글추가</button>

      { modal ? <Modal color='orange' title={title} setTitle={setTitle} activeNum={activeNum} wriDate={wriDate} /> : null }
      
    </>
  )
}

export default App