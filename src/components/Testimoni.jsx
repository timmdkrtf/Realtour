import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimoni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    // {
    //   id: 1,
    //   class: `note a`,
    // },
    {
      id: 2,
      class: `note b`,
    },
    {
      id: 3,
      class: `note c`,
    },
  ];

  return (
    <div className="testimoni">
      <div className="container">
        <div className="content">
          <div className="title">
            <h4>Apa kata Mereka?</h4>
          </div>
          <div className="sticky">
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className={item.class}></div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
