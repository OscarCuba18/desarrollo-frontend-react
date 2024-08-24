import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            const { username, email, password } = action.payload;
            if (password === 'mod7ReactUSIP') {
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        ...action.payload,
                        username: username,
                        email: email,
                        password: password,
                    }
                }
            }
            return state;
        }
        case CLEAR_FORM_DATA:
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                }
            };
        default:
            return state;
    }
};

export default formReducer;