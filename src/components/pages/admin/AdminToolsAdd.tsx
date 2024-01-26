import { FunctionComponent, useContext, useEffect } from "react";
import { CruisesContext, LoggedEmailContext, UsersContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import FormCRUDAdd from "./FormCruiseAdd";
import User from "../../../interfaces/User";

interface AdminToolsAddProps {

}

const AdminToolsAdd: FunctionComponent<AdminToolsAddProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruisesContext)
    const [usersData, setUsersData] = useContext(UsersContext)
    const [loggedEmail, setLoggedEmail] = useContext(LoggedEmailContext)
    const navigate = useNavigate()

    // find user
    const user: User = usersData.find((user: User) => user.email === loggedEmail)

    // admin check
    useEffect(() => {
        if (!loggedEmail || user.accountType !== "admin") navigate("/")
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Add New Cruise</h1>
            </div>

            {/* Add */}
            {
                cruisesData &&
                <div className="d-flex flex-column align-items-center">
                    <h6 className="fw-bold">Add Cruise:</h6>
                    <FormCRUDAdd />
                </div>
            }

        </div>
    );
}

export default AdminToolsAdd;