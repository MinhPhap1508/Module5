import axios from "axios";
export const getAll =async () => {
    try{
        const result = await axios.get('http://localhost:6060/book');
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const addBook =async (book) => {
    try{
        const result = await axios.post('http://localhost:6060/book', book);
        return result.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteBook = async (id) => {
    try{
        const result = await axios.delete('http://localhost:6060/book/'+id);
        return result.data;
    }catch(e){
        console.log(e);
    }
}