import bgPeople1 from '../assets/img/view/29.webp'
import bgPeople2 from '../assets/img/view/30.webp'
import bgView1 from '../assets/img/view/26.webp'
import bgView2 from '../assets/img/view/28.webp'

import Slider from "react-slick";

import { useEffect, useState } from 'react'

import Bg1 from "../assets/img/img2/DNW-01566.webp"
import Bg2 from "../assets/img/img2/MDK00281.webp"
import Bg3 from "../assets/img/img2/MDK06191.webp"
import Bg4 from "../assets/img/img2/MDK06325.webp"
import Bg5 from "../assets/img/img2/MDK06398.webp"
import Bg6 from "../assets/img/img2/MDK09386.webp"

function Home(){

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 991);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 991);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slide1 = {
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10px",
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1.5,
              }
            },
        ]
      };

      const slide2 = {
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10px",
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2.3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 380,
                settings: {
                  slidesToShow: 1.5,
                }
            },
        ]
      };

    return(
        <div className="home" id="home">
            <div className="container">
                <div className="content-flex">
                    <div className="content-text">
                        <h3>Menghadirkan <span className="wisata">Wisata</span> Berkesan dengan Sentuhan <span className="lingkungan">Lingkungan</span> & <span className="budaya">Budaya</span></h3>
                        <p>Realtour menawarkan pengalaman perjalanan yang seru dan memuaskan, sekaligus memberikan wawasan mendalam tentang lingkungan sekitar. Kami berkomitmen untuk menjadikan setiap perjalanan Anda unik dan penuh makna, dengan pendekatan yang memadukan kesenangan dan edukasi tentang keberlanjutan lingkungan hidup.</p>
                        <a href="#about" style={{textDecoration:"none"}}><button>Baca Selengkapnya</button></a>
                    </div>
                    {isDesktop ? ( 
                        <div className="content-img-grid">
                            <div className="img top"><img src={bgPeople1} alt="" /></div>
                            <div className="img right"><img src={bgView1} alt="" /></div>
                            <div className="img bottom"><img src={bgView2} alt="" /></div>
                            <div className="img left"><img src={bgPeople2} alt="" /></div>
                        </div>
                        ) : (
                            <div className='slick-img'>
                                <Slider {...slide1}>
                                    <div>
                                        <img src={Bg1} alt="" />
                                    </div>
                                    <div>
                                        <img src={Bg2} alt="" />
                                    </div>
                                    <div>
                                        <img src={Bg3} alt="" />
                                    </div>
                                </Slider>
                                <Slider {...slide2} className='mt-2'>
                                    <div>
                                        <img src={Bg4} alt="" />
                                    </div>
                                    <div>
                                        <img src={Bg5} alt="" />
                                    </div>
                                    <div>
                                        <img src={Bg6} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;