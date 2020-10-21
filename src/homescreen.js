import "./css/homescreen.css";
import Flicking from "@egjs/flicking";

const flicking = new Flicking(".homescreen .container");
const dots = document.querySelectorAll(".dot");

flicking.on("change", e => {
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  dots[e.index].classList.add("active");
});
