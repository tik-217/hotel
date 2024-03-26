import double from "assets/img/1GHakzbEn5Q.jpg";
import triple from "assets/img/EbV63gjEp6s.jpg";
import quadruple from "assets/img/T-Zq04Jl5yU.jpg";

import "./Rooms.scss";

export default function Rooms() {
  return (
    <div className="rooms">
      <h3>Комнаты</h3>
      <div className="rooms__cards">
        <div className="cards">
          <div className="cards__img">
            <img src={double} alt="" />
          </div>
          <div className="cards__text">
            <h6>2-ух местный номер</h6>
            <hr />
            <p>
              Комфортабельный номер с кондиционером, телевизором, балконом,
              Wi-Fi, холодильником. Номер рассчитан на двоих и домашнего
              животного.
            </p>
            <a href="tel:89883204433">
              <button>узнать цену</button>
            </a>
          </div>
        </div>
        <div>
          <div className="cards__img">
            <img src={triple} alt="" />
          </div>
          <div className="cards__text">
            <h6>3-ех местный номер</h6>
            <hr />
            <p>
              Комфортабельный номер с кондиционером, телевизором, балконом,
              Wi-Fi, холодильником. Номер рассчитан на троих и домашнего
              животного.
            </p>
            <a href="tel:89883204433">
              <button>узнать цену</button>
            </a>
          </div>
        </div>
        <div>
          <div className="cards__img">
            <img src={quadruple} alt="" />
          </div>
          <div className="cards__text">
            <h6>4-ех местный номер</h6>
            <hr />
            <p>
              Комфортабельный номер с кондиционером, телевизором, балконом,
              Wi-Fi, холодильником. Номер рассчитан на четверых и домашнего
              животного.
            </p>
            <a href="tel:89883204433">
              <button>узнать цену</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
