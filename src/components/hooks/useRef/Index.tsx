import { useState, useRef, useEffect } from "react"


function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    

    let countVar = 0;
    const handleCountUp = () =>{
        setCount(count+1);
        console.log('useState : ' + countRef.current)
    }
    const handleCountUp2 = () =>{
        countRef.current = countRef.current +1;
        console.log('useRef : ' + countRef.current)
    }
    const handleCountUp3 = () =>{
        countVar = countVar+1;
        console.log(countVar)
        console.log('변수는 리랜더링시 초기화된다.')
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(()=>{
        // inputRef.current?.focus();
        console.log(inputRef);
    })
    const handleFocus = () =>{
        inputRef.current?.focus();
    }
    
    console.log('랜더링')
    return(
        <>
            <h1>useRef는 업데이트시 랜더링을 발생시키지 않는다.. 랜더링이 다시 되더라도 값은 유지된다.</h1>
            <div>useState : {count} </div>
            <div>useRef : {countRef.current} </div>
            <div>useRef : {countVar} </div>
            <button onClick={handleCountUp}>useState 증가</button>
            <button onClick={handleCountUp2}>useRef 증가</button>
            <button onClick={handleCountUp3}>let 증가</button>
            <hr />
            <h1>useRef를 통해서 Dom요소에 접근 접근은 .current</h1>
            <input type="text" placeholder="버튼 누르면 포커스 On!" ref={inputRef} /><button onClick={handleFocus}>포커스 On</button>
        </>
    )
}
export default UseRef