import double from "assets/img/IMG_2902.jpeg";
import triple from "assets/img/IMG_2906.jpeg";
import quadruple from "assets/img/IMG_2889.jpeg";

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
            <a href="tel:89883204433" rel="noreferrer">
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
            <a href="tel:89883204433" target="_blank" rel="noreferrer">
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
            <a href="tel:89883204433" target="_blank" rel="noreferrer">
              <button>узнать цену</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
