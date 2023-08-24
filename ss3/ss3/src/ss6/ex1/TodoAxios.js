import { useState, useEffect } from "react";
import * as todoService from "../ex1/TodoService"
export function TodoAxios() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        getAlls();
    }, [])
    const getAlls = async () => {
        const result = await todoService.getAll();
        setTodo((prev) => prev = result);
    }
    const addTodo = async () => {
        const title = document.getElementById('title').value;
        console.log(await todoService.addTodo({ title: title }));
        getAlls();
    }
    return (
        <>
            <form>
                <h1>Todo List</h1>
                <input type="text" id="title" />
                <button type="button" onClick={() => addTodo()}>Submit</button>
                <ul>
                    {todo.map((todos) => (
                        <li key={todos}>{todos.title}</li>
                    )
                    )}
                </ul>
            </form>

            {/* <h1>Todo List</h1>
        <input type="text"/>
        <button type="submit">Submit</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map((todos) => (
                        <tr key={todos}>
                            <td>{todos.id}</td>
                            <td>{todos.title}</td>
                            <td>{todos.completed}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}
        </>
    )
}