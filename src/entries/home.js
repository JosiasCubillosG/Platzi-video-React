import React from "react";
import {render} from "react-dom";
import Home from "../pages/containers/home";
// import Playlist from "../playlist/components/playlist";
import Data from "../api.json";


const homeContainer = document.getElementById("home-container");
// const holaMundo = <h1>Hola estudiantes!</h1>;
// ReactDOM.render(que voy a renderizar, donde lo hare);
//Debemos mandar Media como si fuera un elemento html para que react lo reconozca como componente
// render(<Media media="video" title="¿Por qué aprender React?" author="Josias Cubillos Gutierrez" imagen="../../../images/covers/bitcoin.jpg" />, app);
render(<Home data={Data} />, homeContainer);