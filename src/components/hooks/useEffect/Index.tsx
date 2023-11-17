import {useState, useEffect} from 'react';


function Timer(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('타이머~ 짹깍')
        }, 500);
        return () =>{
            console.log('unmount');
            clearInterval(timer)
        }
    }, [])

    return(
        <>
            타이머지롱
        </>
    )
}


function UseEffect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const [timer, setTimer] = useState(false);

    const handleUpdateCount = () =>{
        setCount(count+1);
    }
    // const handleKeyup = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
    const handleKeyup: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setName(e.target.value)
    }

    const handleTimer = () =>{
        setTimer(!timer);
    }


    // 랜더링시마다 실행
    useEffect(()=>{
        console.log('rendering'); // React.StrictMode으로 감싸면 체크용도로 2번씩 찍힘
    })

    // 마운트시만 실행
    useEffect(()=>{
        console.log('mount'); 
    },[])

    // 의존성 배열 업데이트시만 실행
    useEffect(()=>{
        console.log('count 변경되었습니다.'); 
    },[count])


    // 의존성 배열 업데이트시만 실행
    useEffect(()=>{
        console.log('name에 변경되었습니다.');
    },[name])


    
    return (
        <>
            <h2>예제1 : 의존성 배열시 업데이트시만 동작하는 useEffect</h2>
            <div>{count}<button onClick={handleUpdateCount}>count 추가</button></div>
            <div><span style={{color:'red'}}>React.ChangeEvent&lt;HTMLInputElement&gt;</span> 함수에 전달된 이벤트 타입만 사용할때 type </div>
            <div><span style={{color:'red'}}>React.ChangeEventHandler&lt;HTMLInputElement&gt;</span> 전체 함수를 사용할때 type</div>
            <div><input type="text" value={name} onChange={handleKeyup} /></div>
            <div>{name}</div>
            <hr />
            <h2>예제2 : clean up 함수를 알기위한 타이머</h2>
            <div><button onClick={handleTimer}>토클 타이머</button></div>
            {timer && <Timer></Timer>}
        </>
    )
  }
  
  export default UseEffect
  