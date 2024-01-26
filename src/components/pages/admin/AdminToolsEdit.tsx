import { FunctionComponent, useContext, useEffect } from "react";
import { CruisesContext, LoggedEmailContext, UsersContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import FormCRUDEditor from "./FormCruiseEditor";
import User from "../../../interfaces/User";

interface AdminToolsEditProps {

}

const AdminToolsEdit: FunctionComponent<AdminToolsEditProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruisesContext)
    const [usersData, setUsersData] = useContext(UsersContext)
    const [loggedEmail, setLoggedEmail] = useContext(LoggedEmailContext)
    const navigate = useNavigate()

    // page variables
    const user: User = usersData.find((user: User) => user.email === loggedEmail)
    const { cruiseNum } = useParams()

    // admin check
    useEffect(() => {
        if (!loggedEmail || user.accountType !== "admin") navigate("/")
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Chosen Cruise Editor</h1>
            </div>

            {/* Editor */}
            {
                cruiseNum &&
                <div className="d-flex flex-column align-items-center">
                    <h6 className="fw-bold">Edit Cruise : {cruisesData[cruiseNum].name}</h6>
                    <FormCRUDEditor initialCruise={cruisesData[cruiseNum]} />
                </div>
            }

        </div>
    );
}

export default AdminToolsEdit;