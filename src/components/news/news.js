import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import moment from "moment";

// images
// import Img1 from "../../assets/images/img1.jpg";
// import Img2 from "../../assets/images/img2.png";
// import Img3 from "../../assets/images/img3.jpg";
// import Img4 from "../../assets/images/img4.jpg";
// import Img5 from "../../assets/images/img5.jpg";
// import Img6 from "../../assets/images/img6.jpg";
// import Img7 from "../../assets/images/img7.jpg";
// import Img8 from "../../assets/images/img8.jpg";
// import Img9 from "../../assets/images/img9.jpg";
// import Img10 from "../../assets/images/img10.jpg";
import Triangle1 from "../../assets/images/triangleIcon1.png";
// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// core
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const News = () => {
  const API = "https://api.bushroacademy.uz";

  const [data, setData] = useState([]);

  const fetchDatas = async () => {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch(API + "/news", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
    });

    if (res.status === 400) {
      Router.push("/admin/login");
    } else if (res.status === 200) {
      const requests = await res.json();
      setData(requests.data);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news__heading">Yangiliklar</h2>
        <h3 className="news__text">What`s going on?</h3>

        {/* ================= */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          navigation={(true, { prevEl: ".news_prev-btn", nextEl: ".news_next-btn" })}
          spaceBetween={50}
          loop={true}
          className="swiperBottom"
          breakpoints={{
            320: {
              width: 320,
              height: 500,
              slidesPerView: 1,
            },
            400: {
              width: 400,
              slidesPerView: 1,
            },
            500: {
              width: 400,
              slidesPerView: 1,
            },
            600: {
              width: 300,
              slidesPerView: 1,
            },
            768: {
              width: 400,
              slidesPerView: 1,
            },
            900: {
              width: 520,
              slidesPerView: 1,
            },
          }}
        >
          {data.length > 0 &&
            data.map(row => (
              <SwiperSlide key={row.news_id}>
                <div className="swiperslide__div-wrapper">
                  <div className="slider__img-wrapper">
                    <Image
                      className="slider__img"
                      src={`${API}/${row.news_img}`}
                      width="250"
                      height="330"
                      alt=""
                      loader={() => `${API}/${row.news_img}`}
                    />
                  </div>
                  <div className="slider__wrapper">
                    <p className="slider__date">
                      {moment(`${row.news_date}`).format("L")}
                    </p>
                    <h4 className="sldier__heading">{row.news_name}</h4>
                    <p className="slider__text">{row.news_intro}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="news__btnController">
          <button className="news_prev-btn news__controllers">
            <Image
              className="news__prevBtn"
              src={Triangle1}
              alt="news section next prev btn img"
              width="20"
              height="20"
            />
          </button>
          <button className="news_next-btn news__controllers">
            <Image
              className="news__nextBtn"
              src={Triangle1}
              alt="news section next prev btn img"
              width="20"
              height="20"
            />
          </button>
        </div>
        {/* ======================= */}
      </div>
    </section>
  );
};

export default News;
