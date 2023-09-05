import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { GetAllCategory, GetById, editBook } from '../service/BookServcie';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
export function EditBook() {
    const [category, setCategory] = useState([]);
    const navigate= useNavigate();
    const param = useParams();
    const LoadCategory = async () => {
        const res = await GetAllCategory();
        setCategory(res)
    }
    const[selectorBook, setSelectorBook] = useState();
    const getBookById = async (id) =>{
        const res = await GetById(id);
        setSelectorBook(res);
    }
    useEffect(() => {
        LoadCategory(); 
        getBookById(param.id)
    }, [param])
    const editBooks = async (values) => {
        await editBook(values)
        toast("Edit doen")
        navigate("/")
    }
    if(selectorBook == undefined){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: selectorBook.id,
                    name: selectorBook.name,
                    price: selectorBook.price,
                    author: selectorBook.author,
                    category: selectorBook.category.id
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không được để trống"),
                    price: Yup.number().required("ko trống"),
                    author: Yup.string().required("not ok")
                })}
                 onSubmit={async (values) => {
                            editBooks(values);
                 }}
            >
                <Form>
                    <label>Ten</label>
                    <Field type='text' name='name'></Field>
                    <ErrorMessage name='name' component='span'></ErrorMessage>
                    <label>Gia</label>
                    <Field type='number' name='price'></Field>
                    <ErrorMessage name='price' component='span'></ErrorMessage>
                    <label>Tac gia</label>
                    <Field type='text' name='author'></Field>
                    <ErrorMessage name='author' component='span'></ErrorMessage>
                    <label>The loai</label>
                    <Field as="select" name='category'>
                        {
                            category.map((cate) => (
                                <option value={cate.id}>{cate.name}</option>
                            ))
                        }
                    </Field>
                    <button type='submit'>Sửa</button>
                </Form>
            </Formik>
        </>
    )
}