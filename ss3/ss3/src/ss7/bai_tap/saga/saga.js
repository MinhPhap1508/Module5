import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { FETCH_SUCCESS, GET_ALL_USERS } from "../redux/action";
const BaseURL = "http://localhost:8080/users";
function* getAll(action) {
    try {
        console.log("bbb");
        const res = yield axios.get(BaseURL);
        console.log(res.data);
        yield put({
            type: FETCH_SUCCESS,
            payload: res.data

        });
    } catch (e) {
        console.log(e);
    }
}
export default function* rootSaga() {
    console.log("aaaa");
    yield takeLatest(GET_ALL_USERS, getAll);
}