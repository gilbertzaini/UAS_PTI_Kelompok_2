import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./darkMode";
import SpawnTulang from "../gameComponents/spawnTulang";
import EndButtons from "../gameComponents/endButtons";
import ToggleSfx from "../gameComponents/toggleSfx";
import Timer from "../gameComponents/timer";
import Logo from "../img/logo.png";
import NightModeOff from "../img/nightmode.png";
import Back from "../img/back.png";

export default function Game() {
  const [turn, setTurn] = useState(0);
  const [end, setEnd] = useState(false);
  const jsn = JSON.parse(localStorage.getItem("listPlayer"));

  return (
    <div className="game">
      <div id="headerGame">
        <Link to="/">
          <button className="mx-2 mx-md-5 pt-5">
            <img src={Back} alt="back to home" />
          </button>
        </Link>
        <h1 className="pt-3">Don't Take Spike's Bones</h1>
        <img src={Logo} alt="logo" className="mx-auto" />
      </div>
      <hr />
      <div id="field">
        <div id="time" className="d-flex flex-column">
          <p>{`Turn: ${jsn[turn].name}`}</p>
          <Timer end={end} turn={turn} updateTurn={setTurn} />
        </div>
        <div
          id="gameField"
          className="mx-auto d-flex flex-column align-items-center"
        >
          <SpawnTulang Turn={turn} updateTurn={setTurn} updateEnd={setEnd} />
          {end && <EndButtons />}
        </div>
        <div id="sound">
          <ToggleSfx />
          <button id="dark" onClick={DarkMode} className="mt-3">
            <img src={NightModeOff} alt="dark" />
          </button>
        </div>
      </div>
    </div>
  );
}
