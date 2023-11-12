import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../layout/Header';
// import Footer from '../layout/Footer';
import Footer from '@components/layout/Footer';
import NotFound from '@components/error/NotFound';
import Main from '@components/pages/Main';
import logo from "@assets/images/logo_kakao.png"





function Router() {
	return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <img src={logo} alt="BigCo Inc. logo"/>
            <Footer />
        </BrowserRouter>
	);
}

export default Router;
