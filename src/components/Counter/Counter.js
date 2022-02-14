import Image from "next/image";

import firstImg from "../../assets/images/i1.png";
import secondImg from "../../assets/images/i2.png";
import thirdImg from "../../assets/images/i3.png";

function Counter() {
  return (
    <>
      <section className="counter" id="counter">
        <div className="container">
          <ul className="counter__list">
            <li className="counter__item">
              <div className="counter__item__img-box">
                <Image
                  className="counter__item__img"
                  src={firstImg}
                  alt="image"
                  width="118"
                  height="118"
                />
              </div>
              <div className="counter__item__box">
                <h3 className="counter__item__heading">10</h3>
                <p className="counter__item__desc">
                  dan ortiq <br /> mutaxassislar
                </p>
              </div>
            </li>

            <li className="counter__item">
              <div className="counter__item__img-box">
                <Image
                  className="counter__item__img"
                  src={secondImg}
                  alt="image"
                  width="118"
                  height="118"
                />
              </div>
              <div className="counter__item__box counter__item__box--margin">
                <h3 className="counter__item__heading">5</h3>
                <p className="counter__item__desc">
                  ta til <br /> kurslari
                </p>
              </div>
            </li>

            <li className="counter__item">
              <div className="counter__item__img-box">
                <Image
                  className="counter__item__img"
                  src={thirdImg}
                  alt="image"
                  width="118"
                  height="118"
                />
              </div>
              <div className="counter__item__box counter__item__box--margin">
                <h3 className="counter__item__heading">2</h3>
                <p className="counter__item__desc">ta filial</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Counter;
