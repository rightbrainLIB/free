import { createContext } from "react";


export type State = {
    menu : number, 
    update : (idx: number) => void
}

export const MenuContext = createContext<State | null>(null);