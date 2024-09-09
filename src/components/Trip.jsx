import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import trip1 from "../assets/img/trip/trip1.png";
import trip2 from "../assets/img/trip/trip2.png";
import trip3 from "../assets/img/trip/trip3.png";
import trip4 from "../assets/img/trip/trip4.png";
import trip5 from "../assets/img/trip/trip5.png";
import trip6 from "../assets/img/trip/trip6.png";

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
      studyTourRef.current.focus();
    }
  }, []);

  const slides = {
    'study-tour': [
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
        mainTitle: "Study Tour SMP Insan Kamil",
        img: trip4,
      },
      {
        mainTitle: "Wisata Mengelilingi Alam",
        img: trip5,
      },
      {
        mainTitle: "Wisata yang menyenangkan",
        img: trip6,
      },
    ],
    'private-trip': [
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
        mainTitle: "Study Tour SMP Insan Kamil",
        img: trip4,
      },
      {
        mainTitle: "Wisata Mengelilingi Alam",
        img: trip5,
      },
      {
        mainTitle: "Wisata yang menyenangkan",
        img: trip6,
      },
    ],
    'outing': [
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
        mainTitle: "Study Tour SMP Insan Kamil",
        img: trip4,
      },
      {
        mainTitle: "Wisata Mengelilingi Alam",
        img: trip5,
      },
      {
        mainTitle: "Wisata yang menyenangkan",
        img: trip6,
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
              <CiGlobe className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle" size={48} />
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
