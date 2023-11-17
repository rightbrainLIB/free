import { useState } from "react";


function 팝업띄워(메세지: string){
    alert(메세지);
}

function 커스텀훅(초기값:string, 띄워라:(e:string)=>void){
    const [값, 값변경] = useState(초기값);
    const 변형할거다:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        값변경(e.target.value);
    }
    const 핸들 = () => {
        띄워라(값);
        값변경("");
    }

    // 리턴할때 as const하는거 잊지말자!
    // https://jsdev.kr/t/topic/5613/3
    return [값, 변형할거다, 핸들] as const
}


function custom() {
    const [리턴값, 변형할거다, 핸들] = 커스텀훅("안녕", 팝업띄워);
    const [리턴값2, 변형할거다2, 핸들2] = 커스텀훅("안녕2", 팝업띄워);

    return (
        <>
           <h1>customHook : return할때 as const 주의하자</h1>
           <input type="text" value={리턴값} onChange={변형할거다}/>
           <button onClick={핸들}>핸들</button>
           <hr />
           <input type="text" value={리턴값2} onChange={변형할거다2}/>
           <button onClick={핸들2}>핸들</button>
        </>
    )
  }
  
  export default custom;
  