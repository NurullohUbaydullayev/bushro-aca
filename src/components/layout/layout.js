import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Images
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/phone.png";
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.location.pathname == "/about") {
      elHeader.current.classList.add("about__header");
    } else {
      elHeader.current.classList.remove("about__header");
    }
  }, []);

  const elHamburger = useRef(null);
  const elNavbar = useRef(null);
  const logo = useRef(null);
  const register = useRef(null);
  const elHeader = useRef(null);

  // Form Refs
  const elUsernameInput = useRef(null);
  const elPhoneInput = useRef(null);
  const elEmailInput = useRef(null);
  const message = useRef(null);

  const [isHamOpen, setHamOpen] = useState(false);

  const handleRegisterClick = evt => {
    register.current.classList.add("register-modal--active");
    elNavbar.current.classList.remove("header__nav-mobile");

    setHamOpen(!isHamOpen);
    elHamburger.current.childNodes[0].style.transform = "rotateZ(0deg) translate(0, 0)";
    elHamburger.current.childNodes[2].style.transform = "rotateZ(0deg) translate(0, 0)";

    elHamburger.current.childNodes[1].style.transform = "translateX(0px)";
    elHamburger.current.childNodes[1].style.opacity = "1";
  };

  const handleModalCloseClick = evt => {
    if (evt.target.classList.contains("register-modal--active")) {
      register.current.classList.remove("register-modal--active");
    }
  };

  const handleHamburgerClick = evt => {
    if (!isHamOpen) {
      logo.current.style.width = "160px";
      elNavbar.current.classList.add("header__nav-mobile");
      setHamOpen(!isHamOpen);
      elHamburger.current.childNodes[0].style.transform =
        "translate(0, 10px) rotate(45deg)";
      elHamburger.current.childNodes[2].style.transform =
        "translate(0px, -10px) rotate(-45deg)";

      elHamburger.current.childNodes[1].style.transform = "translateX(20px)";
      elHamburger.current.childNodes[1].style.opacity = "0";
    } else {
      elNavbar.current.classList.remove("header__nav-mobile");

      setHamOpen(!isHamOpen);
      elHamburger.current.childNodes[0].style.transform = "rotateZ(0deg) translate(0, 0)";
      elHamburger.current.childNodes[2].style.transform = "rotateZ(0deg) translate(0, 0)";

      elHamburger.current.childNodes[1].style.transform = "translateX(0px)";
      elHamburger.current.childNodes[1].style.opacity = "1";
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("https://bushro-backend.herokuapp.com/newBooking", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: elUsernameInput.current.value,
        phone: elPhoneInput.current.value,
        email: elEmailInput.current.value,
      }),
    });

    if (res.status === 200) {
      message.current.textContent = "Muvaffaqiyatli yuborildi✅";
    }
  }

  return (
    <>
      <header className="header" ref={elHeader}>
        <div className="hamburger" ref={elHamburger} onClick={handleHamburgerClick}>
          <span className="hamburger-stack"></span>

          <span className="hamburger-stack"></span>

          <span className="hamburger-stack"></span>
        </div>
        <Link href="/">
          <a ref={logo} className="logo-link">
            <Image
              className="logo"
              src={Logo}
              alt="The logo image of Bushro academy uz"
              width="208"
              height="68"
            />
          </a>
        </Link>

        <nav className="header__nav " ref={elNavbar}>
          <ul className="header__nav-list">
            <li className="header__list-item">
              <Link href="/">
                <a className="header__link">Bosh sahifa</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="/about">
                <a className="header__link">Biz haqimizda</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="/#branches">
                <a className="header__link">Manzil</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="tel:+998993407080">
                <a className="header__link tel-number">
                  <Image
                    className="tel-icon"
                    src={Phone}
                    alt="Phone image"
                    aria-hidden="true"
                    width="18"
                    height="18"
                  />
                  <span>+998 (99) 340-70-80</span>
                </a>
              </Link>
            </li>
          </ul>
          <button className="header__register-btn" onClick={handleRegisterClick}>
            Kursga <span className="bla">Yozilish</span>
          </button>
        </nav>
      </header>

      <div ref={register} className="register-modal" onClick={handleModalCloseClick}>
        <div className="register__inner-modal">
          <h3 className="modal__heading">
            Kursga <strong>yozilish</strong>
          </h3>

          <h3 style={{ textAlign: "center" }} ref={message}></h3>

          <form className="register__form" onSubmit={handleSubmit}>
            <input
              ref={elUsernameInput}
              className="name-input"
              type="text"
              placeholder="Ismingiz"
              required
            />
            <br />
            <input
              ref={elPhoneInput}
              className="phone-input"
              type="text"
              placeholder="Telefon"
              required
            />
            <br />
            <input
              ref={elEmailInput}
              className="email-input"
              type="email"
              placeholder="E-mail pochta"
            />
            <br />

            <button type="submit">Yuborish</button>
          </form>
        </div>
      </div>

      {children}

      <footer>
        <div className="footerWrapper container">
          <ul className="footerLogos">
            <li>
              <div className="logoWrapper ">
                <Image src={Logo} className="bigLogo" alt="logo" />
              </div>
              <div className="logosWrapper">
                <div className="vkWrapper">
                  <Link href="https://t.me/bushroacademy">
                    <a target="_blank">
                      <i className="fa fa-telegram"></i>
                    </a>
                  </Link>
                </div>
                <div className="instagramWrapper">
                  <Link href="https://www.instagram.com/bushroacademy/">
                    <a target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <ul className="list">
            <span>Menu</span>
            <li className="listItems">
              <Link href="/">
                <a>Bosh sahifa</a>
              </Link>
            </li>
            <li className="listItems">
              <Link href="/about">
                <a>Biz haqimizda</a>
              </Link>
            </li>
            <li className="listItems">
              <Link href="/about#contact">
                <a>Kontakt</a>
              </Link>
            </li>
          </ul>
          <ul className="list2">
            <span>Manzil</span>
            <li>Asosiy filial</li>
            <div className="location">
              <FontAwesomeIcon className="locat" icon={faMapMarkerAlt} />
              <li> Manzil: Yunusobod tumani, Chinobod ko`chasi 1</li>
            </div>
          </ul>
          <ul className="list3">
            <span>Kontakt</span>
            <div className="iconPhone">
              <FontAwesomeIcon className="phone" icon={faPhoneAlt} />
              <div className="numbers">
                <li className="contactsLinkItems">
                  <Link href="tel:+998993407080">
                    <a>+998 (99) 340-70-80</a>
                  </Link>
                </li>
                <li className="contactsLinkItems">
                  <Link href="tel:+998994844406">
                    <a>+998 (99) 484 44 06</a>
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
