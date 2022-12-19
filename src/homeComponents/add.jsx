import { useState } from "react";
import { Link } from "react-router-dom";

function AddPlayer({ updateCount }) {
  const [playerName, setPlayerName] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    if (count < 12) {
      let nama = event.target.player.value;
      console.log(nama);
      if (nama === "") {
        nama = "Player " + (count + 1);
      }

      setPlayerName([...playerName, { name: nama }]);
      setCount(count + 1);
      updateCount(count + 1);
      localStorage.setItem(
        "listPlayer",
        JSON.stringify([...playerName, { name: nama }])
      );
    } else {
      alert("Max number of players reached");
    }
  }

  return (
    <form
      className="d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <input type="text" name="player" placeholder="New Player" />
      <br />
      <div id="buttons" className="mb-3">
        <button type="submit" className="mx-1 rounded-2">
          Add Player
        </button>
        <Link to="/game">
          <button className="mx-1 rounded-2" disabled={count === 0}>
            Play
          </button>
        </Link>
      </div>
      <br />
      <ul>
        {playerName.map((player) => (
          <li>{player.name}</li>
        ))}
      </ul>
    </form>
  );
}

export default AddPlayer;
