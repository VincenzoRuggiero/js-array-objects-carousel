const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const imgDiv = document.querySelector(".carousel-image");
const btnUp = document.querySelector(".previous");
const btnDown = document.querySelector(".next");

let i = 0;

next();
previous();

images.forEach((image, index) => {
  let currentImg = image.image;

  if (index === i) {
    let imgItem = document.createElement("div");
    imgItem.classList.add(".my_carousel-item.active");
    imgItem.innerHTML = `<div class="my_carousel-item.active">
        <img src="${currentImg}" alt="${index} image">
     </div>`;
    imgDiv.appendChild(imgItem);
  }
});

function next() {
  btnDown.addEventListener("click", () => {
    i++;
    if (i > images.length - 1) {
      i = 0;
      imgItem.classList.remove(".my_carousel-item.active");
    }
  });
}

function previous() {
  btnUp.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = images.length - 1;
      imgItem.classList.remove(".my_carousel-item.active");
    }
  });
}
