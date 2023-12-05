import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import { textState } from "./Index";

function Card() {
    const [text, setText] = useRecoilState(textState);
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo Card: {text}
        </>
    )
  }
  
  export default Card
  