type 프롭스타입 = {
    메세지? : string,
    클리어인덱스설정? : React.Dispatch<React.SetStateAction<number>>,
}

function Card(프롭스:프롭스타입) {
    const 설정 = () =>{
        프롭스?.클리어인덱스설정?.(1)
    }
    return (
        <div className={"오른쪽"}>
            {프롭스.메세지}{" "}<button onClick={설정}>2번까지만남기고다비활성화</button>
        </div>
    )
}

export default Card