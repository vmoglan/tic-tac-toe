import React from "react";
import ReactDOM from "react-dom";
import GameUI from "./ui/GameUI";
import Game from "./model/Game";
import "./index.css";

ReactDOM.render(<GameUI game={new Game()} />, document.getElementById("root"));
