import * as roomService from "../service/roomService";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
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
                                    </div>
                                    <div className="div">
                                        <label htmlFor="time">Service Area</label>
                                        <Field type="number" className="form__input" id="time" name="area" />
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="di">Capacity</label>
                                        <Field type="number" className="form__input" id="di" name="maxCapacity"/>
                                    </div>
                                    <div className="div">
                                        <label htmlFor="pool">Pool Area</label>
                                        <Field type="number" className="form__input" id="pool" name="poolArea"/>
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="price">Price</label>
                                        <Field type="number" className="form__input" id="price" name="rentalCost" />
                                    </div>
                                    <div className="div">
                                        <label>Choose Rental Type</label>
                                        <select>
                                            <option className="option" value="">
                                                --Choose--
                                            </option>
                                            <option className="option" value="date" name="rentalType" >
                                                Date
                                            </option>
                                            <option className="option" value="week" name="rentalType">
                                                Week
                                            </option>
                                            <option className="option" value="month" name="rentalType">
                                                Month
                                            </option>
                                            <option className="option" value="year" name="rentalType">
                                                Year
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form__input-content">
                                    <div className="div">
                                        <label htmlFor="fo">Floors</label>
                                        <Field type="number" className="form__input" id="fo" name="floors" />
                                    </div>
                                    <div className="div">
                                        <label htmlFor="room">Room Standard</label>
                                        <Field type="text" className="form__input" id="room" name="roomStandard" />
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