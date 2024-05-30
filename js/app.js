"use strict";
import {card} from "../components/cardComponent.js";


let reanderArea = document.querySelector("#reanDerArea");
let base_url = "http://127.0.0.1:5500/jsonTest/data/product.json";

fetch(base_url)
    .then((res) => res.json() )
    .then((data) =>{
        let products = data;
        console.log(products)
        products.map((products) => reanderArea.innerHTML += card(products));
    })