import { useState, useEffect } from "react";
import * as bookService from "../ex2/BookService"
import { Link } from "react-router-dom";
import './book.css'
export function Library() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        getBook();
    }, [])
    const getBook = async () => {
        const result = await bookService.getAll();
        setBook((prev) => prev = result);
    }
    const deleteBook = async (id) => {
        const result = await bookService.deleteBook(id);
        getBook();
        alert("Delete Done")
    }

    return (
        <div className="container">
            <div className="title">
            <span className="fs-2">Library</span>
                <Link to="/create"><button className="add btn btn-success" type="button">Add a new Book</button></Link>
                </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { book.map((b) => (
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.quantity}</td>
                            <td>
                                <Link to={"/edit"+b.id}><button className="btn btn-primary">Edit</button></Link>
                                <button className="btn btn-danger" onClick={() => deleteBook(b.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}