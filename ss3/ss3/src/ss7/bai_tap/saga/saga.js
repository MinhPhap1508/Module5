import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { FETCH_SUCCESS, GET_ALL_USERS,DELETE_SUCCESS,DELETE } from "../redux/action";
const BaseURL = "http://localhost:8080/users";
function* getAll(action) {
    try {
        const res = yield axios.get(BaseURL);
        yield put({
            type: FETCH_SUCCESS,
            payload: res.data

        });
    } catch (e) {
        console.log(e);
    }
}
function* getRemove() {
try{
    const res = yield axios.delete("http://localhost:8080/users"+id);
}
}
export default function* rootSaga() {
    yield takeLatest(GET_ALL_USERS, getAll);
    yield takeLatest(DELETE, getRemove);
}