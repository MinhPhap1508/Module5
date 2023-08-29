import { ErrorMessage, Field, Form, Formik } from "formik";
import * as contractService from "../service/ContractService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../contract.css"
export function CreateContract() {
    const navigate = useNavigate();
    const addContract = async (values) => {
        await contractService.addContract(values);
        alert("Done");
        navigate("/contract");
    }
    return (
        <>
            <Formik
                initialValues={{
                    someContracts: "",
                    startDate: "",
                    endDate: "",
                    deposit: "",
                    totalPrice: ""
                }}
                validationSchema={Yup.object({
                    someContracts: Yup.string()
                        .required("Some Contract cannot is empty"),
                    startDate: Yup.string()
                        .required("Start date cannot is empty"),
                    endDate: Yup.string()
                        .required("End date cannot is empty"),
                    deposit: Yup.number()
                        .required("Deposit cannot is empty")
                        .min(1, "Deposit should more than 0"),
                    totalPrice: Yup.number()
                        .required("Total Price canno is empty")
                        .min(1, "Total Amount must be greater than 0")
                })}
                onSubmit={async (values) => {
                    await addContract(values)
                }}
            >
                <section className="text-center">
                    {/* Background image */}
                    <div
                        className="p-5 bg-image"
                        style={{
                            backgroundImage:
                                'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
                            height: 300
                        }}
                    />
                    {/* Background image */}
                    <div
                        className="card mx-4 mx-md-5 shadow-5-strong"
                        style={{
                            marginTop: "-100px",
                            background: "#addccf",
                            backdropFilter: "blur(30px)"
                        }}
                    >
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center fw-bold">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5">Contract</h2>
                                    <Form>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">
                                                Some contracts
                                            </label>
                                            <Field
                                                type="text"
                                                id="form3Example3"
                                                className="form-control"
                                                name="someContracts"
                                            />
                                            <ErrorMessage name="someContracts" component='span' />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1">
                                                        Contract start day
                                                    </label>
                                                    <Field
                                                        type="date"
                                                        id="form3Example1"
                                                        className="form-control"
                                                        name="startDate"
                                                    />
                                                    <ErrorMessage name="startDate" component='span' />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example2">
                                                        Contract end date
                                                    </label>
                                                    <Field
                                                        type="date"
                                                        id="form3Example2"
                                                        className="form-control"
                                                        name="endDate"
                                                    />
                                                    <ErrorMessage name="endDate" component='span' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">
                                                Advance deposit amount
                                            </label>
                                            <Field
                                                type="number"
                                                id="form3Example3"
                                                className="form-control"
                                                name="deposit"
                                            />
                                            <ErrorMessage name="deposit" component='span' />
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">
                                                Total payment amount
                                            </label>
                                            <Field
                                                type="number"
                                                id="form3Example4"
                                                className="form-control"
                                                name="totalPrice"
                                            />
                                            <ErrorMessage name="totalPrice" component='span' />
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Create contract
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </Formik>
        </>
    )
}