import {BUY_CAKE} from './caketypes'

export function buyCake(number=1){ //actionCreator 
    return{
        type:BUY_CAKE ,
        payload:number
    } ;
}