import axios from "axios";
export const getAll =async () => {
    try{
        const result = await axios.get('http://localhost:8080/todo');
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const addTodo =async (todo) => {
    try{
        const result = await axios.post('http://localhost:8080/todo', todo);
        return result.data;
    }catch(e){
        console.log(e);
    }
}
