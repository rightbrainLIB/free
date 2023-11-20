import Module1 from "@components/page/main/Module1"
import Module2 from "@components/page/main/Module2"
import { useEffect, useState, useRef } from "react"



type 프롭스타입 = {
    아이디: number,
    메세지 : string,
    방향: string,
    활성화 : boolean,
}


function Main() {
    const box = useRef<HTMLInputElement>(null);
    const [메세지카드, 메세지카드설정] = useState([
        {
            아이디: 1,
            메세지 : '환경합니다.',
            방향 : '왼쪽',
            활성화 : true,
        },
        {
            아이디: 2,
            메세지 : '환경합니다2.',
            방향 : '오른쪽',
            활성화 : true,
        }
    ]);
    const 더미메세지추가 = () =>{
        const 새로운메세지 = {
            아이디 : 메세지카드.length + 1,
            메세지 : Math.random() * 10 + '',
            방향 : '오른쪽',
            활성화: false,
        };

        메세지카드설정(
            (이전값)=>{return [ ...이전값, 새로운메세지]}
        );

        // setstate 콜백을 찾아내자
        if(box.current){
            box.current.scrollTop = box.current.scrollHeight;
        }
    }
    // useEffect(()=>{
    //     메세지카드설정(
    //         메세지카드.map(아이템 => {
    //             return (아이템.활성화) ? 아이템 : {...아이템, 활성화 : true}
    //         })
    //     )
    // },[메세지카드])
    
    return (
        <>
            <button onClick={더미메세지추가}>채팅추가</button>
            <div className="chat-wrap">
                <section ref={box}>
                {
                    메세지카드?.map((아이템, 인덱스) => 
                        <div key={인덱스} className={아이템.활성화 === true ? "active" : ""}>{아이템.메세지 + 아이템.활성화}</div>
                    )
                }
                </section>
            </div>
            {/* <Module1 />
            <Module2 /> */}
        </>
    )
  }
  
  export default Main
  