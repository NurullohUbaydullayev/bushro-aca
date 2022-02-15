import Link from "next/link";

const PassTests = () => {
  return (
    <>
      <section className="tests-section">
        <div className="container">
          <h2 className="tests__header">Testni yeching va til bilish darajangizni</h2>
          <p className="tests__strong">aniqlang va ro`yxatdan o`ting!</p>

          <p className="tests__text">
            Testda yuqori natijaga erishgan talabalar uchun maxsus chegirma taqdim
            etiladi!
          </p>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe82X_jibwpANL7siFYG1VqpQHtwKLsqRT9XiRTo-E5K7wxqA/viewform">
            <a className="tests__btn" target="_blank">
              Ro`yxatdan o`tish
            </a>
          </Link>
          {/* <button className="tests__btn">Ro`yxatdan o`tish</button> */}
        </div>
      </section>
    </>
  );
};

export default PassTests;
