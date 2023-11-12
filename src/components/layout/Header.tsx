import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/hooks/useState">useState</Link>
            <Link to="/">메인</Link>
            <Link to="/notice">게시판</Link>
        </div>
    )
  }
  
  export default Header
  