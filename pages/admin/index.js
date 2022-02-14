import Link from "next/link";
import Image from "next/image";
import Logo from "../../src/assets/images/logo.png";

const AllBookings = () => {
  return (
    <>
      <div>
        <nav className="admin__navbar">
          <Image src={Logo} alt="bushro logo" height="60" />
          <ul className="admin__navbar__list">
            <li className="admin__navbar__list__item">
              <Link href="/admin">
                <a className="admin__navbar__list__item__link">Uy sahifa</a>
              </Link>
            </li>
            <li className="admin__navbar__list__item">
              <Link href="/admin/orders">
                <a className="admin__navbar__list__item__link">Arizalar</a>
              </Link>
            </li>
            <li className="admin__navbar__list__item">
              <Link href="/admin/news">
                <a className="admin__navbar__list__item__link">Yangiliklar</a>
              </Link>
            </li>
            <li className="admin__navbar__list__item">
              <Link href="/admin/comments">
                <a className="admin__navbar__list__item__link">Izohlar</a>
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="admin__heading">Admin Panelga Hush kelibsiz</h1>
      </div>
    </>
  );
};

export default AllBookings;
