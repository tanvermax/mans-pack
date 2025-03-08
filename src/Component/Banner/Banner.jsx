import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import photo11 from "./../../../public/photo1.jpg"
// import photo22 from "./../../../public/photo2.jpg"
// import photo33 from "./../../../public/photo3.jpg"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
    const slides = [
        {
          image: "https://i.ibb.co.com/7Nbc1Rz0/photo3.jpg",
          heading: "Modern Technology",
          description: "A Leading Packaging Manufacturer Company  in Dhaka, Bangladesh."
        },
        {
          image: "https://i.ibb.co.com/Y46CrMZ2/photo2.jpg",
          heading: "Custom Design",
          description: "This is the second slide description."
        },
        {
          image: "https://i.ibb.co.com/tGZ77XR/photo1.jpg",
          heading: "Excellence in Packaging",
          description: "This is the third slide description."
        }
      ];
    return (
        <div className="w-full  mx-auto">
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
            <div className="relative  lg:h-[500px]">
              <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white p-4">
                <h2 className="lg:text-6xl font-bold">{slide.heading}</h2>
                <p className="mt-2 lg:text-2xl text-xs text-center">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
    );
};

export default Banner;