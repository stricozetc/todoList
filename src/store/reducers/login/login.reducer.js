import { LOG_IN, LOG_OUT } from '../../actions';

const initialState = {
    state: 'INITIAL',
    user: '',
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                state,
                user: action.payload,
            };
        case LOG_OUT:
            return {
                state,
                user: '',
            }
        default:
            return state;
    }
}
