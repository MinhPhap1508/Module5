import * as customerService from "../service/CustomerService";
import { useNavigate } from "react-router-dom";
import "../list.css";
import { Field, Form, Formik } from "formik";
export function CreateCustomer() {
    const navigate = useNavigate();
    const addCustomer = async (values) => {
        await customerService.addCustomer(values);
        alert("Done")
        navigate("/list");
    }
    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    dateOfBirth: "",
                    gender: "",
                    idCard: "",
                    phoneNumber: "",
                    email: "",
                    customerType: "",
                    address: ""
                }}
                onSubmit={async (values) => {
                    await addCustomer(values);
                }}
            >
                {
                    <div class="body">
                        <div class="form">
                            <div class="form-header">Add customer</div>
                            <Form class="create__form">
                                <div class="form__input-content">
                                    <div class="div">
                                        <label for="name">Customer Name</label>
                                        <Field type="text" class="form__input" id="name" name="fullName" />
                                    </div>
                                    <div class="div">
                                        <label for="time">Id Card</label>
                                        <Field type="number" class="form__input" id="time" name="idCard" />
                                    </div>
                                </div>

                                <div class="form__input-content">
                                    <div class="div">
                                        <label for="di">Number Phone</label>
                                        <Field type="text" class="form__input" id="di" name="phoneNumber" />
                                    </div>
                                    <div class="div">
                                        <label for="date">Date Of Birth</label>
                                        <Field type="date" class="form__input" id="date" name="dateOfBirth" />
                                    </div>
                                </div>

                                <div class="form__input-content">
                                    <div class="div">
                                        <label for="email">Email</label>
                                        <Field type="text" class="form__input" id="email" name="email" />
                                    </div>
                                    <div class="div">
                                        <label>Gender</label>
                                        <select>
                                            <option class="option" value="">--Gender--</option>
                                            <option class="option" value="male" name="gender">Male</option>
                                            <option class="option" value="famale" name="gender">Famale</option>
                                            <option class="option" value="other" name="gender">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form__input-content">
                                    <div class="div">
                                        <label for="add">Address</label>
                                        <Field type="text" class="form__input" id="add" name="address" />
                                    </div>
                                    <div class="div">
                                        <label>Customer Type</label>
                                        <select>
                                            <option class="option" value="">--Customer Type--</option>
                                            <option class="option" value="diamond" name="customerType">Diamond</option>
                                            <option class="option" value="platinum" name="customerType">Platinum</option>
                                            <option class="option" value="gold" name="customerType">Gold</option>
                                            <option class="option" value="silver" name="customerType">Silver</option>
                                            <option class="option" value="member" name="customerType">Member</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="end-buttons">
                                    <button class="my-button">Add</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }
            </Formik>
        </>
    )
}