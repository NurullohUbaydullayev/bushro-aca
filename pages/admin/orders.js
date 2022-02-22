import Router from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../src/assets/images/logo.png";
import Loader from "../../src/assets/images/loader.gif";
const Orders = () => {
  const [data, setData] = useState([]);

  const API = "https://api.bushroacademy.uz";

  useEffect(() => {
    async function func() {
      const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;
      const res = await fetch(API + "/allBooking", {
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
        setData(requests.data.reverse());
      }
    }

    func();
  }, []);

  useEffect(() => {}, [data]);
  return (
    <div>
      {" "}
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
      <h1 className="admin__heading">Arizalar</h1>
      {data.length > 0 ? (
        <>
          <div className="table__wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Arizachining idsi</th>
                  <th>Arizachining ismi</th>
                  <th>Telefon raqami</th>
                  <th>Email addressi</th>
                </tr>
                {data.map(row => (
                  <tr key={row.booking_id}>
                    <td>{row.booking_id}</td>
                    <td>{row.booking_name}</td>
                    <td>{row.booking_phone}</td>
                    <td>{row.booking_gmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="loader_wrapper">
          <Image src={Loader} alt="loader" width="70" height="70" />
        </div>
      )}
    </div>
  );
};
export default Orders;
