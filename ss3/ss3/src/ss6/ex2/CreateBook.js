import { Formik,Form, Field } from "formik";
import * as bookService from "../ex2/BookService"
import { useNavigate } from "react-router-dom";
export function CreateBook(){
    const navigate = useNavigate;
    const addBook = async(values) => {
        await bookService.addBook(values);
        alert("Add new done");
        navigate("/book");
    }
    return(
       <>
        <Formik
                initialValues={{
                    title: "",
                    quantity: ""
                }}

                onSubmit={ async (values) =>{
                    await addBook(values);
                }}
            >
                {
                    <Form>
                        <div className="container">
                            <h1>Create book</h1>
                            
                                <label htmlFor="title">Title</label>
                                <Field type="text" id="title" name="title" />
                        
                        
                                <label htmlFor="quantity">Quantity</label>
                                <Field type="number" id="quantity" name="quantity" /><br/>
                            
                            <button type="submit" className="btn btn-success" >Add</button>
                        </div>
                    </Form>
                }
            </Formik>
       </>
    )
}