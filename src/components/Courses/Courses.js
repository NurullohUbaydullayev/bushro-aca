import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import React, { useState } from "react";

import nextBtnIcon from "../../assets/images/next.svg";
import prevBtnIcon from "../../assets/images/prev.svg";

// Images
import Arabic from "../../assets/images/arabic.png";
import English from "../../assets/images/english.png";
import Russian from "../../assets/images/russian.png";
import Turkish from "../../assets/images/turkish.png";
import Mnemonika from "../../assets/images/mnemonika.png";
import Kids from "../../assets/images/kids.png";

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
      img: "https://picsum.photos/390/200",
    },

    {
      id: 2,
      name: "Ingliz tili",
      description: "(10 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },

    {
      id: 3,
      name: "Turk tili",
      description: "(12 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },
    {
      id: 4,
      name: "Rus tili",
      description: "(10 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },

    {
      id: 5,
      name: "Arab tili, CEFR",
      description: "(10 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },

    {
      id: 6,
      name: "Ingliz tili, IELTS",
      description: "(12 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },
    {
      id: 7,
      name: "Math in English",
      description: "(12 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },
    {
      id: 8,
      name: "SAT",
      description: "(12 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },
    {
      id: 9,
      name: "Bushro kids",
      description: "(20 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
    },
    {
      id: 10,
      name: "Maktabgacha ta'lim",
      description: "(20 ta o'rin mavjud)",
      img: "https://picsum.photos/390/200",
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
