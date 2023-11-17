import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from "@/context/menuContext"


function Header() {
    const now = useContext(MenuContext);
    return (
        <div className="header">
            <Link to="/" onClick={()=>{now?.update(99999)}}><span style={{fontWeight : (now?.menu == 99999 ? '700' : '400')}}>메인</span></Link>
            <Link to="/typescript" onClick={()=>{now?.update(-1)}} className="alarm"><span style={{fontWeight : (now?.menu == -1 ? '700' : '400')}}>typescript</span></Link>
            <Link to="/hooks/useState" onClick={()=>{now?.update(0)}}><span style={{fontWeight : (now?.menu == 0 ? '700' : '400')}}>useState</span></Link>
            <Link to="/hooks/useEffect" onClick={()=>{now?.update(1)}}><span style={{fontWeight : (now?.menu == 1 ? '700' : '400')}}>useEffect</span></Link>
            <Link to="/hooks/useRef" onClick={()=>{now?.update(2)}}><span style={{fontWeight : (now?.menu == 2 ? '700' : '400')}}>useRef</span></Link>
            <Link to="/hooks/useContext" onClick={()=>{now?.update(3)}}><span style={{fontWeight : (now?.menu == 3 ? '700' : '400')}}>useContext</span></Link>
            <Link to="/hooks/useMemo" onClick={()=>{now?.update(4)}}><span style={{fontWeight : (now?.menu == 4 ? '700' : '400')}}>useMemo</span></Link>
            <Link to="/hooks/useCallback" onClick={()=>{now?.update(5)}}><span style={{fontWeight : (now?.menu == 5 ? '700' : '400')}}>useCallback</span></Link>
            <Link to="/hooks/useReducer" onClick={()=>{now?.update(6)}}><span style={{fontWeight : (now?.menu == 6 ? '700' : '400')}}>useReducer</span></Link>
            <Link to="/hooks/reactMemo" onClick={()=>{now?.update(7)}}><span style={{fontWeight : (now?.menu == 7 ? '700' : '400')}}>reactMemo</span></Link>
        </div>
    )
  }
  export default Header
  