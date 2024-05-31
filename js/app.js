"use strict";
import {card} from "../components/cardComponent.js";
import { getData } from "../store/fetchapi.js";
import { getUser } from "../components/Users.js";


let reanderArea = document.querySelector("#reanDerArea");
let userReander = document.querySelector("#userReander");
// let base_url = "http://127.0.0.1:5500/jsonTest/data/product.json";

// fetch(base_url)
//     .then((res) => res.json() )
//     .then((data) =>{
//         let products = data;
//         console.log(products)
//         products.map((products) => reanderArea.innerHTML += card(products));
//     })
// fetch api with async funtion 
let product=await getData("Products");
product.map((products) => reanderArea.innerHTML += card(products));
let user = await getData("Users")
user.map((user) => userReander.innerHTML += getUser(user));
console.log(product);
console.log(user)