import { useState, useEffect } from "react";

import view1 from "../assets/img/img3/MDK06325.webp"
import view2 from "../assets/img/img3/MDK00281.webp"
import view3 from "../assets/img/img3/MDK00765.webp"
import view4 from "../assets/img/img3/MDK09372.webp"
import view5 from "../assets/img/img3/MDK00314.webp"
import view6 from "../assets/img/img3/MDK09556.webp"
import view7 from "../assets/img/img3/MDK09521.webp"
import view8 from "../assets/img/img3/MDK00881.webp"
const images = [view6, view7, view8, view5, view3, view4, view1, view2];

export default function Home(){

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="home" className={`home ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h1>
                            Jelajahi Wisata Berkesan dengan Sentuhan <span className="budaya-alam">Budaya Alam</span>
                        </h1>
                            <button className="btn explore">Jelajahi Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    );
}