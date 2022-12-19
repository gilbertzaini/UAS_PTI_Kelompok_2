import { useState, useEffect } from "react";

export default function Timer({ end, turn, updateTurn }) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(1);
    setSeconds(0);
  }, [turn]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        updateTurn(turn + 1);
      }
    }, 1000);

    if (end) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds, end]);

  useEffect(() => {
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `Time Left: ${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }, [minutes, seconds]);

  return (
    <div>
      <p id="timer" />
    </div>
  );
}
