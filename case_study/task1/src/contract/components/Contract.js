import { useState, useEffect } from "react";
import * as contractService from "../service/ContractService";
import { Link } from "react-router-dom";

export function Contract() {
    const [contract, setContract] = useState([]);
    useEffect(() => {
        getContract();
    }, []);
    const getContract = async () => {
        const res = await contractService.getAll();
        setContract(res);
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Contract List</h1>
            <Link to="/add-contract" className="btn btn-primary">Add Contract</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Some contract</th>
                        <th>Contract start day</th>
                        <th>Contract end day</th>
                        <th>Advance deposit amount</th>
                        <th>Total payment amount</th>
                    </tr>
                </thead>
                <tbody>
                    {contract.map((con) => (
                        <tr key={con.id}>
                            <td>{con.someContracts}</td>
                            <td>{con.startDate}</td>
                            <td>{con.endDate}</td>
                            <td>{con.deposit}</td>
                            <td>{con.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}