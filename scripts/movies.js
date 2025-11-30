"use strict";
const movies = [
  {
    poster: "../assets/posters/thesilenceofthelambs.jpg",
    title: "The Silence of the Lambs",
    desc: "...",
    trailer: "https://www.youtube.com/embed/6iB21hsprAQ",
  },
  {
    poster: "../assets/posters/blairwitchproject.jpg",
    title: "Blair Witch Project",
    desc: "...",
    trailer: "",
  },
  {
    poster: "../assets/posters/insidious.jpg",
    title: "Insidious",
    desc: "A family tries to save their son from a dark realm called The Further.",
    trailer: "https://www.youtube.com/embed/zuZnRUcoWos",
  },
  {
    poster: "../assets/posters/talktome.jpg",
    title: "Talk To Me",
    desc: "...",
    trailer: "",
  },
  {
    poster: "../assets/posters/perfectblue.jpg",
    title: "Perfect Blue",
    desc: "...",
    trailer: "",
  },
  {
    poster: "../assets/posters/junjiito.jpg",
    title: "Junji Ito",
    desc: "...",
    trailer: "",
  },

  {
    poster: "../assets/posters/scream.jpg",
    title: "Scream",
    desc: "...",
    trailer: "",
  },
];

let currentIndex = 0;

const carousel = document.getElementById("movie-carousel");
const trailerFrame = document.getElementById("movie-trailer");
const titleEl = document.getElementById("movie-title");
const descEl = document.getElementById("movie-desc");

function showMovie() {
  const movie = movies[currentIndex];

  trailerFrame.setAttribute("src", movie.trailer);
  titleEl.textContent = movie.title;
  descEl.textContent = movie.desc;
}

function nextMovie() {
  if (currentIndex === movies.length - 1) {
    currentIndex = 0; // loop back to first
  } else {
    currentIndex = currentIndex + 1;
  }
  showMovie();
}

function previousMovie() {
  if (currentIndex === 0) {
    currentIndex = movies.length - 1; // loop to last
  } else {
    currentIndex = currentIndex - 1;
  }
  showMovie();
}

function handleKey(e) {
  if (e.key === "ArrowLeft") {
    previousMovie();
  } else if (e.key === "ArrowRight") {
    nextMovie();
  }
}

function showMovie() {
  const movie = movies[currentIndex];

  trailerFrame.setAttribute("src", movie.trailer);
  titleEl.textContent = movie.title;
  descEl.textContent = movie.desc;

  // highlight active thumb
  const allThumbs = document.querySelectorAll(".movie-thumb");
  allThumbs.forEach((thumb, i) => {
    if (i === currentIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function buildCarousel() {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    const btn = document.createElement("button");
    btn.className = "movie-thumb";
    btn.setAttribute("data-index", i);

    btn.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} poster">
      <p>${movie.title}</p>
    `;

    btn.addEventListener("click", function () {
      currentIndex = i;
      showMovie();
    });

    carousel.appendChild(btn);
  }
}

document.addEventListener("keydown", handleKey);

buildCarousel();
showMovie();
document.addEventListener("keydown", handleKey);

buildCarousel();
showMovie();
// arrows beside the carousel
const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

if (leftBtn) {
  leftBtn.addEventListener("click", previousMovie);
}
if (rightBtn) {
  rightBtn.addEventListener("click", nextMovie);
}
