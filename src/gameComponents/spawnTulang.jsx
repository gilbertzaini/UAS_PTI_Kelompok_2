import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Bone from "../img/bone.png";
import Tidur from "../img/tidur.png";
import AnjingBangun from "../img/bangun.png";

export default function SpawnTulang({ Turn, updateTurn, updateEnd }) {
  const [x, setX] = useState(0);
  const [bombs, setBombs] = useState(0);
  const jsn = JSON.parse(localStorage.getItem("listPlayer"));
  console.log(jsn);
  const spawnRef = useRef(null);
  const endRef = useRef(null);
  const buttonsRef = useRef(null);
  const anjingRef = useRef(null);

  console.log("Length: " + jsn.length);

  function bonePicked() {
    const pick = document.getElementById("picked");
    console.log(pick);
    if (pick) {
      pick.play();
    }
  }

  function Bangun() {
    anjingRef.current.src = AnjingBangun;
    anjingRef.current.style.width = "50%";

    const bark = document.getElementById("bark");
    console.log(bark);
    bark.play();
  }

  function Lose() {
    endRef.current.innerHTML = "Oh no! You wake him up";
    document.getElementById("timer").innerHTML = "Time Left: --:--";

    const bones = document.querySelectorAll(".bone.col");
    bones.forEach((bone) => bone.remove());

    Bangun();
    updateEnd(true);
  }

  function playOnHover() {
    const tulang = document.getElementById("tulang");

    tulang.play();
  }

  useEffect(() => {
    if (jsn.length < 3) {
      setX(3);
    } else if (jsn.length < 6) {
      setX(4);
    } else if (jsn.length < 9) {
      setX(5);
    } else setX(6);
  }, [jsn.length]);

  useEffect(() => {
    if (spawnRef.current) {
      console.log(spawnRef.current);
      let rows = [];
      for (let i = 0; i < x; i++) {
        let buttons = [];
        for (let j = 0; j < x; j++) {
          const chance = Math.floor(Math.random() * (x * 2.3 + 1));
          console.log("chance = " + chance);
          console.log("x = " + x);
          buttons.push(
            <button
              onClick={(event) => {
                const element = event.currentTarget;
                console.log("Turn: " + Turn + " - " + jsn[Turn].name);
                bonePicked();
                element.disabled = true;
                element.style.opacity = 0;
                if (chance < x && bombs < x) {
                  Lose();
                  console.log("BOM");
                }
              }}
              onMouseEnter={playOnHover}
              className={`bone col ${
                chance < x && bombs < x ? "bomb" : ""
              } my-2 mx-4`}
            >
              <img src={Bone} alt="bone" />
            </button>
          );
          if (chance < x && bombs < x) {
            console.log("bomb added");
            setBombs(bombs + 1);
          }
        }
        rows.push(<div className="row">{buttons}</div>);
      }
      ReactDOM.render(
        <React.Fragment>{rows}</React.Fragment>,
        spawnRef.current
      );

      console.log(document.querySelectorAll(".bone.col"));
    }
  }, [x]);

  useEffect(() => {
    const bones = document.querySelectorAll(".bone.col");
    bones.forEach((bone) => {
      if (!bone.classList.contains("bomb")) {
        bone.addEventListener("click", () => {
          if (Turn === jsn.length - 1) updateTurn(0);
          else updateTurn(Turn + 1);
        });
      }
    });
  }, [x, jsn]);

  return (
    <div className="d-flex flex-column align-items-center">
      <img id="anjing" alt="gambar anjing" src={Tidur} ref={anjingRef} />
      <div id="spawn" ref={spawnRef} />
      <h5 id="endMessage" ref={endRef} className="mx-auto">
        Steal Spike's bones, but don't wake him up
      </h5>
      <div id="endButtons" ref={buttonsRef} />
    </div>
  );
}
