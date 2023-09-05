
import axios from "axios";

export const GetAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books")
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const AddBook = async (book) => {
    try{
        book.category = await GetCategoryById(book.category)
        await axios.post("http://localhost:8080/books", book)
    }catch(e){
        console.log(e);
    }
}
 export const DeleteBook = async (id) => {
    try{
        await axios.delete("http://localhost:8080/books/"+id);
    }catch(e){
        console.log(e);
    }
}
export const GetById = async (id) => {
    try{
        const res = await axios.get("http://localhost:8080/books/"+id)
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const editBook = async (book) => {
    try{
        book.category = await GetCategoryById(book.category)
        await axios.put("http://localhost:8080/books/"+book.id, book)
    }catch(e){
        console.log(e);
    }
}
export const GetAllCategory = async () => {
    try{
        const res = await axios.get("http://localhost:8080/category")
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const GetCategoryById = async (id) => {
    try{
        const res = await axios.get("http://localhost:8080/category/"+id)
        return res.data;
    }catch(e){
        console.log(e);
    }
}