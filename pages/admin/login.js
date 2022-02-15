import Router from "next/router";
import { useRef, useState } from "react";

const Login = () => {
  const elUsernameInput = useRef(null);
  const elPasswordInput = useRef(null);
  const [message, setMessage] = useState("");

  const API = "https://bushro-backend.herokuapp.com";

  async function handleSubmit(evt) {
    evt.preventDefault();

    const res = await fetch(API + "/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: elUsernameInput.current.value,
        password: elPasswordInput.current.value,
      }),
    });

    if (res.status === 200) {
      const { token } = await res.json();
      window.localStorage.setItem("auth__token", JSON.stringify(token));
      Router.push("/admin");
    } else if (res.status === 400) {
      setMessage("Username yoki parol xato! Qaytadan urunib ko'ring");
    }
  }

  return (
    <>
      <div className="containerr p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              ref={elUsernameInput}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Parol
            </label>
            <input
              ref={elPasswordInput}
              className="form-control"
              id="exampleFormControlInput2"
              rows="3"
              type="password"
              required
            ></input>
          </div>

          <button type="submit" className="btn btn-primary w-25">
            Yuborish
          </button>
        </form>

        <h1 className="mt-3 fs-3 p-3 mb-2 bg-danger text-white">{message}</h1>
      </div>
    </>
  );
};

export default Login;
