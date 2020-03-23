import { SAVE_COMMENT } from "actions/types";


export default function(state = [],action){
    switch(action.type){
        case SAVE_COMMENT:
            console.log(action.payload);
            return [...state,action.payload];
        default:
            return state;
    }
}