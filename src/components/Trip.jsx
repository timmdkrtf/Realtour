import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import trip1 from "../assets/img/study-tour/trip1.webp";
import trip2 from "../assets/img/study-tour/trip2.webp";
import trip3 from "../assets/img/study-tour/trip4.webp";
import trip4 from "../assets/img/study-tour/trip6.webp";
import trip5 from "../assets/img/study-tour/DNW-03179.png";
import trip6 from "../assets/img/study-tour/DNW-03473.png";
import trip7 from "../assets/img/study-tour/DNW-01037.png";
import trip8 from "../assets/img/study-tour/DNW-04452.png";
import trip9 from "../assets/img/study-tour/MDK06341.png";
import trip10 from "../assets/img/study-tour/IMG-20250306.png";

import perTrip1 from "../assets/img/personal-trip/guide1.webp"
import perTrip2 from "../assets/img/personal-trip/personal-guide.webp"
import perTrip3 from "../assets/img/personal-trip/personal-trip1.webp"
import perTrip4 from "../assets/img/personal-trip/personal-trip2.webp"
import perTrip5 from "../assets/img/personal-trip/guide2.webp"
import perTrip6 from "../assets/img/personal-trip/MDK08609 (1).webp"
import perTrip7 from "../assets/img/personal-trip/MDK06265.png"
import perTrip8 from "../assets/img/personal-trip/MDR04353-1.png"
import perTrip9 from "../assets/img/personal-trip/MDK06267.png"
import perTrip10 from "../assets/img/personal-trip/MDK09443.png"
import perTrip11 from "../assets/img/personal-trip/MDK09326.png"
import perTrip12 from "../assets/img/personal-trip/MDK00153.png"

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
        mainTitle: "Study Tour",
        img: trip3,
        desc: "SMP & SMA Insan Kamil"
      },
      {
        mainTitle: "Wisata Jeep",
        img: trip1,
        desc: "Bromo"
      },
      {
        mainTitle: "Aksi Lingkungan",
        img: trip2,
        desc: 'Goa Pindul'
      },
      {
        mainTitle: "Keindahan Alam",
        img: trip4,
        desc: "Bromo"
      },
      {
        mainTitle: "Campus Tour",
        img: trip5,
        desc: "Universitas Ahmad Dahlan"
      },
      {
        mainTitle: "Jelajah Wisata Ikonik",
        img: trip6,
        desc: "Malioboro"
      },
      {
        mainTitle: "Offroad Asyik Dengan Jeep",
        img: trip7,
        desc: "Jeep Adventure Mangunan"
      },
      {
        mainTitle: "Explore Destinasi Unik",
        img: trip8,
        desc: "Museum Angkut"
      },
      {
        mainTitle: "Petualangan Edukasi Alam",
        img: trip9,
        desc: "Ocean Dream Samudra Ancol",
      },
      {
        mainTitle: "Petualangan Edukasi Alam",
        img: trip10,
        desc: "Bird Land Ancol",
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
      {
        mainTitle: "Hunting Spot Instagramable",
        img: perTrip7,
        desc: "Museum Angkut"
      },
      {
        mainTitle: "Keindahan Alam",
        img: perTrip8,
        desc: "Sunrise Bromo"
      },
      {
        mainTitle: "Florawisata",
        img: perTrip9,
        desc: "Santerra De Laponte"
      },
      {
        mainTitle: "Momen Kebersamaan Keluarga",
        img: perTrip10,
        desc: "Sunrise Bromo"
      },
      {
        mainTitle: "Rekreasi Keluarga",
        img: perTrip11,
        desc: "Batu Secret Zoo"
      },
      {
        mainTitle: "Intimate Moment",
        img: perTrip12,
        desc: "Ocean Dream Samudra Ancol"
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
                { typeof slide.desc === "string"? <p>{slide.desc}</p> : ""}
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
