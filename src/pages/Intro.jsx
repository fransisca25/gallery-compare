import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Icons from "../components/Icons";

import jalais from "../assets/jalais-hill-pontoise.jpg";

import "../styles/intro.css"


export default function Introduction() {
    const navigate = useNavigate();

    return (
        <div className="intro-page">
            <div className="content">
                <div className="leftside">
                    <img src={jalais} alt="Artwork"/>
                </div>

                <div className="rightside">
                    <h1 className="intro-title">Gallery Compare</h1>
                    <p className="intro-content">
                        Gallery compare is an interactive system that support
                        quick comparison between two artworks. Discover
                        meaningful connections between artworks.
                    </p>

                    <div className="actions">
                        <Button text="Skip Tutorial" classname="white-btn intro-skip-btn" />
                        <Button text="Next" classname="main-btn intro-next-btn" onClick={() => navigate("/option")}/>
                    </div>
                </div>
            </div>

            <div className="icons-menu">
                <Icons nav={"/"} />
            </div>
            
        </div>
    );
}