import React, { useState } from "react";
import Add from "../homeComponents/add";
import DarkMode from "./darkMode";
import Logo from "../img/logo.png";
import NightModeOff from "../img/nightmode.png";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <div id="header" className="d-flex flex-column align-items-center">
        <h1 className="pt-3">Don't Take Spike's Bones</h1>
        <img src={Logo} alt="logo" className="mx-auto mt-3" />
      </div>
      <hr />
      <button id="dark" onClick={DarkMode}>
        <img src={NightModeOff} alt="dark" />
      </button>
      <div id="no">
        <h4 className="text-center my-5 mx-auto">
          {count < 12 ? `Player ${count + 1}` : "Max Player"}
        </h4>
      </div>
      <div id="isi" className="d-flex flex-column">
        <div id="input" className="align-self-center">
          <Add updateCount={setCount} />
        </div>
      </div>
    </div>
  );
}

export default Home;
