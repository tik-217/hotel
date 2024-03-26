import room1 from "assets/img/T-Zq04Jl5yU.jpg";
import room2 from "assets/img/P5L1Xx-MmjQ.jpg";
import room3 from "assets/img/6CH3JldJrIg.jpg";
import room4 from "assets/img/FGBwec-woXs.jpg";

import "./ThirdDisplay.scss";

export default function ThirdDisplay() {
  return (
    <div className="third-display">
      <div className="room">
        <div className="room__text">
          <h2>номера</h2>
          <p>уютные и комфортабельные номера со всеми удобствами</p>
        </div>
        <div className="room__room1">
          <img src={room1} alt="room1" />
        </div>
        <div className="room__room2">
          <img src={room2} alt="room2" />
        </div>
        <div className="room__room3">
          <img src={room3} alt="room3" />
        </div>
        <div className="room__room4">
          <img src={room4} alt="room4" />
        </div>
      </div>
    </div>
  );
}
