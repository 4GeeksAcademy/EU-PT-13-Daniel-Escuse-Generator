/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const randomExcuse = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  let first = who[randomExcuse(who)];
  let second = action[randomExcuse(action)];
  let third = what[randomExcuse(what)];
  let forth = when[randomExcuse(when)];

  document.querySelector("#excuse").innerHTML =
    first + " " + second + " " + third + " " + forth;


};
