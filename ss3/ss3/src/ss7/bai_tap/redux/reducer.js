import { GET_ALL_USERS, FETCH_SUCCESS } from "./action";
const initialState = {
    users: [],
};
const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_SUCCESS: return { ...state, users: payload };
        default:
            return state;
    }
}
export default rootReducer;