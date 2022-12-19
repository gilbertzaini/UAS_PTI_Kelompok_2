import "../public/styles.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import Game from "./components/game";
import Weather from "./components/weather";
import { useEffect, useState } from "react";
import { getWeatherData } from "./services";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
