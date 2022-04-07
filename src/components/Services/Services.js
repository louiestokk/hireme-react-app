import React from "react";
import "./Services.css";
import { AiFillCheckCircle } from "react-icons/ai";
const Services = () => {
  return (
    <div className="services">
      <h1>Så här funkar det.</h1>
      <p>
        Vi har gjort det enkelt. Inga bindningstider eller krav. Du betalatar
        endast 29kr per kontakt. Du väljer själv när och hur många kontakter du
        vill köpa.
      </p>
      <div className="service">
        <div className="service-item">
          <h5>Arbetsgivare rörlig</h5>
          <p>
            Tjänsten där ni som arbetsgivare tar kontakt och får ansökningar
            från kandidater. Givetvis betalar ni endast när ni vill få
            kontaktuppgifter till önskad kandidat.
          </p>
          <div className="rekrytering">
            <h5>Rekrytering</h5>

            <div className="rek-item">
              <p>
                {<AiFillCheckCircle />} <span>Okr per lyckad rekrytering</span>
              </p>
              <p>
                {<AiFillCheckCircle />}
                <span>Betala endast 29kr för kontaktuppgifter</span>
              </p>
            </div>
          </div>
          <button>Kom igångs kostnadsfritt </button>
        </div>
        <div className="service-item">
          <h5>Arbetsgivare fast</h5>
          <p>
            Tjänsten där ni som arbetsgivare tar kontakt och får ansökningar
            från kandidater. Obegränsat med kandidater och kontakter.
          </p>
          <div className="rekrytering">
            <h5>Rekrytering</h5>

            <div className="rek-item">
              <p>
                {<AiFillCheckCircle />} <span>Okr per lyckad rekrytering</span>
              </p>
              <p>
                {<AiFillCheckCircle />}
                <span>Betala 2999kr/mån "inga bindningstider"</span>
              </p>
            </div>
          </div>
          <button>Kom igångs kostnadsfritt </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
