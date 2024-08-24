import { combineReducers } from 'redux';

//importamos todos los reducers
import defaultReducer from './default/defaultReducer';
import formReducer from './form/formReducer';

const rootReducer = combineReducers ({
    default: defaultReducer,
    form: formReducer,
    
});

export default rootReducer;