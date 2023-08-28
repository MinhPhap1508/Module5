import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });

    const userlogined = useSelector(state => state.userLogined);
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser = { newVal };
    };
    const login = () => {
        dispatch ({ type:"LOGIN", payload: user});
    };
    useEffect(() => {
        if(userlogined.username){
            navigate("/users");
        }
    }, [userlogined, navigate]);
    return (
        <form>
            <label>UserName</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Login</button>
        </form>
    )
}