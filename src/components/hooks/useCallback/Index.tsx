import React, { useEffect, useState } from "react";

type 프롭스타입 = {
    함수 : () => {}, // 반환값(return)이 있는 함수
}
const Box:React.FC<프롭스타입> = (프롭스) => {
    let ttt = 프롭스.함수();
    return (
        <>
            <div style={ttt}></div>
        </>
    )
}
function useCallback() {
    const [number, setNumber] = useState(0);
    const [toggle, setToogle] = useState(true);
    const someFunction = React.useCallback(()=>{
        console.log(`sumeFunc: number : ${number}`)
        return;
    }, [number])
    useEffect(()=>{
        console.log('someFunction이 변경되었습니다.')
    }, [someFunction])
    const [size, setSize] = useState(100);
    const createBoxSyle = () =>{
        return {
            backgroundColor: 'pink',
            width : `${size}px`,
            height : `${size}px`,
        }
    }
    return(
        <>
            <h1>useCallback</h1>
            <p>함수도 객체형이기에 할당될때마다 메모리 위치를 참조하기에 랜더링시마다 매번 update된다.</p>
            <p>useCallback을 사용하면 재사용이 가능하지만 값들이 업데이트 안된다.</p>
            <input type="number" value={number} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNumber(Number(e.target.value))}}/>
            <button onClick={someFunction}>call sumfunc</button>
            <button onClick={()=> setToogle(!toggle)}>{toggle.toString()}</button>
            <hr />
            <input type="number" step="10" value={size} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSize(Number(e.target.value))}}/>
            <Box 함수={createBoxSyle}></Box>
        </>
    )
}

export default useCallback;
