import Router from "@components/route/Index"
import { MenuContext, State } from "@/context/menuContext"
import "@/assets/styles/layout.css"
import { useState } from "react"


function App() {
  const [활성화메뉴, 활성화메뉴설정] = useState(0);
  const [메뉴숨김, 메뉴숨김설정] = useState(false);

  return (
      <MenuContext.Provider value={{
        활성화메뉴 : 활성화메뉴, 
        활성화메뉴설정 : 활성화메뉴설정,
        메뉴숨김 : 메뉴숨김,
        메뉴숨김설정: 메뉴숨김설정,
      }}>
        <Router />
      </MenuContext.Provider>
  )
}

export default App
