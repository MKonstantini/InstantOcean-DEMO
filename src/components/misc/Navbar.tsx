import { FunctionComponent, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { alertError, alertSuccess } from "../../services/alertFunctions";
import { LoggedEmailContext, UsersContext } from "../../App";
import User from "../../interfaces/User";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    const navigate = useNavigate()

    // Get Context
    const [loggedEmail, setLoggedEmail] = useContext(LoggedEmailContext)
    const [usersData, setUsersData] = useContext(UsersContext)

    // Find User
    const user: User = usersData.find((user: User) => user.email === loggedEmail)

    function logoutFunction() {
        setLoggedEmail(null)
        navigate("/")
        alertSuccess("Logout Successful. See you soon!")
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{ minHeight: "90px" }}>
            <div className="container-fluid">
                {/* Brand */}
                <img src="Logo.svg" alt="logo" className="me-2" onClick={() => navigate("/")} />
                <Link className="navbar-brand" to="/">Instant Ocean</Link>
                {/* Collapse Btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Body */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex justify-content-between">
                        <div className="d-lg-flex flex-row">
                            {/* Left */}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/cruises">Cruises</NavLink>
                            <NavLink className="nav-link me-auto" to="/about">About</NavLink>
                        </div>
                        <div className="d-lg-flex flex-row">
                            {/* Right */}
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                            <NavLink className="nav-link" to={"/favorites"} onClick={() => { loggedEmail === null && alertError("Login to access this page!") }}>Favorites</NavLink>
                            {
                                user && user.accountType === "admin" &&
                                <NavLink className="nav-link" to="/admintools">
                                    <i className="fa-solid fa-wrench me-2"></i>
                                    Admin Tools
                                </NavLink>
                            }
                            {
                                loggedEmail === null ?
                                    <NavLink className="nav-link" to="/login">
                                        <i className="fa-regular fa-circle-user me-2"></i>
                                        Login
                                    </NavLink> :
                                    <button className="nav-link" onClick={logoutFunction}>
                                        <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                                        Logout
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;