import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Branches = () => {
  const [branchNumber, setBranchNumber] = useState(1);
  useEffect(() => {}, [branchNumber]);

  return (
    <>
      <section className="map-section">
        {branchNumber === 1 ? (
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5885.666768122831!2d69.28670207065149!3d41.351033887024144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef357f62d2d05%3A0x2947f4584c8c5d3f!2sBushro%20o&#39;uv%20markazi!5e0!3m2!1sru!2s!4v1641576589577!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ) : (
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.076321147275!2d69.2188748150504!3d41.35069480623253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c6bc8ca661d%3A0xd74b44fc8fe0f672!2z0KLRg9GA0LjQvdGB0LrQuNC5INCf0L7Qu9C40YLQtdGF0L3QuNGH0LXRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sru!2s!4v1641576948664!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </section>
      <section className="branches" id="branches">
        <ul className="centerLocations container">
          <li className="centerLocationItems" onClick={() => setBranchNumber(1)}>
            <span>1-filal:</span>
            <div className="locationWrapper">
              <FontAwesomeIcon className="locat" icon={faMapMarkerAlt} />
              <p>Manzil: Yunusobod tumani, Chinobod ko`chasi 1</p>
            </div>
            <div className="numbersWrapper">
              <FontAwesomeIcon className="phone" icon={faPhoneAlt} />
              <div className="numbers">
                <span>+998992106080</span>
              </div>
            </div>
          </li>
          <li className="centerLocationItems" onClick={() => setBranchNumber(2)}>
            <span>2-filial:</span>
            <div className="locationWrapper">
              <FontAwesomeIcon className="locat" icon={faMapMarkerAlt} />
              <p>Nazarbek qoʻrgʻoni, Harakat M.F.Y, Beruniy shox koʻchasi, 29-A uy</p>
            </div>
            <div className="numbersWrapper">
              <FontAwesomeIcon className="phone" icon={faPhoneAlt} />
              <div className="numbers">
                <span>+998993407080</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Branches;
