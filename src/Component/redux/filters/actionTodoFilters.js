import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes"



export const colorChange=(color, changeType)=>{

    return {
        type: COLOR_CHANGED,
        payload: {
            color,
            changeType
        }
    }

}

export const statusChange=(status)=>{
console.log("action",status);
    return {
        type: STATUS_CHANGED,
        payload: status
        
    }

}