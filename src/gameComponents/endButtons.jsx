import React from "react";
import { Link } from "react-router-dom";

export default function EndButtons() {
  return (
    <div id="end">
      <Link to="/">
        <button
          onClick="sessionStorage.clear()"
          className="mx-2 my-3 rounded-2"
        >
          Back to Home
        </button>
      </Link>
      <button
        onClick={() => window.location.reload()}
        className="mx-2 my-3 rounded-2"
      >
        Play Again
      </button>
    </div>
  );
}
