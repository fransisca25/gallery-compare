
import Icons from "../components/Icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "../styles/option.css";

import img1 from "../assets/jalais-hill-pontoise.jpg";
import img2 from "../assets/boating.jpg"
import img3 from "../assets/by_the_seashore.jpg"
import img4 from "../assets/villevenue.jpg"
import img5 from "../assets/tuileries.jpg"


export default function Option() {
    return (
        <div className="option-page">

            <h1 className="page-title">Choose your paintings</h1>

            <div className="gallery-grid">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} className="second-row-img"/>
                <img src={img5} className="second-row-img"/>
            </div>

            <div className="icons-menu">
                <Icons nav={"/intro"} />
            </div>
        </div>
    );
}