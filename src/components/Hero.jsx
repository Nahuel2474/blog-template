import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { cards } from "../constants/cards";

const Hero = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90vw] my-20 text-center ">
      <Slider {...settings}>
        {cards.map((el, index) => (
          <div key={index} className=" text-white xs:h-[100px] ss:h-40 md:h-96 rounded-xl relative ">
            <img
              src={el.img}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <h1 className="absolute font-bold text-3xl left-10 bottom-32">
              {el.title}
            </h1>
            <a href="/posts" className="bg-primary p-3 px-10 rounded-md opacity-50 text-[#000] font-bold hover:opacity-100 hover:transition-opacity hover:delay-150  absolute bottom-11 left-10">
                Read Post
            </a>
            <p className="absolute bottom-10 right-20 w-1/3 text-right">
              {el.desc}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
