import { useState,useEffect } from "react";
import * as bookService from "../ex2/BookService"
import { useNavigate } from "react-router-dom";
export function CreateBook(){
    const navigate = useNavigate;
    const addBook = async () => {
        const title = document.getElementById('title').value;
        console.log(await bookService.addBook({ title: title }));
        alert("Add new Done")
    }
    return(
        <div>
            <form>
                <h3>Title</h3>
                <input type="text"/>
                <h3>Quantity</h3>
                <input type="number"/><br/>
                <button className="btn btn-success" type="button" onClick={() => addBook()}>Add</button>
            </form>
        </div>
    )
}