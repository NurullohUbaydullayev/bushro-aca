import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

import Downarrow from "../../assets/images/downarrow.png";

const Intro = () => {
  const contactList = useRef(null);

  function handleQuestionClick() {
    if (!contactList.current.classList.contains("contact-list--active")) {
      contactList.current.classList.add("contact-list--active");
    } else {
      contactList.current.classList.remove("contact-list--active");
    }
  }

  return (
    <section className="intro-section">
      <div className="intro">
        <h2 className="intro__heading">
          Bushro academy  <strong>Ilm va hikmat izzat kalitidir!</strong>
        </h2>
        <strong className="intro__contact-number">
          Batafsil ma`lumot uchun:
          <Link href="tel:+998993407080">
            <a> +998 (99) 340-70-80</a>
          </Link>
        </strong>

        <div className="intro__downarrow">
          <Link href="#counter">
            <a>
              <Image src={Downarrow} alt="Imagendjkj" width="24" height="24" />
            </a>
          </Link>
        </div>
      </div>
      <div className="question-icon-wrapper" onClick={handleQuestionClick}>
        <i
          className="fa fa-question-circle question-icon"
          aria-hidden="true"
          width="50"
          height="50"
        ></i>

        <ul ref={contactList} className="contact-list ">
          <li className="contact-list__item">
            <Link href="tel:+998993407080">
              <a>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Telefon</span>
              </a>
            </Link>
          </li>

          <li className="contact-list__item">
            <Link href="https://t.me/bushroacademy">
              <a>
                <i className="fa fa-telegram"></i>
                <span>Telegram</span>
              </a>
            </Link>
          </li>

          <li className="contact-list__item">
            <Link href="mailto:usmonfirdavsiy04@gmail.com">
              <a>
                <i className="fa fa-envelope"></i>
                <span>Email</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
