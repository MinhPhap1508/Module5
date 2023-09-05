import { useEffect, useState } from "react";
import { addProduct, getAllType } from "../service/productService";
import * as Yup from 'yup';
import { Field,Form, Formik, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export function CreateProduct () {
const [type, setType] = useState([]);
const navigate = useNavigate();
const addNewProduct = async (values) => {
    const newValue = {...values, type:JSON.parse(values.type)}
    await addProduct(newValue);
    console.log(values);
}
const loadType = async () => {
    const res = await getAllType()
    setType(res);
}
useEffect(()=> {
    loadType();
},[])
    return(
        <>
        <Formik 
        initialValues={{
            code: "",
            name: "",
            date: "",
            quantity: "",
            type: `${JSON.stringify({
                "id": 1,
                "name": "Áo"
            })}`

        }}
        validationSchema={Yup.object({
            code: Yup.string().required("code không nên để trống"),
            name:Yup.string().required("Tên không nên để trống").max(100,"Tên không được quá 100 kí tự"),
            quantity: Yup.number().min(1, "Số lượng phải lớn hơn 0")
        })}
        onSubmit={(values) =>{
            addNewProduct(values)
            toast("Thêm mới thành công")
            navigate("/");
        }}
        >
        <div className="container px-5 my-5">
        <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="mb-3">
            <label className="form-label" htmlFor="code">Mã sản phẩm</label>
            <Field className="form-control" id="code" type="text" placeholder="Code" name="code" />
            <ErrorMessage name='code' component='span'></ErrorMessage>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Tên sản phẩm</label>
            <Field className="form-control" id="name" type="text" placeholder="Name" name="name" />
            <ErrorMessage name='name' component='span'></ErrorMessage>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">Ngày nhập</label>
            <Field className="form-control" id="price" type="text" placeholder="price" name="date" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="author">Số lượng</label>
            <Field className="form-control" id="author" type="number" placeholder="author" name="quantity" />
            <ErrorMessage name='quantity' component='span' style={{color:'red'}}></ErrorMessage>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="category">Loại sản phẩm</label>
            <Field className="form-select" id="category" aria-label="category" as = "select" name="type">
              
              {
                    type.map((t) =>(
                        <option value={`${JSON.stringify(t)}`}>{t.name}</option>
                    ))
              }
            </Field>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Add</button>
          </div>
        </Form>
      </div>
      </Formik>
        </>
    )
}