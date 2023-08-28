import { useState, useEffect } from "react";
import * as customerService from "../service/CustomerService";
import { Link } from "react-router-dom";
import '../customer.css';
export function Customers() {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        getCustomers();
    }, [])
    const getCustomers = async () => {
        const res = await customerService.getAll();
        setCustomer(res);
    }
    return (
        <div className="container">
            <h1>List Customers</h1>
            <Link to="/add-customer" className="btn btn-primary">Add Customer</Link>
            <div className="table-function">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth of day</th>
                            <th>Gender</th>
                            <th>Identity</th>
                            <th>Number Phone</th>
                            <th>Email</th>
                            <th>Kind of customer</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((c) => (
                            <tr key={c.id}>
                                <td>{c.fullName}</td>
                                <td>{c.dateOfBirth}</td>
                                <td>{c.gender}</td>
                                <td>{c.idCard}</td>
                                <td>{c.phoneNumber}</td>
                                <td>{c.email}</td>
                                <td>{c.customerType}</td>
                                <td>{c.address}</td>
                                <td>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}