import { Link } from "react-router-dom"
import "../style.css"
function Header(){
    return(
        <nav className="navbar navbar-expand-sm">
        <div className="container-fluid d-flex justify-content-start">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="logo" href="/#">FURAMA</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="/#">Customers</a> */}
                    <Link className="nav-link" to="/customers">Customers</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Rooms</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contract">Contract</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Entertainment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Endow</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Header