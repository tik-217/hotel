import logo from "assets/ico/logo.svg";
import vk from "assets/ico/vk.svg";
import instagram from "assets/ico/instagram.svg";
import link from "assets/ico/link.svg";
import menu from "assets/ico/menu.svg";
import close from "assets/ico/close.svg";
import {  useRef } from "react";

import "./FirstDisplay.scss";

export default function FirstDisplay() {
  const menuRef = useRef(null);

  const menuElRef = useRef(null);

  function closeMenu() {
    menuRef.current.style.opacity = 0;
    menuRef.current.style.zIndex = -1;
    menuRef.current.style.height = "0%";
  }

  function openMenu() {
    menuRef.current.style.opacity = 1;
    menuRef.current.style.zIndex = 10;
    menuRef.current.style.height = "100%";
  }

  function scroll() {
    menuElRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  return (
    <>
      <div className="first-display__wrapper">
        <div className="first-display__background"></div>
        <div className="first-display">
          <header>
            <div className="first-display__logo">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul>
                <li onClick={() => scroll()}>гостиница</li>
                <li>номера</li>
                <li>контакты</li>
              </ul>
            </nav>
            <div className="first-display__icons">
              <a href="tel:89883204433">8-(988)-320-44-33</a>
              <div className="first-display__icons_ico">
                <a
                  href="https://vk.com/kalmar_vityazevo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vk} alt="vk" />
                </a>
                <a
                  href="https://instagram.com/david_gabulyan?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
            <div className="first-display__menu-open">
              <img src={menu} alt="menu" onClick={() => openMenu()} />
            </div>
            <menu ref={menuRef}>
              <img
                src={close}
                alt="close"
                className="first-display__menu-close"
                onClick={() => closeMenu()}
              />
              <nav>
                <ul>
                  <li>гостиница</li>
                  <li>номера</li>
                  <li>контакты</li>
                </ul>
              </nav>
              <div className="first-display__icons">
                <a href="tel:89883204433">8-(988)-320-44-33</a>
                <div className="first-display__icons_ico">
                  <a
                    href="https://vk.com/kalmar_vityazevo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={vk} alt="" />
                  </a>
                  <a
                    href="https://instagram.com/david_gabulyan?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="" />
                  </a>
                </div>
              </div>
              <div className="first-display__text_link">
                <a href="mailto:tigran.gabulyan.2001@mail.ru">
                  <img src={link} alt="" />
                  <p>tigran.gabulyan.2001@mail.ru</p>
                </a>
              </div>
            </menu>
          </header>

          <div className="first-display__text">
            <div className="first-display__text_link">
              <a href="mailto:tigran.gabulyan.2001@mail.ru">
                <img src={link} alt="" />
                <p>tigran.gabulyan.2001@mail.ru</p>
              </a>
            </div>
            <div className="first-display__text_right">
              <h2>Забронировать номер в нашем отеле</h2>
              <h5>бронирование по телефону</h5>
              <a href="tel:89883204433">
                <button>связаться</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
