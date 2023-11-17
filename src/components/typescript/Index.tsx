type 프롭스타입 = {
    문자 : string,
    숫자 : number,
    필수아님? : string,
    문자or숫자 : string | number,
    오브젝트? : {}
    함수? : () => {}, // 반환값(return)이 있는 함수
    함수2? : () => void, // 반환값(return)이 없는 함수
}

interface 프롭스타입2  {
    아이디: string;
    이름: string;
    출동상태: boolean;
}

function 기본형프롭스 (프롭스:프롭스타입){
    let 스타일오브젝트 = 프롭스.오브젝트;
    let 스타일오브젝트2 = (프롭스.함수) ? 프롭스.함수() : undefined;
    if(프롭스.함수2){
        프롭스.함수2;
    }
    return (
        <div style={{padding: 10, margin: 10, border : '1px dashed #333'}}>
            <div>문자 : {프롭스.문자}</div>
            <div>숫자 : {프롭스.숫자}</div>
            {
                프롭스.필수아님 && <div>필수아님 : {프롭스.필수아님}</div>
            }
            <div>문자 or 숫자 : {프롭스.문자or숫자}</div>
            {
                프롭스.오브젝트 && <div style={스타일오브젝트}>오브젝트가 날라왔네</div>
            }
            {
                프롭스.함수 && <div style={스타일오브젝트2}>함수 날라왔네</div>
            }
        </div>
    )
}
function 구조분해할당프롭스 ({문자, 숫자, 필수아님, 문자or숫자}:프롭스타입){
    return (
        <div style={{padding: 10, margin: 10, border : '1px dashed #333'}}>
            <div>문자 : {문자}</div>
            <div>숫자 : {숫자}</div>
            {
                필수아님 && <div>필수아님 : {필수아님}</div>
            }
            <div>문자 or 숫자 : {문자or숫자} </div>
        </div>
    )
}
const 기본형프롭스2:React.FC<프롭스타입> = (프롭스) =>{ 
    return (
        <div style={{padding: 10, margin: 10, border : '1px dashed #333'}}>
            <div>문자 : {프롭스.문자}</div>
            <div>숫자 : {프롭스.숫자}</div>
            {
                프롭스.필수아님 && <div>필수아님 : {프롭스.필수아님}</div>
            }
            <div>문자 or 숫자 : {프롭스.문자or숫자}</div>
        </div>
    )
}
const 구조분해할당프롭스2:React.FC<프롭스타입> = ({문자, 숫자, 필수아님, 문자or숫자}) =>{ 
    return (
        <div style={{padding: 10, margin: 10, border : '1px dashed #333'}}>
            <div>문자 : {문자}</div>
            <div>숫자 : {숫자}</div>
            {
                필수아님 && <div>필수아님 : {필수아님}</div>
            }
            <div>문자 or 숫자 : {문자or숫자} </div>
        </div>
    )
}


function 객체형프롭스(던저 : {던저 :프롭스타입2, 응:string}){
    
    return (
        <div style={{padding: 10, margin: 10, border : '1px dashed #333'}}>
            <div>객체형으로 전달할때는 <span style={{color:'red'}}>(프롭스 : {'{'}프롭스 : 타입{'}'})</span> 형태를 잊지 말자!!!!!</div>
            <div>아이디 : {던저.던저.아이디}</div>
            <div>이름 : {던저.던저.이름}</div>
            <div>출동했냐? : {(던저.던저.출동상태 ? "안함" : "꿀빠는중")}</div>
            <div>{던저.응}</div>
        </div>
    )
}

function typescript () {
    function 값리턴하는함수(){
        return {
            background: "teal",
            color: "white",
        }
    }
    function 함수야(){
        return {
            background: "yellow",
            color: "red",
        }
    }
    function 함수야2(){
        console.log('함수야2 호출됬다. 리턴없음');
    }
    const 오브젝트 = {
        아이디 : 'No1',
        이름 : '독수리1호',
        출동상태 : false
    }
    return (
        <>
            <h1>타입스크립트 연습 : 프롭스</h1>
            <객체형프롭스 던저={오브젝트} 응={'아하뭐야'}></객체형프롭스>
            <기본형프롭스 문자={"기본형 프롭스"} 숫자={123} 필수아님={"난 들어가고싶을때만2"} 문자or숫자={777} 오브젝트={값리턴하는함수()} 함수={함수야} 함수2={함수야2} />
            <기본형프롭스 문자={"기본형 프롭스"} 숫자={123} 문자or숫자={"행운"} />

            <구조분해할당프롭스 문자={"구조분해 할당 프롭스"} 숫자={123} 필수아님={"난 들어가고싶을때만"} 문자or숫자={777}  />
            <구조분해할당프롭스 문자={"구조분해 할당 프롭스"} 숫자={123} 문자or숫자={"행운"} />
            
            <기본형프롭스2 문자={"전달값"} 숫자={123} 필수아님={"난 들어가고싶을때만"} 문자or숫자={777} />
            <기본형프롭스2 문자={"전달값"} 숫자={123} 문자or숫자={"행운"} />

            <구조분해할당프롭스2 문자={"구조분해 할당 프롭스"} 숫자={123} 필수아님={"난 들어가고싶을때만"} 문자or숫자={777} />
            <구조분해할당프롭스2 문자={"구조분해 할당 프롭스"} 숫자={123} 문자or숫자={"행운"} />
        </>
    )
}
export default typescript