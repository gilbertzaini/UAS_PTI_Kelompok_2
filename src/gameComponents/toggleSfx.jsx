import { useRef } from "react";
import SoundOff from "../img/soundOff.png";
import SoundOn from "../img/soundOn.png";
import Bone from "../sfx/bone.mp3";
import Barks from "../sfx/barks.mp3";
import Picked from "../sfx/bonePicked.mp3";

export default function ToggleSfx() {
  const sfxRef = useRef(null);
  const barkRef = useRef(null);
  const pickedRef = useRef(null);
  const soundButtonRef = useRef(null);
  const soundImgRef = useRef(null);

  function handleClick() {
    if (soundImgRef.current.src === SoundOn) {
      soundImgRef.current.src = SoundOff;
      sfxRef.current.muted = true;
      barkRef.current.muted = true;
      pickedRef.current.muted = true;
    } else {
      soundImgRef.current.src = SoundOn;
      sfxRef.current.muted = false;
      barkRef.current.muted = false;
      pickedRef.current.muted = false;
    }
  }

  return (
    <div>
      <audio id="tulang" ref={sfxRef}>
        <source src={Bone} type="audio/mpeg" />
      </audio>
      <audio id="bark" ref={barkRef}>
        <source src={Barks} type="audio/mpeg" />
      </audio>
      <audio id="picked" ref={pickedRef}>
        <source src={Picked} type="audio/mpeg" />
      </audio>
      <button id="soundButton" ref={soundButtonRef} onClick={handleClick}>
        <img src={SoundOn} alt="Sound On/Off" ref={soundImgRef} />
      </button>
    </div>
  );
}
