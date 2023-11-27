type 프롭스타입 = {
    메세지? : string,
}

function Card(프롭스:프롭스타입) {
    

    return (
        <div className={"오른쪽"}>
            {프롭스.메세지}{" "}<button>수정</button>
        </div>
    )
}

export default Card