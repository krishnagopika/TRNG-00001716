
import {  } from "./file1";
export interface UserInterface{
    email:string;
}

export class USer{
    name:string;
    password:string;
}

export const unique = 10;

export function Frozen(constructor: Function){
    Object.freeze(constructor);
}



