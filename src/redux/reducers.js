import { combineReducers } from 'redux';

//importamos todos los reducers
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers ({
    default: defaultReducer,
    
});

export default rootReducer;