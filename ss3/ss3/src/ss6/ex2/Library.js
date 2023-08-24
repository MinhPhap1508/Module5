import { useState, useEffect } from "react";
import * as bookService from "../ex2/BookService"
import { Link } from "react-router-dom";
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
            <h1>Library</h1>
            <button className="btn btn-success" type="button">
                <Link to="/create">Add a new Book</Link></button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>ACtions</th>
                    </tr>
                </thead>
                <tbody>
                    { book.map((b) => (
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.quantity}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteBook(`${book.id}`)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}