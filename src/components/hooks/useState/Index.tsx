import {useState} from 'react';

const 리랜더링영향없게하자 = () => {
    console.log('나는 최초호출시만 불려 무거운건 여기로')
    console.log('대신 useState 값은 콜백 형태로 해야되')
    return ['개똥이', '말똥이']
}


function UseState() {
    
    const [count, setCount] = useState(0);
    const handlePlus = () => {
        setCount(count + 1);
    }
    const handleMinus = () => {
        setCount(count -1);
    }

    const [names, setNames] = useState(()=>{ return 리랜더링영향없게하자()})
    const [input, setInput] = useState("");

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleAppend = () =>{
        setNames((이전스테이트) => { // 이름은 아무거나 
            return [...이전스테이트, input];
        })
        setInput("");
    }
    return (
        <>
            {/* 예제1 */}
            <h2>숫자가 증감</h2>
            <div>
                <span>Count : {count}</span>{" "}
                <button onClick={handlePlus}>+</button>
                <button onClick={handleMinus}>-</button>
            </div>
            <hr />
            {/* 예제2 */}
            <h2>입력한 이름을 배열에 추가</h2>
            <div>
                <input type="text" value={input} onChange={handleChange} />
                <button onClick={handleAppend}>추가</button>
                <ul>
                {
                    names.map((name,index) =>{
                        return <li key={index}>{name}</li>
                    })
                }
                </ul>
            </div>
            
        </>
    )
  }
  
  export default UseState
  