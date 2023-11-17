import Router from "@components/route/Index"
import { MenuContext, State } from "@/context/menuContext"
import "@/assets/styles/layout.css"
import { useState } from "react"


function App() {
  const [now, setNow] = useState(0);


  return (
      <MenuContext.Provider value={{
        menu : now, 
        update : setNow
      }}>
        <Router />
      </MenuContext.Provider>
  )
}

export default App
