import { createContext } from "react";


export type State = {
    활성화메뉴 : number, 
    활성화메뉴설정 : (idx: number) => void,
    메뉴숨김 : boolean,
    메뉴숨김설정 : (값: boolean) => void,
}

export const MenuContext = createContext<State | null>(null);