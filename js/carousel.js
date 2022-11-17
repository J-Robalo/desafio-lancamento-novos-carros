function controlCarousel() {
  const items = document.querySelectorAll(".item-carousel");

  let currentEl;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("show-image")) {
      currentEl = i;
    }
  }

  items[currentEl].classList.remove("show-image");

  if (currentEl == items.length - 1) {
    items[0].classList.add("show-image");
  } else {
    items[currentEl + 1].classList.add("show-image");
  }

  setTimeout(() => {
    controlCarousel();
  }, 3000);
}

setTimeout(() => {
  controlCarousel();
}, 3000);
