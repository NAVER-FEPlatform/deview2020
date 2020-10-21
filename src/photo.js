import "./css/photo.css";
import InfiniteGrid, { GridLayout } from "@egjs/infinitegrid";

const photoIcon = document.querySelector(".icon.photo");
const photoApp = document.querySelector(".photo-app");
let ig;
function getItems() {
  const items = [];

  for (let i = 1; i <= 30; ++i) {
    items.push(`<div class="item"><img src="/assets/photos/${i}.jpg" /></div>`);
  }
  return items;
}
photoIcon.addEventListener("click", () => {
  photoApp.style.display = "block";
  photoApp.style.opacity = "0";

  ig = new InfiniteGrid(".photo-app .container", {
    isOverflowScroll: true,
  });

  ig.setLayout(GridLayout, {
    margin: 5,
  });

  ig.on("prepend", () => {
    ig.prepend(getItems());
  });
  ig.prepend(getItems());
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      photoApp.style.opacity = "1";
    });
  });
});

const backButton = photoApp.querySelector(".back");

backButton.addEventListener("click", () => {
  // photoApp.style.display = "none";
  photoApp.style.opacity = "0";
  photoApp.addEventListener("transitionend", () => {
    ig.destroy();
    photoApp.style.display = "none";
  }, {
    once: true,
  });
});
