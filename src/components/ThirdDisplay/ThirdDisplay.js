import room1 from "assets/img/IMG_2902.jpeg";
import room2 from "assets/img/IMG_2897.jpeg";
import room3 from "assets/img/6CH3JldJrIg.jpg";
import room4 from "assets/img/IMG_2933 3.jpeg";

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
