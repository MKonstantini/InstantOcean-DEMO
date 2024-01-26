import { FunctionComponent, useContext, useEffect } from "react";
import { CruisesContext, LoggedEmailContext, UsersContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";
import { useNavigate } from "react-router-dom";
import Cruise from "../../interfaces/Cruise";
import CruiseCard from "../page_parts/CruiseCard";
import User from "../../interfaces/User";

interface FavoritesProps {

}

const Favorites: FunctionComponent<FavoritesProps> = () => {
    // context
    const [cruisesData, setCruisesData] = useContext(CruisesContext)
    const [usersData, setUsersData] = useContext(UsersContext)
    const [loggedEmail, setLoggedEmail] = useContext(LoggedEmailContext)

    // find user
    const user: User = usersData.find((user: User) => user.email === loggedEmail)

    // evict user from page if not logged in
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedEmail) navigate(-1)
        window.scrollTo(0, 0)
    }, [])

    const displayFavorites = () => {
        if (cruisesData && user) {
            return (
                user.favorites.length > 0 ?
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                        {
                            cruisesData.map((cruise: Cruise, i: number) => {
                                if (
                                    user.favorites.includes(cruise.cruiseNum)
                                ) {
                                    return (
                                        <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                                    )
                                }
                            })
                        }
                    </div>
                    : <div className="mt-3 d-flex flex-column align-items-center">
                        <h4 className="mb-3">No Favorites To Display</h4>
                        <button className="btn btn-outline-secondary" onClick={() => navigate("/cruises")}>Browse our cruises</button>
                    </div>
            )
        }
    }

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Page Top */}
            <PageTopImg title="Favorites" subTitle="Your personal collection" imgSrc="PageImg-Favorites.jpg" />

            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Browse & Manage Favorites</h1>
            </div>

            {/* Cards Display */}
            {
                displayFavorites()
            }
        </div>
    );
}

export default Favorites;