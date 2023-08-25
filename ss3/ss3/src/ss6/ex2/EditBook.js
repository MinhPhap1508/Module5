import { useState, useEffect } from "react";
import * as bookService from "../ex2/BookService";
import { Form, Formik, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
export function EditBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState();
    const { id } = useParams();

    const getById = async () => {
        const setIdBook = await bookService.getById(id);
        setBook((prev) => ({ ...prev, ...setIdBook }));
    }
    const editBook = async (values) => {
        await bookService.editBook(values, id);
    }
    useEffect(() => {
        if (book === undefined) {
            getById();
        }
    }, [book]);
    return (
        <>
            {book != undefined ?
                <Formik
                    initialValues={{
                        title: book.title,
                        quantity: book.quantity
                    }}

                    onSubmit={async (values) => {
                        await editBook(values);
                        navigate("/");
                    }}
                >
                    
                        <Form>
                            <div className="container">
                                <h1>Create book</h1>

                                <label htmlFor="title">Title</label>
                                <Field type="text" id="title" name="title" />


                                <label htmlFor="quantity">Quantity</label>
                                <Field type="number" id="quantity" name="quantity" /><br />

                                <button type="submit" className="btn btn-success" >Add</button>
                            </div>
                        </Form>
                    
                </Formik> : ""
            }
        </>
    )
}