import Image from "next/image";
import Childrens from "../../assets/images/childrens.png";
import Marker from "../../assets/images/marker.png";
const Informations = () => {
  return (
    <>
      <section className="info-section">
        <div className="container">
          <div className="imi">
            <Image
              className="child-img"
              src={Childrens}
              alt="photo"
              width={620}
              height={820}
            />
          </div>

          <div className="info__content">
            <h2 className="info__content-header">
              Arab tili va boshqa tillarni o`rgatishga
            </h2>
            <strong className="info__strong">ixtisoslashgan o`quv markazi.</strong>
            <ul className="info__list">
              <li className="info__item">
                <Image src={Marker} alt="icon" width={38} height={38} />
                <p>Malakali ustozlar!</p>
              </li>
              <li className="info__item">
                <Image src={Marker} alt="icon" width={38} height={38} />
                <p>Qiziqarli uslub!</p>
              </li>
              <li className="info__item">
                <Image src={Marker} alt="icon" width={38} height={38} />
                <p>Ajoyib ta`lim metodikasi!</p>
              </li>
              <li className="info__item">
                <Image src={Marker} alt="icon" width={38} height={38} />
                <p>Qulay narx!</p>
              </li>
            </ul>
            <button className="info__btn">Kurslar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Informations;
