/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../hooks/useFetch";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

import { Keyboard, Navigation } from "swiper";

function Feedbacks() {
  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
  if (loading) return <p> </p>;
  if (error) return <p> Error  </p>;
  
  const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt

  const slider = attributes?.FeedbackSlider; // вывод аттрибут

  const result = [];

  for (let i = 0; i < slider.data.length; i++) {
    result.push(
      <SwiperSlide key={i}>
        <img src={`https://randee.ru${slider.data[i].attributes.url}`} alt="feedback"/>
        <span className="feedback_____swiper____wrapper___slide__image_money">списано : <span>{slider.data[i].attributes.caption}</span></span>
      </SwiperSlide>
    )
  }
          
  
  return (
    <>
        <section id="feedbacks" className="feedback">
          <div className="container">
          <h2 className="feedback_____header" dangerouslySetInnerHTML={{__html: bankrupt.attributes.FeedbackTitle}}></h2>
{/* <img src={`lk.randee.ru${slider.data[3].attributes.url}`} alt="feedback"/> */}
          <p className="feedback_____examples">Посмотрите несколько примеров:</p>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                enabled: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Navigation]}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1500: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                className="feedback_____swiper mySwiper"
            >
                {result}
                
            </Swiper>
          </div>
        </section>
    </>
  );
}

export default Feedbacks;