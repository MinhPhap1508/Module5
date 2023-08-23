import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FidgetSpinner } from "react-loader-spinner"
import './form.css';
export function FormContact() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name cannot is empty"),
                    email: Yup.string()
                        .required("Email cannot is empty")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email is invalid"),
                    phone: Yup.string()
                        .required("Phone cannot is empty"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        console.log(values);
                        alert("ok")
                        // toast("Add contact successfully")
                    }, 2000)
                }
                }
            >
                {
                    ({ isSubmitting }) => (
                        <div className="form">
                            <h1>Contact form</h1>
                            <Form>
                                <label>Name</label>
                                <Field type="text" name='name'/>
                                <ErrorMessage name="name" component='span'/>
                                <label>Email</label>
                                <Field type="email" name='email' />
                                <ErrorMessage name="email" component='span'/>
                                <label>Phone</label>
                                <Field type="number" name='phone' />
                                <ErrorMessage name="phone" component='span'/>
                                <label>Message</label>
                                <textarea defaultValue={""} name='message'/>
                                {isSubmitting ?
                                    <FidgetSpinner
                                        visible={true}
                                        height="20"
                                        width="20"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                        backgroundColor="#F4442E"
                                    />
                                    :
                                    <button type="submit">Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}