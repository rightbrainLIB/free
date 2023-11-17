function UseContext() {
    return (
        <>
            <h1>UseContext</h1>
            <div>./context/menuContext.tsx (createContext)를 생성하여 export</div>
            <div>./app.tsx 위에서 생성한 context를 호출하여 Provider로 wrapper함</div>
            <div>이때 value처리할때 typescript오류로 애먹었다. useState의 값과 setter를 전달하고 싶은데 쉽지 않았음</div>
            <div>./components/layout/Header.tsx 에서 useContext를 사용하여 값을 가져오고 메뉴를 누를때 setter를 호출하여 값 업데이트하고 폰트 굵기로 상태변화 표현</div>
        </>
    )
}

export default UseContext;