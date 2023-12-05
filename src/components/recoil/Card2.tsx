import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import { textState } from "./Index";

function Card2() {
    const [text, setText] = useRecoilState(textState);

    return (
        <>  
            <br />
            Echo Card2: {text}
        </>
    )
  }
  
  export default Card2
  