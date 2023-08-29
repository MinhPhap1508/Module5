import { useState, useEffect } from "react";
import * as roomService from "../service/roomService";
import { Link } from "react-router-dom";
import '../service.css'

export function ListServices() {
    const [services, setSerVices] = useState([]);
    useEffect(() => {
        getRooms();
    }, [])
    const getRooms = async () => {
        const res = await roomService.getAll();
        setSerVices(res);
    }
    const deleteService = async (id) => {
        const res = await roomService.deleteService(id);
        getRooms();
        alert("Done");
    }
    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center", marginTop: "1rem" }}>List Rooms</h1>
                <Link to="/create-service"><button className="btn btn-primary">Add Service</button></Link>

                <div className="d-flex justify-content-between flex-wrap">
                    {services.map((s) => (
                        <div key={s.id} className="card shadow">
                            <img
                                src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{s.serviceName}</h5>
                                <p className="card-text">
                                    Diện tích phòng: {s.area} m<sup>2</sup>
                                </p>
                                <Link to={`/edit-service/${s.id}`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteService(s.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}