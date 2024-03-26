import map from "assets/ico/map.svg";

import "./Footer.scss";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__text">
          <ul>
            <li>Контакты</li>
            <li>
              <a href="tel:89883204433">89883204433</a> - Александр
            </li>
            <li>
              <a href="tel:89184204237">89184204237</a> - Давид
            </li>
          </ul>
          <ul>
            <li>Адрес</li>
            <li>
              <a
                href="https://yandex.ru/maps/10995/krasnodar-krai/house/ulitsa_voina_shembelidi_1/Z04YdAFlSkYDQFpufXV5dXxnYg==/?ll=37.265334%2C44.984046&amp;z=16.78"
                target="_black"
              >
                г-к Анапа, поселок Витязео, улица Воина Шембелиди, дом 1
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__map">
          <a
            href="https://yandex.ru/maps/10995/krasnodar-krai/house/ulitsa_voina_shembelidi_1/Z04YdAFlSkYDQFpufXV5dXxnYg==/?ll=37.265334%2C44.984046&amp;z=16.78"
            target="_black"
          >
            <img src={map} alt="map" />
          </a>
        </div>
        <p className="copyright">© Т. Д. Габулян, {year}</p>
      </div>
    </div>
  );
}
