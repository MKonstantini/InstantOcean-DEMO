import { FunctionComponent, useContext } from "react";
import FormRegister from "../misc/FormRegister";
import FormLogin from "../misc/FormLogin";
import { alertSuccess } from "../../services/alertFunctions";
import { useNavigate } from "react-router-dom";
import { LoggedEmailContext } from "../../App";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const navigate = useNavigate()
    // Get Context
    const [loggedEmail, setloggedEmail] = useContext(LoggedEmailContext)

    // Demo Login Function -  Regular
    async function demoRegularLogin() {
        setloggedEmail("dRegular@instantocean.com")
        alertSuccess("Welcome to the demo! Authorization: Regular Account")
        navigate("/")
    }

    // Demo Login Function -  Admin
    async function demoAdminLogin() {
        setloggedEmail("dAdmin@instantocean.com")
        alertSuccess("Welcome to the demo! Authorization: Admin Account")
        navigate("/")
    }

    return (
        <div className="d-flex flex-wrap justify-content-center position-relative" style={{ marginTop: "90px" }}>
            {/* Background Img */}
            <img src="PageImg-Login.jpg" alt="loginImg" className="generalFill" />

            {/* Leftside - Login */}
            <div className="text-center m-5 p-2" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", width: "400px" }}>
                <header className="my-5">
                    <i className="fa-solid fa-circle-user mb-2" style={{ fontSize: "2rem" }}></i>
                    <h1>Login</h1>
                    <h5 className="fst-italic fw-bold">Welcome Back!</h5>
                </header>

                <FormLogin />

                {/* Demo Users */}
                <hr />
                <div className="mt-4 pt-3">
                    <h5>Demo Users</h5>
                    {/* Regular */}
                    <button type="button" className="btn btn-outline-primary mt-4" style={{ width: "12rem" }} onClick={demoRegularLogin}> <i className="fa-solid fa-user me-2"></i>Demo Regular User</button>
                    {/* Admin */}
                    <button type="button" className="btn btn-outline-primary mt-4 mb-5" style={{ width: "12rem" }} onClick={demoAdminLogin}><i className="fa-solid fa-user-tie me-2"></i>Demo Admin User</button>
                </div>
            </div>

            {/* Rightside - Register */}
            <div className="text-center m-5 px-5 pt-2" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", width: "400px" }}>
                <header className="my-5">
                    <i className="fa-solid fa-user-plus my-2" style={{ fontSize: "1.6rem" }}></i>
                    <h1>Register</h1>
                    <h5 className="fst-italic fw-bold">Adventure Awaits!</h5>
                </header>

                <FormRegister />
            </div>

        </div >
    );
}

export default Login;