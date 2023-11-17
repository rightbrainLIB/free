import React, { useState, useMemo, useCallback } from "react";

interface 자식타입  {
    이름: string;
    나이: number;
    멘트 : {
        첫글자: string;
        두번째글자: string;
    }
    함수 : () => void;
}

const 난컴포넌트업데이트시만다시랜더링해 = React.memo(function 자식(프롭스:자식타입){
    console.log('자식 랜더링');
    return (
        <>
            
            <div>이름 : {프롭스.이름}</div>
            <div>나이 : {프롭스.나이}</div>
            <div>멘트 : {프롭스.멘트.첫글자.toString() + 프롭스.멘트.두번째글자.toString() }</div>
            <button onClick={프롭스.함수}>함수호출</button>
        </>
    )
});


function reactMemo() {
    console.log('부모랜더링');
    const [부모나이, 부모나이업데이트] = useState(10);
    const [자식나이, 자식나이업데이트] = useState(59);
    const 부모나이먹기 = () =>{
        부모나이업데이트(부모나이+1)
    }
    const 자식나이먹기 = () =>{
        자식나이업데이트(자식나이+1)
    }

    // 오브젝트에는 원시타입이 아니라 매번 메모리 주소가 변화한다. 이걸 React.memo에 프롭던지려면 useMemo를 통해 최적화 시키자
    const 오브젝트 = useMemo(()=>{
        return { 
            첫글자 : '응',
            두번째글자 : '애에요.!'
        }
    }, [])
    // 함수도 원시타입이 아니라 매번 메모리 주소가 변화한다. 이걸 React.memo에 프롭던지려면 useCallback을 통해 최적화 시키자
    const 프롭으로던질함수 = useCallback(() =>{
        console.log('난 보수야~')
    }, []);
    
    
    return (
        <>
            <h1>React.memo는 최적화된 컴포넌트를 반환한다.</h1>
            <div>부모나이 : {부모나이}</div>
            <button onClick={부모나이먹기}>부모나이 업업업</button>
            <button onClick={자식나이먹기}>자식나이 업업업</button>
            <hr />
            <난컴포넌트업데이트시만다시랜더링해 이름={"김흥국"} 나이={자식나이} 멘트={오브젝트} 함수={프롭으로던질함수} />
        </>
    )
  }
  
  export default reactMemo;
  