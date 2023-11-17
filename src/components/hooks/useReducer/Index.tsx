import React, { useState } from 'react';


// reducer - state를 업데이트 함
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const 액션타입 = {
    예금: "예금",
    출금: "출금",
}

type 액션형태 = {
    type: string,
    payload: number,
}

const reducer = (state:number, action:액션형태) => {
    switch (action.type){
        case 액션타입.예금:
            return  state + action.payload;
        case 액션타입.출금:
            return  state - action.payload;
        default:
            return state;

    }
}

type 스테이트형태 = {
    학생수: number;
    학생목록: {
        아이디: number;
        이름: string;
        출석여부: boolean;
    }[];
}

type 액션형태2 = {
    type: string,
    payload: {이름 : string, 아이디?: number},
}


const 리듀서 = (state:스테이트형태, action:액션형태2) =>{

    console.log(action.type);

    switch (action.type){
        case '추가':
            const 이름 = action.payload.이름
            const 새로운학생 = {
                아이디 : Date.now(),
                이름,
                출석여부 : false
            };
            return {
                학생수 : state.학생수 + 1,
                학생목록 : [...state.학생목록, 새로운학생]
            }
        case '삭제':
            return {
                학생수 : state.학생수 - 1,
                학생목록 : state.학생목록.filter(학생 => 학생.아이디 !== action.payload.아이디),
            }
        case '출석토글' :
            
            return {
                학생수 : state.학생수,
                학생목록 : state.학생목록.map(학생 =>{
                    if(학생.아이디 === action.payload.아이디){
                    console.log('여기야', 학생.출석여부);
                        return {...학생, 출석여부: !학생.출석여부}
                    }else{  
                    console.log('어딜가', 학생.출석여부);
                        return 학생;
                    }
                })
            }
        default:
            return state;

    }
}
const 초기값 ={
    학생수: 0,
    학생목록 : [
        // {
        //     아이디 : Date.now(),
        //     이름 : '홍길동',
        //     출석여부 : true
        // },
    ]
}


type 프롭스타입 = {
    아이디: number,
    이름 : string,
    출석여부: boolean
}

function 목록생성기(던저 : {던저 :프롭스타입, 디스패치:React.Dispatch<액션형태2>} ){
    console.log(던저.디스패치);
    return (
        <div style={{border: '1px solid red',margin:10}}>
            <div>아이디 : {던저.던저.아이디}</div>
            <div>이름 : {던저.던저.이름}</div>
            <div>출석여부 : {던저.던저.출석여부.toString()}</div>
            <button onClick={()=>{
                던저.디스패치({type : '출석토글', payload : {이름 : 던저.던저.이름, 아이디 : 던저.던저.아이디} })
            }}>출석토글</button>
            <button onClick={()=>{
                던저.디스패치({type : '삭제', payload : {이름 : 던저.던저.이름, 아이디 : 던저.던저.아이디} })
            }}>삭제</button>
        </div>
    )
}

function useReducer() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = React.useReducer(reducer, 0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setNumber(Number(e.target.value))
    }
    const [이름, 이름설정] = useState("");
    const [학생정보, 디스패치] = React.useReducer(리듀서, 초기값);
    const 입력한다 = (e:React.ChangeEvent<HTMLInputElement>) =>{
        이름설정(e.target.value)
    }
    return(
        <>
            <h1>useReducer : Dispatch, Action, Reducer</h1>
            <div>Dispatch : 요구</div>
            <div>Action : 요구사항</div>
            <div>Reducer : 요구를 받고 처리하는 주체</div>
            <div>Dispatch(Action) ----&gt; Reducer(State, Action) ----&gt; State(update!)</div>
            <h2>은행에 오신것을 환영합니다.</h2>
            <div>잔고: {money}원</div>
            <div>
                <input type="number" value={number} onChange={handleChange} step={1000} />
                <button onClick={()=>{dispatch({type: 액션타입.예금, payload: number});}}>예금</button>
                <button onClick={()=>{dispatch({type: 액션타입.출금, payload: number});}}>출금</button>
            </div>
            <hr />
            <h2>출석부</h2>
            <div>총 학생수 {학생정보.학생수}</div>
            <div><input type="text" placeholder="이름을 넣어라" value={이름} onChange={입력한다}/><button onClick={()=>{
                디스패치({type: '추가', payload: {이름}});
            }}>추가</button></div>
            {
                학생정보.학생목록.map((학생:프롭스타입, 순서:number)=>{
                    return <목록생성기 key={순서} 던저={학생} 디스패치={디스패치} />
                })
            }

            <p style={{color:'red'}}>디스패치를 프롭스로 던지는 과정에서 타입정의에서 막혔다.</p>

        </>
    )
}
export default useReducer;