import { useRef } from "react";

const Contact = () => {
  const elUsernameInput = useRef(null);
  const elPhoneInput = useRef(null);
  const elEmailInput = useRef(null);
  const message = useRef(null);

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
      <section id="contact">
        <div className="container">
          <div className="block">
            <div className="image-block"></div>
            <div className="form-wrapper">
              <h2 className="contacts__heading">
                Kurslarga ro`yxatdan o`tishni istaysizmi? <br />
              </h2>

              <p className="contacts__title">
                Ushbu so`rovni to`ldiring va biz siz bilan aloqaga chiqamiz!
              </p>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div>
                  <input
                    ref={elUsernameInput}
                    className="contact__input"
                    type="text"
                    placeholder="Ismingiz"
                    required
                  />
                  <input
                    ref={elPhoneInput}
                    className="contact__input"
                    type="text"
                    placeholder="Telefon +998 ()"
                    required
                  />
                  <input
                    ref={elEmailInput}
                    className="contact__input"
                    type="text"
                    placeholder="Email pochtangiz, ixtiyoriy"
                  />
                </div>

                <button className="contact__submit">Submit</button>

                <h2 className="contact__message" ref={message}></h2>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
