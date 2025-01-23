import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedBack from "./FeedBack"

function AutoPlayFeed() {
  const settings = {
    // dots: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true
        }
      }
    ]
    
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="md:mx-8 ">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://up.yimg.com/ib/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117"}/>
        </div>
        <div className="md:mx-8">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=180"}/>
        </div>
        <div className="md:mx-8">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://tse3.mm.bing.net/th?id=OIP.63BsbR0xiN5ii_h7FR6UZwHaHa&pid=Api&P=0&h=180"}/>
        </div>
        <div className="md:mx-8">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://tse3.mm.bing.net/th?id=OIP.AV4elskD-pS9LZ-qXgavTQHaHY&pid=Api&P=0&h=180"}/>
        </div>
        <div className="md:mx-8">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://tse4.mm.bing.net/th?id=OIP.Uf2twuNil7gguTKrQ-aFXgHaHa&pid=Api&P=0&h=180"}/>
        </div>
        <div className="md:mx-8">
        <FeedBack name={"Samadhan Tikone"} description={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque!"} src={"https://tse2.mm.bing.net/th?id=OIP.uGlfAHrqmgigQZR5IXymqgHaHa&pid=Api&P=0&h=180"}/>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlayFeed;
