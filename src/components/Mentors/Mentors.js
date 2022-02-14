import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import stars from "../../assets/images/stars.svg";

function Mentors() {
  const [SlidesCount, setSlidesCount] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setSlidesCount(1);
    } else if (window.innerWidth < 800) {
      setSlidesCount(2);
    } else {
      setSlidesCount(3);
    }
  }, []);

  const mentors = [
    {
      id: 1,
      name: "Jenny Wilson",
      description: "UX UI Designer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      description: "Developer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 3,
      name: "Robert Fox",
      description: "Digital Marketer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 1,
      name: "Jenny Wilson",
      description: "UX UI Designer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      description: "Developer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 3,
      name: "Robert Fox",
      description: "Digital Marketer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },

    {
      id: 4,
      name: "Jenny Wilson",
      description: "UX UI Designer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 5,
      name: "Guy Hawkins",
      description: "Developer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
    {
      id: 6,
      name: "Robert Fox",
      description: "Digital Marketer",
      img: "https://picsum.photos/390/200",
      reviews: "(132 reviews)",
    },
  ];

  return (
    <>
      <section className="mentors">
        <div className="container">
          <h2 className="courses__heading">Our Top Mentors</h2>
          <p className="courses__desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia.
          </p>
          <Swiper
            className="mentors__list"
            spaceBetween={35}
            slidesPerView={SlidesCount}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {mentors.length > 0 &&
              mentors.map(e => (
                <SwiperSlide className="mentors__item" key={Math.random()}>
                  <Image
                    className="coureses__item__img"
                    src={e.img}
                    alt="template"
                    width="390"
                    height="200"
                  />
                  <div className="info-box">
                    <h3 className="info-box__heading info-box__heading--margin">
                      {e.name}
                    </h3>
                    <p className="info-box__desc info-box__desc--margin">
                      {e.description}
                    </p>
                    <span className="info-box-star">
                      <Image src={stars} alt="stars" width="105" height="16" />
                    </span>
                    <span className="info-box__desc">{e.reviews}</span>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Mentors;
