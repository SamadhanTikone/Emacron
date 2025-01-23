import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Service.module.css"

function AutoPlayService() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    
  };
  return (
    <div className={`slider-container ${styles.slider}`}>
      <Slider {...settings}>
       
        <div>
          <li className="text-2xl ">24/7 Support</li>
        </div>
        <div>
          <li className="text-2xl ">Mobile-Friendly</li>
        </div>
        <div>
          <li className="text-2xl ">Flexible Plans </li>
        </div>
        <div>
          <li className="text-2xl ">Quality Deliverables</li>
        </div>
        <div>
          <li className="text-2xl ">Cost Savings</li>
        </div>
        <div>
          <li className="text-2xl ">Timely Releases</li>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlayService;
