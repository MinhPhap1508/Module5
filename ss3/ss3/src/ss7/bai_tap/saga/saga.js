import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { FETCH_SUCCESS, GET_ALL_USERS,DELETE } from "../redux/action";
function* getAll(action) {
    try {
        const res = yield axios.get("http://localhost:8080/users");
        yield put({
            type: FETCH_SUCCESS,
            payload: res.data

        });
    } catch (e) {
        console.log(e);
    }
}
function* Remove(action) {
try{
    const id = action.payload;
     yield axios.delete("http://localhost:8080/users/"+id);
    yield put({
        type: GET_ALL_USERS
    });
}catch(e){
    console.log(e);
}
}
export default function* rootSaga() {
    yield takeLatest(GET_ALL_USERS, getAll);
    yield takeLatest(DELETE, Remove);
}