import Link from "next/link";
import Image from "next/image";
import Logo from "../../src/assets/images/logo.png";
import { useRef, useState, useEffect } from "react";
import Loader from "../../src/assets/images/loader.gif";
import moment from "moment";
const News = () => {
  const elBtn = useRef(null);
  const elDiv = useRef(null);
  const elFile = useRef(null);
  const elNameInput = useRef(null);
  const elInfoInput = useRef(null);
  const message = useRef(null);

  const [data, setData] = useState([]);

  const fetchDatas = async () => {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch("https://bushro-backend.herokuapp.com/news", {
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
      console.log(requests.data);
      setData(requests.data);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  useEffect(() => {}, [data]);

  async function handleDeleteData(evt) {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch(
      `https://bushro-backend.herokuapp.com/news/${evt.target.dataset.id}`,
      {
        headers: {
          token: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );

    const result = await res.json();
    fetchDatas();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const formData = new FormData();
    formData.append("file", elFile.current.files[0]);
    formData.append("news_title", elNameInput.current.value);
    formData.append("news_info", elInfoInput.current.value);

    const res = await fetch("https://bushro-backend.herokuapp.com/news", {
      headers: {
        token: token,
      },
      method: "POST",
      body: formData,
    })
      .then(res => {
        if (res.status === 200) {
          message.current.textContent = "Muvaffaqiyatli yuborildi✅";
        }
        res.json();
      })
      .then(data => console.log(data));

    fetchDatas();
  }

  const openModal = () => {
    elDiv.current.classList.add("active__commentsForm");
  };
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

        <h1 className="admin__heading">Yangiliklar</h1>

        <button ref={elBtn} className="newComment" onClick={openModal}>
          Yangilik yaratish
        </button>

        {data.length > 0 ? (
          <>
            <div className="table__wrapper">
              <table>
                <tbody>
                  <tr>
                    <th>Sana</th>
                    <th>Sarlavha</th>
                    <th>Rasm</th>
                    <th>Izohi</th>
                    <th>O`chirish</th>
                  </tr>
                  {data.map(row => (
                    <tr key={row.news_id}>
                      <td>{moment(`${row.news_date}`).format("L")}</td>
                      <td>{row.news_name}</td>
                      <td>
                        <Image
                          src={`https://bushro-backend.herokuapp.com/${row.news_img}`}
                          width="200"
                          height="100"
                          loader={() =>
                            `https://bushro-backend.herokuapp.com/${row.news_img}`
                          }
                          alt="Bayram"
                        />
                      </td>
                      <td>{row.news_intro}</td>
                      <td>
                        <button
                          className="delete-btn"
                          data-id={`${row.news_id}`}
                          onDoubleClick={handleDeleteData}
                          title="Ehtiyot bo`ling! O`chirish uchun 2 marta bosing"
                        >
                          O`chirish
                        </button>
                      </td>
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

      {/* ========= */}

      <div className="commentsForm" ref={elDiv}>
        <form className="commentsForm__form" method="post" onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }} ref={message}></h3>
          <input className="commentsForm__input" type="file" ref={elFile} />
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Sarlavhani kiriting"
            ref={elNameInput}
            maxLength="55"
          />
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Izohni kiriting"
            maxLength="200"
            ref={elInfoInput}
          />
          <button className="commentsForm__btn" type="submit">
            Qo`shish
          </button>

          <button
            id="exit"
            type="button"
            onClick={() => {
              elDiv.current.classList.remove("active__commentsForm");
            }}
          >
            &#10006;
          </button>
        </form>
      </div>
    </>
  );
};

export default News;
