import React, { useEffect, useState } from "react";

const hardCalculate = (number:number) => {
    console.log('function 외부에있는 계산기 : hard');
    // for (let i=0; i < 9999999; i++){} // 1000만번 for loop delay
    return number + 10000;
}
const easyCalculate = (number:number) => {
    console.log('function 외부에있는 계산기 : easy');
    return number + 1;
}


function useMemo() {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    // 컴포넌트 리랜더링시 아래 2코드는 계속 돌아가게된다.
    // const hardSum = hardCalculate(hardNumber);
    // const easySum = easyCalculate(easyNumber);

    const hardSum = React.useMemo(()=>{
        return hardCalculate(hardNumber);
    },[hardNumber]);

    const easySum = React.useMemo(()=>{
        return easyCalculate(easyNumber);
    },[easyNumber]);
    

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = React.useMemo(()=>{
        return {
            country : isKorea ? "한국" : "외국"
        }
    },[isKorea])
    
    // { 
    //     country : isKorea ? "한국" : "외국"
    // }

    useEffect(()=>{
        console.log('[location] useEffect 호출!')
    }, [location])
    return (
        <>
            <h1>useMemo 값을 재활용한다. 메모리에 상주하기에 남발하면 안됨</h1>
            <h2>어려운 계산기</h2>
            <input type="number" value={hardNumber} step="1000" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setHardNumber(Number(e.target.value))}} />
            <span>+ 10000 = {hardSum}</span>
            <h2>쉬운 계산기</h2>
            <input type="number" value={easyNumber} step="1000" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEasyNumber(Number(e.target.value))}} />
            <span>+ 1 {easySum}</span>
            <hr />
            <h1>원시타입(String, Number, Boolean, Null, Undefined, BigInt, Symbol) 객체타입(Object, Array ...그외) 의 차이를 이해하자</h1>
            <p>원시타입은 값을 가지고있고, 객체타입은 값이 있는 메모리 주소를 가지고있다.</p>
            <p>number가 바뀌어 리랜더링시 location는 가르키는 메모리 위치가 변경되어 location의존성을 가진 useEffect를 재호출한다 </p>
            <h2>하루여 몇끼 먹어요?</h2>
            <input type="number" value={number} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNumber(Number(e.target.value))}}/>
            <h2>어느 나라에 있어요?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={()=>{setIsKorea(!isKorea)}}>비행기 타자앙</button>
        </>
    )
  }
  
  export default useMemo;
  