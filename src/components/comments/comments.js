import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// images
import Image from "next/image";
import Tringle from "../../assets/images/triangleIcon.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Comments = () => {
  const [data, setData] = useState([]);

  async function fetchDatas() {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch("https://bushro-backend.herokuapp.com/allComments", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
    });

    if (res.status === 400) {
    } else if (res.status === 200) {
      const requests = await res.json();
      console.log(requests.data);
      setData(requests.data);
    }
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div className="comments">
      <h2 className="comments__heading">Biz haqimizda sharhlar</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={(true, { nextEl: ".nextButton", prevEl: ".prevButton" })}
        className="swiperTop"
      >
        {data.length > 0 &&
          data.map(row => (
            <SwiperSlide key={Math.random()}>
              <div>
                <Image
                  className="comments__user-img"
                  src={`https://bushro-backend.herokuapp.com/${row.comment_img}`}
                  alt="user comments "
                  width="100"
                  height="100"
                  loader={() => `https://bushro-backend.herokuapp.com/${row.comment_img}`}
                />
                <h3 className="comments__username">{row.comment_name}</h3>
                <p className="comments__text">{row.comment_info}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>{" "}
      <div className="comments__controllers">
        <button className="prevButton comments__controllers-btn">
          <Image
            className="prevImg"
            src={Tringle}
            alt="prev next img"
            width="18"
            height="18"
          />
        </button>
        <button className="nextButton comments__controllers-btn">
          <Image
            className="nextImg"
            src={Tringle}
            alt="prev next img"
            width="18"
            height="18"
          />
        </button>
      </div>
      {/* ====================== */}
    </div>
  );
};

export default Comments;
