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
            <li>89883204433 - Александр</li>
            <li>89184204237 - Давид</li>
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
        {year !== "2023" ? (
          <p className="copyright">© Т. Д. Габулян, {year}</p>
        ) : (
          <p className="copyright">© Т. Д. Габулян, 2023-{year}</p>
        )}
      </div>
    </div>
  );
}
