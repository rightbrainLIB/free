import { useState, useRef, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import Card from "@components/page/main/Card";
import Card2 from "@components/page/main/Card2";
type 프롭스타입 = {
    아이디 : string,
    인덱스 : number,
    카드 : JSX.Element,
    활성화 : boolean,
    화면노출 : boolean,
    다음인덱스 : number, // 다음활성화 시킬 인덱스 넘버
    콜백? : () => void,
}

function Main() {
    const box = useRef<HTMLInputElement>(null);
    const btn = useRef<HTMLButtonElement>(null);
    const [활성화인덱스, 활성화인덱스설정] = useState<number>(0);
    const [컴포넌트카트, 컴포넌트카드설정] = useState<프롭스타입[]>([
        {
            아이디 : uuidv4(),
            인덱스 : 0,
            카드 : <Card 방향={"왼쪽"} 메세지={"1안녕하세요, 김국민님! 저는 환전을 함께 할 은행원 아거입니다. 저와 함게 쉽게 편하게 환전하세요!"} />,
            활성화 : false,
            화면노출 : false,
            다음인덱스 : 1,
        },
        {
            아이디 : uuidv4(),
            인덱스 : 1,
            카드 : <Card 방향={"왼쪽"} 메세지={"2안녕하세요, 김국민님! 저는 환전을 함께 할 은행원 아거입니다. 저와 함게 쉽게 편하게 환전하세요!"} />,
            활성화 : false,
            화면노출 : false,
            다음인덱스 : 2,
            콜백: () =>{
                setTimeout(() => {
                    btn.current?.click();    
                }, 500);
            }
        },
        {
            아이디 : uuidv4(),
            인덱스 : 2,
            카드 : <Card2 메세지={"3환전하실 통화를 선택해 주세요111"} 활성화인덱스설정={활성화인덱스설정} />,
            활성화 : false,
            화면노출 : false,
            다음인덱스 : 3,
            
            
        },
        {
            아이디 : uuidv4(),
            인덱스 : 3,
            카드 : <Card 방향={"왼쪽"} 메세지={"4안녕하세요, 김국민님! 저는 환전을 함께 할 은행원 아거입니다. 저와 함게 쉽게 편하게 환전하세요!"} />,
            활성화 : false,
            화면노출 : false,
            다음인덱스 : 4,
            
        },
        {
            아이디 : uuidv4(),
            인덱스 : 4,
            카드 : <Card2 메세지={"5환전하실 통화를 선택해 주세요222."} />,
            활성화 : false,
            화면노출 : false,
            다음인덱스 : 5,
        },
    ]);   
    
    const 더미메세지추가 = () => {
        컴포넌트카드설정((이전값)=>{
            const 업데이트값 = 이전값.map((아이템, 인덱스)=>{
                if(인덱스 === 활성화인덱스){
                    활성화인덱스설정(아이템.다음인덱스);
                    return {...아이템, 활성화: true};
                }else{
                    return 아이템
                }
            })
            return [...업데이트값]
        })
        setTimeout(() => {
            if (box.current) box.current.scrollTop = box.current.offsetHeight + 9999;
            컴포넌트카드설정(
                (이전값)=>{
                    const 업데이트값 = 이전값.map((아이템, 인덱스)=>{
                        if(인덱스 === 활성화인덱스){
                            return {...아이템, 화면노출: true};
                        }else{
                            return 아이템
                        }
                    })
                    return [...업데이트값]
                }
            );
        }, 10);
    }
    useEffect(()=>{
        컴포넌트카트[활성화인덱스]?.콜백?.();
    },[활성화인덱스])
    
    return (
        <>
            <button onClick={더미메세지추가} ref={btn}>채팅추가</button>
            <div className="chat-wrap" ref={box}>
            {
                컴포넌트카트?.slice(0).reverse().map((아이템) =>
                    아이템.활성화 && <div key={아이템.아이디} className={아이템.화면노출 === true ? "active" : ""}>{아이템.카드}</div>
                )
            }
            </div>
        </>
    )
  }
  
  export default Main
  