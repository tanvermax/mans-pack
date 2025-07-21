import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useaxiospublic from "../../Hook/useaxiospublic";
import Loading from "../Loading";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiospublic = useaxiospublic();

  useEffect(() => {
    axiospublic
      .get("/banner")
      .then((res) => {
        setSlides(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching banner data:", err);
        setLoading(false); // Even on error, stop loading spinner
      });
  }, [axiospublic]);

  if (loading) return <Loading />;

  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative lg:h-[700px]">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover blur-[3px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white p-4">
                <h2 className="lg:text-6xl md:text-3xl font-bold">
                  {slide.heading}
                </h2>
                <p className="mt-2 lg:text-2xl md:text-xl text-xs text-center">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
  );
};

export default Banner;
