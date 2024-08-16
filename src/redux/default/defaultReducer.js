import { SET_NAME_MODULE } from "./defaultTypes";

//Variables globales
const initialState = {
    name: 'Desarrollo Frontend con ReactJS',
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_NAME_MODULE : {
            return {
                ...state,
                name: action.payload,
            }
        }
        default:
            return state;
    }
};

export default defaultReducer;