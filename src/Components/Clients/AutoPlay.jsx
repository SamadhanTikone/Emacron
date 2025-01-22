import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="text-2xl p-4">Google</h3>
        </div>
        <div>
          <h3 className="text-2xl p-4">FaceBook</h3>
        </div>
        <div>
          <h3 className="text-2xl p-4">Meta</h3>
        </div>
        <div>
          <h3 className="text-2xl p-4">Pinterset</h3>
        </div>
        <div>
          <h3 className="text-2xl p-4">Apple</h3>
        </div>
        <div>
          <h3 className="text-2xl p-4">Yahoo</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
