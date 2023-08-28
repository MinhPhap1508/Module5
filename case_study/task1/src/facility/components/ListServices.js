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
    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center", marginTop: "1rem" }}>List Rooms</h1>
                <Link to="/create-service"><button className="btn btn-primary">Add Service</button></Link>
                <div className="row">
                    <div className="d-flex card-container">
                        {services.map((s) => (
                            <div key={s.id} className="card">
                                <img
                                    src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{s.serviceName}</h5>
                                    <p className="card-text">
                                       {s.amenities}
                                    </p>
                                    <Link to="/edit-service" className="btn btn-primary">Edit</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}