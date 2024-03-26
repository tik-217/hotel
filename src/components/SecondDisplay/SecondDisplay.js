import flowers from "assets/img/pCK7o7JKljI.jpg";
import building from "assets/img/csItQ_5fcxA.jpg";
import link from "assets/ico/link.svg";

import "./SecondDisplay.scss";

export default function SecondDisplay() {
  return (
    <div className="second-display__wrapper">
      <div className="second-display__background"></div>
      <div className="second-display">
        <div className="gallery">
          <div className="gallery__images">
            <div className="gallery__images_flowers">
              <img src={flowers} alt="flowers" />
            </div>
            <div className="gallery__images_link">
              <a
                href="https://yandex.ru/maps/10995/krasnodar-krai/house/ulitsa_voina_shembelidi_1/Z04YdAFlSkYDQFpufXV5dXxnYg==/?ll=37.265334%2C44.984046&z=16.78"
                target="_black"
              >
                <img src={link} alt="link" />
                <span>где мы находимся</span>
              </a>
            </div>
            <div className="gallery__images_front">
              <h2>Фасад</h2>
              <p>во дворе имеются, столики и мангальная зона</p>
            </div>
            <div className="gallery__images_building">
              <img src={building} alt="building" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
