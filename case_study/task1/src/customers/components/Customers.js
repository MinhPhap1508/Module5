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
    const deleteCustomer = async (id) => {
        const res = await customerService.deleteCustomer(id);
        getCustomers();
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
                            <th colSpan={2}>Action</th> 
                            <th></th>
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
                                <td>
                                    <Link to={`/edit-customer/${c.id}`} className="btn btn-warning">Edit</Link>
                                </td>
                                <td>
                                <button className="btn btn-danger" onClick={() => deleteCustomer(c.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}