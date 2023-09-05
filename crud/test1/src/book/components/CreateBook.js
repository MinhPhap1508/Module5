import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { AddBook, GetAllCategory } from '../service/BookServcie';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
export function CreateBook() {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const LoadCategory = async () => {
        const res = await GetAllCategory();
        setCategory(res);
    }
    useEffect(() => {
        LoadCategory();
    }, [])
    const addBook = async (values) => {
        await AddBook(values);
        toast("create okoko")
        navigate("/")

    }
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    price: "",
                    author: "",
                    category: 1
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không được để trống"),
                    price: Yup.number().required("ko trống"),
                    author: Yup.string().required("not ok")
                })}
                onSubmit={async (values) => {
                    addBook(values);
                }}
            >
                {/* <Form> */}
                    {/* <label>Ten</label>
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
                    <button type='submit'>Thêm mới</button> */}


<div className="container px-5 my-5">
  <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
    <div className="mb-3">
      <label className="form-label" htmlFor="name">Name</label>
      <Field className="form-control" id="name" type="text" placeholder="Name" data-sb-validations  name='name'/>
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="price">price</label>
      <Field className="form-control" id="price" type="number" placeholder="price" data-sb-validations name='price' />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="author">author</label>
      <Field className="form-control" id="author" type="text" placeholder="author" data-sb-validations name='author' />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="category">category</label>
      <Field className="form-select" id="category" aria-label="category" as='select'>
        {
            category.map((ca) => (
                <option value={ca.id}>{ca.name}</option>
            ))
        }
       
      </Field>
    </div>
    <div className="d-grid">
      <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
    </div>
  </Form>
</div>

                         
                {/* </Form> */}
            </Formik>
        </>
    )
}