import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import trip1 from "../assets/img/study-tour/trip1.webp";
import trip2 from "../assets/img/study-tour/trip2.webp";
import trip3 from "../assets/img/study-tour/trip3.webp";
import trip4 from "../assets/img/study-tour/trip4.webp";
import trip5 from "../assets/img/study-tour/trip5.webp";
import trip6 from "../assets/img/study-tour/trip6.webp";
import trip7 from "../assets/img/study-tour/Group 2 (3).webp";

import perTrip1 from "../assets/img/personal-trip/guide1.webp"
import perTrip2 from "../assets/img/personal-trip/personal-guide.webp"
import perTrip3 from "../assets/img/personal-trip/personal-trip1.webp"
import perTrip4 from "../assets/img/personal-trip/personal-trip2.webp"
import perTrip5 from "../assets/img/personal-trip/guide2.webp"
import perTrip6 from "../assets/img/personal-trip/MDK08609 (1).webp"

import outing1 from "../assets/img/outing/default-cover.webp"
import outing2 from "../assets/img/outing/outing-mountain.webp"
import outing3 from "../assets/img/outing/outline-island (2).webp"
import outing4 from "../assets/img/outing/outline-island (1).webp"
import outing5 from "../assets/img/outing/outline-island.webp"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trip() {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState('study-tour');

  const studyTourRef = useRef(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  useEffect(() => {
    if (studyTourRef.current) {
      // studyTourRef.current.focus();
    }
  }, []);

  const slides = {
    'study-tour': [
      {
        mainTitle: "Study Tour SMP & SMA Insan Kamil",
        img: trip4,
      },
      {
        mainTitle: "Wisata Jeep Bromo",
        img: trip1,
      },
      {
        mainTitle: "Wisata dengan Lingkungan",
        img: trip2,
      },
      {
        mainTitle: "Memahami Objek Sekitar",
        img: trip3,
      },
      {
        mainTitle: "Wisata Mengelilingi Alam",
        img: trip5,
      },
      {
        mainTitle: "Wisata yang menyenangkan",
        img: trip6,
      },
      {
        mainTitle: "Perpaduan antara alam dan budaya",
        img: trip7,
      },
    ],
    'private-trip': [
      {
        mainTitle: "Diberikan Pelayanan terpercaya",
        img: perTrip5,
      },
      {
        mainTitle: "Perjalanan private hanya dengan Temanmu",
        img: perTrip6,
      },
      {
        mainTitle: "Memahami Objek Sekitar",
        img: perTrip2,
      },
      {
        mainTitle: "Nikmati Pengalaman liburanmu",
        img: perTrip3,
      },
      {
        mainTitle: "Dipandu dengan hati dan profesional",
        img: perTrip1,
      },
      {
        mainTitle: "Tenangkan pikiranmu dengan wisata alam",
        img: perTrip4,
      },
    ],
    'outing': [
      {
        mainTitle: "Buat Wisata dengan rekan kerjamu",
        img: outing1,
      },
      {
        mainTitle: "Buat Pengalamanmu lebih mengasyikkan",
        img: outing3,
      },
      {
        mainTitle: "Tentramkan pikiranmu dari kepenatan kerja",
        img: outing2,
      },
      {
        mainTitle: "Abadikan pengalaman yang menyenangkan",
        img: outing4,
      },
      {
        mainTitle: "Lebih dekat dengan rekan kerjamu",
        img: outing5,
      },
    ],
  };

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: nav2,
    ref: sliderForRef,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      }
    ],
  };

  const settingsNav = {
    slidesToShow: 4.34,
    slidesToScroll: 1,
    asNavFor: nav1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    ref: sliderNavRef,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 2.35,
        },
      }
    ],
  };

  return (
    <section
      id="portfolio"
      className="bg-light text-dark min-vh-100 d-flex flex-column align-items-center justify-content-center p-3"
    >
      <div className="container">
        <div className="row w-100 py-5">
          <div className="col-12 col-md-4 col-sm-12">
            <h2 className="fw-bold">Perjalanan <span>Kami</span></h2>
          </div>
          <div className="col-12 col-md-4 col-sm-12">
            <p>
              Rasakan pengalaman perjalanan penuh kesan dan menyenangkan bersama Realtour, Join us now!
            </p>
          </div>
          <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center"}}>
            <a href="https://instagram.com/realtour.co.id" target="_blank"><button className="btn" style={{padding:"12px 28px", borderRadius:"15px"}}>
              Join us Now!
            </button></a>
          </div>
        </div>

        <div className="filter">
          <div className="button-filter">
            <button 
              ref={studyTourRef}
              className={activeSlide === 'study-tour' ? 'active' : ''}
              onClick={() => setActiveSlide('study-tour')}
            >
              Study Tour
            </button>
            <button 
              className={activeSlide === 'private-trip' ? 'active' : ''}
              onClick={() => setActiveSlide('private-trip')}
            >
              Private Trip
            </button>
            <button 
              className={activeSlide === 'outing' ? 'active' : ''}
              onClick={() => setActiveSlide('outing')}
            >
              Outing
            </button>
          </div>
        </div>

        <Slider {...settingsFor} className="slider-for">
          {slides[activeSlide].map((slide, index) => (
            <div key={index} className="image-wrapper position-relative">
              <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
              <div className="text-white position-absolute">
                <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
          {slides[activeSlide].map((slide, index) => (
            <div key={index} className="px-2">
              <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Trip;
