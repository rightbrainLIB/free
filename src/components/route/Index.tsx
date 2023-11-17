import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import NotFound from '@components/error/NotFound';
import Main from '@components/page/main/Index';
import UseState from "@components/hooks/useState/Index"
import UseEffect from '@components/hooks/useEffect/Index';
import UseRef from '@components/hooks/useRef/Index';
import UseContext from '@components/hooks/useContext/Index';
import UseMemo from '@components/hooks/useMemo/Index';
import UseCallback from '@components/hooks/useCallback/Index';
import UseReducer2 from '@components/hooks/useReducer/Index';
import TypeScript from '@components/typescript/Index';
function Router() {
    return (
    <BrowserRouter>
        <Header />
        <div className='body'>
            <Routes>
                <Route path="/" element={<Main  />}></Route>
                 
                <Route path="/typescript" element={<TypeScript  />}></Route>
                <Route path="/hooks/useState" element={<UseState  />}></Route>
                <Route path="/hooks/useEffect" element={<UseEffect  />}></Route>
                <Route path="/hooks/useRef" element={<UseRef  />}></Route>
                <Route path="/hooks/useContext" element={<UseContext  />}></Route>
                <Route path="/hooks/useMemo" element={<UseMemo />}></Route>
                <Route path="/hooks/useCallback" element={<UseCallback />}></Route>
                <Route path="/hooks/useReducer" element={<UseReducer2 />}></Route>
                <Route path="*" element={<NotFound  />}></Route>
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    )
  }
  
  export default Router
  