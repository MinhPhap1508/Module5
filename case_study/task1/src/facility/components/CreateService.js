import * as roomService from "../service/roomService";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export function CreateService() {
    const navigate = useNavigate();
    const addService = async (values) => {
        await roomService.addService(values);
        alert("Add service successly");
        navigate("/");
    }
    return (
        <>
            <Formik
                initialValues={{
                    serviceName: "",
                    area: "",
                    rentalCost: "",
                    maxCapacity: "",
                    rentalType: "",
                    roomStandard: "",
                    amenities: "",
                    poolArea: "",
                    floors: "",
                    freeServices: ""
                }}
                validationSchema={Yup.object({
                    serviceName: Yup.string()
                    .required("Service Name cannot is empty")
                    .matches(/^[a-zA-Z]{2,}$/,"Service Name Invalid"),
                    area: Yup.number()
                    .required("Area cannot is empty")
                    .min(1,"Area should more than 0!"),
                    rentalCost: Yup.string().required("Rental cost cannot is empty"),
                    maxCapacity: Yup.string().required("Capacity cannot is empty"),
                    rentalType: Yup.string().required("Rental type cannot is empty"),
                    poolArea: Yup.number().required("Pool Area cannot is empty!")
                    .min(1, "Pool area > 0 !"),
                    floors: Yup.number()
                    .required("Floors cannot is empty")
                    .min(1,"Floors should geather than 0!")
                })}
                onSubmit={async (values) => {
                    await addService(values);
                }}
            >
                {
                    <div className="body">
                        <div className="form">
                            <div className="form-header">Add Service</div>
                            <Form className="create__form">
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="name">Service Name</label>
                                        <Field type="text" className="form__input" id="name" name="serviceName" />
                                        <ErrorMessage name="serviceName" component='span' />
                                    </div>
                                    <div className="div">
                                        <label htmlFor="time">Service Area</label>
                                        <Field type="number" className="form__input" id="time" name="area" />
                                        <ErrorMessage name="area" component='span' />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="di">Capacity</label>
                                        <Field type="number" className="form__input" id="di" name="maxCapacity"/>
                                        <ErrorMessage name="maxCapacity" component='span' />
                                    </div>
                                    <div className="div">
                                        <label htmlFor="pool">Pool Area</label>
                                        <Field type="number" className="form__input" id="pool" name="poolArea"/>
                                        <ErrorMessage name="poolArea" component='span' />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="price">Price</label>
                                        <Field type="number" className="form__input" id="price" name="rentalCost" />
                                        <ErrorMessage name="rentalCost" component='span' />
                                    </div>
                                    <div className="div">
                                        <label>Choose Rental Type</label>
                                        <Field as="select" name="renalType">
                                            <option className="option" value="">
                                                --Choose--
                                            </option>
                                            <option className="option" value="date" >
                                                Date
                                            </option>
                                            <option className="option" value="week">
                                                Week
                                            </option>
                                            <option className="option" value="month">
                                                Month
                                            </option>
                                            <option className="option" value="year">
                                                Year
                                            </option>
                                        </Field>
                                        <ErrorMessage name="rentalType" component='span' />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="fo">Floors</label>
                                        <Field type="number" className="form__input" id="fo" name="floors" />
                                        <ErrorMessage name="floors" component='span' />
                                    </div>
                                    <div className="div">
                                        <label htmlFor="room">Room Standard</label>
                                        <Field type="text" className="form__input" id="room" name="roomStandard" />
                                        <ErrorMessage name="roomStandrd" component='span' />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="a">Amenities</label>
                                        <Field type="text" className="form__input" id="a" name="amenities" />
                                    </div>
                                    <div className="div">
                                        <label htmlFor="free">Free Services</label>
                                        <Field type="text" className="form__input" id="free" name="freeServices" />
                                    </div>
                                </div>
                                <div className="end-buttons">
                                    <button className="my-button">Add</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }
            </Formik>
        </>
    )
}