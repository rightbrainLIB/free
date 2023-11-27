type 프롭스타입 = {
    아이디?: string,
    메세지? : string,
    방향?: string,
    활성화? : boolean,
}

function Card(프롭스:프롭스타입) {
    
    const {방향 = 'left'} = 프롭스;

    return (
        <div className={`방향-${방향}`}>
            {프롭스.메세지}
        </div>
    )
}

export default Card