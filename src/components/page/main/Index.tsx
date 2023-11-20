import { useState, useRef } from "react"

import { v4 as uuidv4 } from "uuid";

type 프롭스타입 = {
    아이디: string,
    메세지 : string,
    방향: string,
    활성화 : boolean,
}

function Main() {
    const box = useRef<HTMLInputElement>(null);
    const [메세지카드, 메세지카드설정] = useState<프롭스타입[]>([
        {
            아이디: uuidv4(),
            메세지 : '환경합니다.',
            방향 : '왼쪽',
            활성화 : true,
        },
        {
            아이디: uuidv4(),
            메세지 : '환경합니다2.',
            방향 : '오른쪽',
            활성화 : true,
        }
    ]);
    const 더미메세지추가 = () =>{
        const 새로운메세지 = {
            아이디 : uuidv4(),
            메세지 : Math.random() * 10 + '',
            방향 : '오른쪽',
            활성화: false,
        };

        메세지카드설정(
            (이전값)=>{
                return [새로운메세지, ...이전값]
            }
        );
        setTimeout(() => {
            if (box.current) box.current.scrollTop = box.current.offsetHeight + 9999;
            메세지카드설정(
                (이전값)=>{
                    const 업데이트값 = 이전값.map((아이템, 인덱스)=>{
                        if(인덱스 === 0){
                            return {...아이템, 활성화: true};
                        }else{
                            return 아이템
                        }
                    })
                    return [...업데이트값]
                }
            );
        }, 1);
    }
    
    return (
        <>
            <button onClick={더미메세지추가}>채팅추가</button>
            <div className="chat-wrap" ref={box}>
            {
                메세지카드?.map((아이템) => 
                    <div key={아이템.아이디} className={아이템.활성화 === true ? "active" : ""}>{아이템.메세지 + 아이템.활성화}</div>
                )
            }
            </div>
        </>
    )
  }
  
  export default Main
  