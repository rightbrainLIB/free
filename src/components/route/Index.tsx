import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import NotFound from '@components/error/NotFound';
import Main from '@components/page/main/Index';
import Notice from '@components/page/notice/Index';
import UseState from "@components/hooks/useState/Index"

function Router() {
    return (
    <BrowserRouter>
        <Header />
        <div className='body'>
            <Routes>
                <Route path="/" element={<Main  />}></Route>
                <Route path="/hooks/useState" element={<UseState  />}></Route>
                <Route path="/notice" element={<Notice  />}></Route>
                <Route path="*" element={<NotFound  />}></Route>
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    )
  }
  
  export default Router
  