import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Icons({ nav }) {
    const navigate = useNavigate();
    
    return (
        <div className="bottom-icons">
            <button
                className="home-btn"
                onClick={() => navigate("/")}
            >
                <FontAwesomeIcon icon={["fas", "home"]} className="icon"/>
            </button>

            <button
                className="gear-btn"
                onClick={() => navigate("/gear")}
            >
                <FontAwesomeIcon icon={["fas", "gear"]} className="icon" />
            </button>

            <button
                className="arrow-btn"
                onClick={() => navigate(nav)}
            >
                <FontAwesomeIcon icon={["fas", "arrow-left"]} className="icon"/>
            </button>
        </div>
    );
}