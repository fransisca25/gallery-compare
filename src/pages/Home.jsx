import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import GalleryImage from "../components/GalleryImage";
import Button from "../components/Button";

import imgtop from "../assets/boating.jpg";
import imgleft from "../assets/by_the_seashore.jpg";
import imgright from "../assets/dancers_practicing_at_the_barre.jpg";


export default function Home() {
    const navigate = useNavigate();

    return (
    <div className="container">
      <h1 className="title">Gallery Compare</h1>

      <GalleryImage
        src={imgtop}
        className="img imgtop"
      />
      <GalleryImage
        src={imgleft}
        className="img imgleft"
      />
      <GalleryImage
        src={imgright}
        className="img imgright"
      />

      <Button 
        text="Let's Begin"
        classname="main-btn intro-btn" 
        onClick={() => navigate("/intro")}
      />
    </div>
  );
}
