import FirstDisplay from "../FirstDisplay/FirstDisplay";
import SecondDisplay from "../SecondDisplay/SecondDisplay";
import ThirdDisplay from "../ThirdDisplay/ThirdDisplay";
import Rooms from "../Rooms/Rooms";
import BesideUs from "../BesideUs/BesideUs";
import Footer from "../Footer/Footer";

import "./App.scss";

export default function App() {
  return (
    <>
      <FirstDisplay />
      <main>
        <SecondDisplay />
        <ThirdDisplay />
        <Rooms />
        <BesideUs />
      </main>
      <Footer />
    </>
  );
}
