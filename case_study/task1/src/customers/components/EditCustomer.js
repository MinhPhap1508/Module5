import * as customerService from "../service/CustomerService";
import { useNavigate } from "react-router-dom";
import "../list.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function EditCustomer() {
    const navigate = useNavigate();
    const param = useParams();
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const getCustomerById = async () => {
        const res = await customerService.getById(param.id);
        setSelectedCustomer(res);
    }
    const loadCustomer = async (values) => {
        await customerService.editCustomer(values);
        
        navigate("/customers");
        alert("Done")
    }
    useEffect(() => {
        getCustomerById();
    },[param.id])
    if(selectedCustomer.id == null){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: selectedCustomer.id,
                    fullName: selectedCustomer.fullName,
                    dateOfBirth: selectedCustomer.dateOfBirth,
                    gender: selectedCustomer.gender,
                    idCard: selectedCustomer.idCard,
                    phoneNumber: selectedCustomer.phoneNumber,
                    email: selectedCustomer.email,
                    customerType: selectedCustomer.customerType,
                    address: selectedCustomer.address
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .required("Name cannot is empty")
                        .matches(/^(?:[A-Z][a-z]*)+$/, "Name is invalid"),
                    dateOfBirth: Yup.string()
                        .required("Dob cannot is empty"),
                    gender: Yup.string().required("Gender cannot is empty"),
                    idCard: Yup.string()
                        .required("ID Card cannot is empty")
                        .matches(/^\d{9}|\d{12}$/, "Id Card is Invalid"),
                    phoneNumber: Yup.string()
                        .required("Phone cannot is empty")
                        .matches(/^(?:\+?84)?(90|91)\d{7}$/, "Invalid"),
                    email: Yup.string()
                        .required("Email cannot is empty")
                        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid"),
                        address: Yup.string()
                        .required("Address cannot is empty!"),
                        customerType: Yup.string().required("Type cannot is empty!")
                })}
                onSubmit={async (values) => {
                    await loadCustomer(values);
                }}
            >
                {
                    <div className="body">
                        <div className="form">
                            <div className="form-header">Add customer</div>
                            <Form className="create__form">
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="name">Customer Name</label>
                                        <Field type="text" className="form__input" id="name" name="fullName">
                                        </Field>
                                        <ErrorMessage name="fullName" component='span' /></div>
                                    <div className="div">
                                        <label htmlFor="time">Id Card</label>
                                        <Field type="number" className="form__input" id="time" name="idCard">
                                        </Field>
                                        <ErrorMessage name="idCard" component='span' /></div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="di">Number Phone</label>
                                        <Field type="text" className="form__input" id="di" name="phoneNumber">
                                        </Field>
                                        <ErrorMessage name="phoneNumber" component='span' /></div>
                                    <div className="div">
                                        <label htmlFor="date">Date Of Birth</label>
                                        <Field type="date" className="form__input" id="date" name="dateOfBirth">
                                        </Field>
                                        <ErrorMessage name="dateOfBirth" component='span' /></div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="email">Email</label>
                                        <Field type="text" className="form__input" id="email" name="email">
                                        </Field>
                                        <ErrorMessage name="email" component='span' /></div>
                                    <div className="div">
                                        <label>Gender</label>
                                        <Field as="select" name="gender">
                                            <option className="option" value>--Gender--</option>
                                            <option className="option" value="male">Male</option>
                                            <option className="option" value="famale">Famale</option>
                                            <option className="option" value="other">Other</option>
                                        </Field>
                                        <ErrorMessage name="gender" component='span' />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="add">Address</label>
                                        <Field type="text" className="form__input" id="add" name="address">
                                        </Field>
                                        <ErrorMessage name="address" component='span' /></div>
                                    <div className="div">
                                        <label>Customer Type</label>
                                        <Field as="select" name="customerType">
                                            <option className="option" value>--Customer Type--</option>
                                            <option className="option" value="diamond">Diamond</option>
                                            <option className="option" value="platinum">Platinum</option>
                                            <option className="option" value="gold">Gold</option>
                                            <option className="option" value="silver">Silver</option>
                                            <option className="option" value="member">Member</option>
                                        </Field>
                                        <ErrorMessage name="customerType" component='span' />
                                    </div>
                                </div>
                                <div className="end-buttons">
                                    <button className="my-button" type="submit">Add</button>
                                </div>
                            </Form>
                        </div>
                    </div>

                }
            </Formik>
        </>
    )
}