import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import React, { useState } from "react";

import nextBtnIcon from "../../assets/images/next.svg";
import prevBtnIcon from "../../assets/images/prev.svg";

// Images
import Arab from "../../assets/images/arab.jpg";
import Ingliz from "../../assets/images/ingliz.jpg";
import Turk from "../../assets/images/turk.jpg";
import Rus from "../../assets/images/rus.jpg";
import ArabCefr from "../../assets/images/arabcefr.jpg";
import InglizIelts from "../../assets/images/inglizielts.jpg";
import MATH from "../../assets/images/math.jpg";
import SAT from "../../assets/images/sat.jpg";
import Kids from "../../assets/images/kids.jpg";
import Maktab from "../../assets/images/maktab.jpg";

function Courses() {
  const [SlidesCount, setSlidesCount] = useState(3);

  React.useEffect(() => {
    if (window.innerWidth < 450) {
      setSlidesCount(1);
    } else if (window.innerWidth < 800) {
      setSlidesCount(2);
    } else {
      setSlidesCount(3);
    }
  }, []);

  const courses = [
    {
      id: 1,
      name: "Arab tili",
      description: "(10 ta o'rin mavjud)",
      img: Arab,
    },

    {
      id: 2,
      name: "Ingliz tili",
      description: "(10 ta o'rin mavjud)",
      img: Ingliz,
    },

    {
      id: 3,
      name: "Turk tili",
      description: "(12 ta o'rin mavjud)",
      img: Turk,
    },
    {
      id: 4,
      name: "Rus tili",
      description: "(10 ta o'rin mavjud)",
      img: Rus,
    },

    {
      id: 5,
      name: "Arab tili, CEFR",
      description: "(10 ta o'rin mavjud)",
      img: ArabCefr,
    },

    {
      id: 6,
      name: "Ingliz tili, IELTS",
      description: "(12 ta o'rin mavjud)",
      img: InglizIelts,
    },
    {
      id: 7,
      name: "Math in English",
      description: "(12 ta o'rin mavjud)",
      img: MATH,
    },
    {
      id: 8,
      name: "SAT",
      description: "(12 ta o'rin mavjud)",
      img: SAT,
    },
    {
      id: 9,
      name: "Bushro kids",
      description: "(20 ta o'rin mavjud)",
      img: Kids,
    },
    {
      id: 10,
      name: "Maktabgacha ta'lim",
      description: "(20 ta o'rin mavjud)",
      img: Maktab,
    },
  ];

  return (
    <>
      <section className="courses">
        <div className="container">
          <h2 className="courses__heading">Bizning kurslar</h2>
          <p className="courses__desc">
            «Bushro academy»da ta`lim yo`nalishlari yanada kengaydi. Endilikda Siz o`quv
            markazimizda quyidagi yo`nalishlarda tahsil olishingiz mumkin:
          </p>
          <Swiper
            className="courses__list"
            modules={[Navigation]}
            spaceBetween={35}
            slidesPerView={SlidesCount}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            onSwiper={swiper => swiper}
            onSlideChange={swiper => swiper}
          >
            {courses.length > 0 &&
              courses.map(e => (
                <SwiperSlide className="courses__item" key={e.id}>
                  <Image
                    className="coureses__item__img"
                    src={e.img}
                    alt="template"
                    width="400"
                    height="200"
                  />
                  <div className="courses__item__info-box">
                    <h3 className="info-box__heading">{e.name}</h3>
                    <p className="info-box__desc">{e.description}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="controllers">
            <button className="controllers-btn prev-btn" disabled>
              <Image src={prevBtnIcon} alt="icon prev" width="7" height="14" />
            </button>
            <button className="controllers-btn next-btn">
              <Image src={nextBtnIcon} alt="icon next" width="7" height="14" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
