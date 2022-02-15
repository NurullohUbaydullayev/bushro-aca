import Link from "next/link";
import Image from "next/image";
import Logo from "../../src/assets/images/logo.png";
import { useRef, useState, useEffect } from "react";
import Loader from "../../src/assets/images/loader.gif";
const Comments = () => {
  const elBtn = useRef(null);
  const elDiv = useRef(null);
  const elFile = useRef(null);
  const elNameInput = useRef(null);
  const elInfoInput = useRef(null);
  const message = useRef(null);
  const [data, setData] = useState([]);

  const API = "https://bushro-backend.herokuapp.com";

  async function fetchDatas() {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch(API + "/allComments", {
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
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  useEffect(() => {}, [data]);

  async function handleDeleteData(evt) {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const res = await fetch(`${API}/comment/${evt.target.dataset.id}`, {
      headers: {
        token: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    const result = await res.json();
    fetchDatas();
  }

  const handleSubmitForm = e => {
    e.preventDefault();

    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;

    const inputFileValue = elFile.current.files[0];
    const inputNameValue = elNameInput.current.value;
    const inputInfoValue = elInfoInput.current.value;

    const formData = new FormData();

    formData.append("file", inputFileValue);
    formData.append("comment_name", inputNameValue);
    formData.append("comment_info", inputInfoValue);
    console.log(formData);

    fetch(API + "/newComment", {
      method: "POST",
      headers: {
        token: token,
      },
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
  };

  const openModal = () => {
    elDiv.current.classList.toggle("active__commentsForm");
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

        <h1 className="admin__heading">Izohlar</h1>

        <button ref={elBtn} className="newComment" onClick={openModal}>
          Izoh yaratish
        </button>

        {data.length > 0 ? (
          <>
            <div className="table__wrapper">
              <table>
                <tbody>
                  <tr>
                    <th>Rasm</th>
                    <th>Ism</th>
                    <th>Izohi</th>
                    <th>O`chirish</th>
                  </tr>
                  {data.map(row => (
                    <tr key={row.comment_id}>
                      <td>
                        <Image
                          src={`https://bushro-backend.herokuapp.com/${row.comment_img}`}
                          width="100"
                          height="100"
                          alt=""
                          loader={() =>
                            `https://bushro-backend.herokuapp.com/${row.comment_img}`
                          }
                        />
                      </td>
                      <td>{row.comment_name}</td>
                      <td>{row.comment_info}</td>
                      <td>
                        <button
                          className="delete-btn"
                          data-id={`${row.comment_id}`}
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
        <form className="commentsForm__form" method="post" onSubmit={handleSubmitForm}>
          <h3 style={{ textAlign: "center" }} ref={message}></h3>
          <input className="commentsForm__input" type="file" ref={elFile} />
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Ismingiz"
            ref={elNameInput}
          />
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Izohingiz"
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

export default Comments;
