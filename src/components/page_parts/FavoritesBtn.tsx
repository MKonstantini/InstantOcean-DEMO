import { FunctionComponent } from "react";
import { alertError } from "../../services/alertFunctions";

interface FavoritesBtnProps {
    cruiseNum: number
}

const FavoritesBtn: FunctionComponent<FavoritesBtnProps> = ({ cruiseNum }) => {
    return (
        <button className="heartBtn" onClick={() => {
            alertError("Backend closed! This feature is not included in the demo version. Find the full version at: https://github.com/MKonstantini/InstantOcean")
        }}>
            <i className="fa-regular fa-heart"></i>
        </button>
    )
}

export default FavoritesBtn;