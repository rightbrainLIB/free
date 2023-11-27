type 프롭스타입 = {
    메세지? : string,
    활성화인덱스설정? : React.Dispatch<React.SetStateAction<number>>,
}

function Card(프롭스:프롭스타입) {
    const 설정 = () =>{
        프롭스?.활성화인덱스설정?.(4)
    }
    return (
        <div className={"오른쪽"}>
            {프롭스.메세지}{" "}<button onClick={설정}>5번으로 한방에 가게</button>
        </div>
    )
}

export default Card