import './mystyles.scss'
import React from 'react';
import { MiComponente } from './MiComponente';
import { createRoot } from "react-dom/client";

import foto from "./content/logo_1.png";
import {ByeComponente} from "./ByeComponente";


const user = "Sonia Salido";

console.log(`Hola ${user}`);


const img = document.createElement("img");
img.src= foto;
document.getElementById("imgContainer").appendChild(img);


console.log("Hola mundossss");

const numberA: number = 2;
const numberB: number = 3;

console.log(numberA + numberB);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <>
        <MiComponente />
        <ByeComponente />
    </>
);
