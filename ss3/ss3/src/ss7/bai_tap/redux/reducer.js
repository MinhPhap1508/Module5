import { GET_ALL_USERS, FETCH_SUCCESS, DELETE_SUCCESS } from "./action";
const initialState = {
    users: [],
    delete: {}
};
const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_SUCCESS: return { ...state, users: payload };
        case DELETE_SUCCESS:
            return {...state, delete:payload};
        default:
            return state;
    }
}
export default rootReducer;