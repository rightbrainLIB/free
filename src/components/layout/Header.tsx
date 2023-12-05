import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from "@/context/menuContext"


function Header() {
    const 지금 = useContext(MenuContext);


    const 메뉴숨길까 = (flag:boolean) =>{
        지금?.메뉴숨김설정(flag);
    }
    return (
        <div className="header">
            <Link to="/" onClick={()=>{지금?.활성화메뉴설정(99999);메뉴숨길까(true)}}><span style={{fontWeight : (지금?.활성화메뉴 == 99999 ? '700' : '400')}}>채팅UI</span></Link>
            <Link to="/typescript" onClick={()=>{지금?.활성화메뉴설정(-1);메뉴숨길까(false)}} className="alarm"><span style={{fontWeight : (지금?.활성화메뉴 == -1 ? '700' : '400')}}>typescript</span></Link>
            <Link to="/hooks/useState" onClick={()=>{지금?.활성화메뉴설정(0);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 0 ? '700' : '400')}}>useState</span></Link>
            <Link to="/hooks/useEffect" onClick={()=>{지금?.활성화메뉴설정(1);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 1 ? '700' : '400')}}>useEffect</span></Link>
            <Link to="/hooks/useRef" onClick={()=>{지금?.활성화메뉴설정(2);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 2 ? '700' : '400')}}>useRef</span></Link>
            <Link to="/hooks/useContext" onClick={()=>{지금?.활성화메뉴설정(3);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 3 ? '700' : '400')}}>useContext</span></Link>
            <Link to="/hooks/useMemo" onClick={()=>{지금?.활성화메뉴설정(4);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 4 ? '700' : '400')}}>useMemo</span></Link>
            <Link to="/hooks/useCallback" onClick={()=>{지금?.활성화메뉴설정(5);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 5 ? '700' : '400')}}>useCallback</span></Link>
            <Link to="/hooks/useReducer" onClick={()=>{지금?.활성화메뉴설정(6);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 6 ? '700' : '400')}}>useReducer</span></Link>
            <Link to="/hooks/reactMemo" onClick={()=>{지금?.활성화메뉴설정(7);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 7 ? '700' : '400')}}>reactMemo</span></Link>
            <Link to="/hooks/custom" onClick={()=>{지금?.활성화메뉴설정(8);메뉴숨길까(false)}}><span style={{fontWeight : (지금?.활성화메뉴 == 8 ? '700' : '400')}}>customHook</span></Link>
            <Link to="/recoil" onClick={()=>{지금?.활성화메뉴설정(9);메뉴숨길까(false)}} className="alarm"><span style={{fontWeight : (지금?.활성화메뉴 == -1 ? '700' : '400')}}>Recoil</span></Link>
        </div>
    )
  }
  export default Header
  