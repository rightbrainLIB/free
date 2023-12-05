import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import Card from './Card';
import Card2 from './Card2';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
function Recoil() {
    return (
        <RecoilRoot>
            <h1>리코일</h1>
            <Card />
            <Card2 />
        </RecoilRoot>
    )
  }
  
  export default Recoil
  