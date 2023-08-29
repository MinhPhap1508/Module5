import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, GET_ALL_USERS } from "../redux/action";
function User() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log(users);
    useEffect(() => {
        dispatch({
            type: GET_ALL_USERS
        })
    }, [dispatch])
    const removeUser = (id) =>{
        dispatch({
            type: DELETE,
            payload: id
        });
    }
    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button onClick={()=>removeUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default User;