"use strict";

const movies = [
  {
    poster: "../assets/posters/thesilenceofthelambs.jpg",
    title: "The Silence of the Lambs",
    desc: "The Silence of the Lambs is a 1991 psychological horror-thriller about a young FBI trainee, Clarice Starling, who seeks the help of an imprisoned, manipulative cannibalistic psychiatrist, Dr. Hannibal Lecter, to catch another serial killer known as 'Buffalo Bill'. The film follows Starling as she engages in a dangerous 'chess match' with Lecter, who agrees to help only if she shares intimate details about her own life, while she simultaneously races to find Buffalo Bill before he can kill again.",
    trailer: "https://www.youtube.com/embed/6iB21hsprAQ",
  },
  {
    poster: "../assets/posters/blairwitchproject.jpg",
    title: "Blair Witch Project",
    desc: "The Blair Witch Project is a 1999 found-footage horror film about three student filmmakers who vanish while investigating a local legend in the woods of Burkittsville, Maryland. The movie, presented as their recovered video footage, documents their journey into the woods to make a documentary about the Blair Witch myth. As they become lost, their project turns into a terrifying struggle for survival involving disorienting sounds, creepy stick figures, and a growing sense of dread.",
    trailer: "https://www.youtube.com/embed/MBZ-POVsrlI",
  },
  {
    poster: "../assets/posters/insidious.jpg",
    title: "Insidious",
    desc: "The 2010 film Insidious is about a family whose son falls into a coma, and the story's horror comes from discovering that his soul is being targeted by demons and spirits from an astral plane called 'The Further'. The insidious nature is in the slow, subtle horror that takes over the family, which eventually reveals it wasn't their new house that was haunted, but their son who was the target.",
    trailer: "https://www.youtube.com/embed/ZuQuOnYnr3Q",
  },
  {
    poster: "../assets/posters/talktome.jpg",
    title: "Talk To Me",
    desc: "Talk to Me is an Australian supernatural horror film about a group of teenagers who discover they can conjure spirits by holding an embalmed hand, but quickly become addicted to the thrill, leading to a terrifying supernatural event that forces them to confront the dead or the living. The film explores the dangerous addiction of spiritual possession and its psychological impact, particularly on a teenage girl dealing with the grief of losing her mother.",
    trailer: "https://www.youtube.com/embed/aLAKJu9aJys",
  },
  {
    poster: "../assets/posters/scream.jpg",
    title: "Scream",
    desc: "Scream is a 1996 slasher film that follows high school student Sidney Prescott and her friends as they are targeted by a masked killer called Ghostface. The film is known for satirizing the tropes of the horror genre while still delivering suspenseful and scary moments. Ghostface torments victims with terrifying phone calls and uses horror movie clichés to stalk and kill them, and the characters must use their knowledge of horror movies to survive and identify the killer.",
    trailer: "https://www.youtube.com/embed/U0LETmDvuXc",
  },
  {
    poster: "../assets/posters/perfectblue.jpg",
    title: "Perfect Blue",
    desc: "Perfect Blue is a psychological thriller about Mima, a pop singer who quits her group to become an actress, only to be stalked by an obsessed fan and haunted by visions of her former self. The film blurs the lines between reality and fantasy as Mima's sense of self unravels due to the pressure of her new career and the stalking.",
    trailer: "https://www.youtube.com/embed/2O09gQC-KvA",
  },
  {
    poster: "../assets/posters/junjiito.jpg",
    title: "Junji Ito",
    desc: "Junji Ito Maniac: Japanese Tales of the Macabre is a 2023 Netflix anthology horror series that adapts 20 standalone stories from the acclaimed horror manga artist Junji Ito. The show features a variety of terrifying tales, including myths, ghost stories, and body horror, with each episode adapting one or two of Ito's distinctively bizarre and disturbing works, such as 'The Hanging Balloons'.",
    trailer: "https://www.youtube.com/embed/A6dZKab7mRU",
  },
  {
    poster: "../assets/posters/strangerthings.jpg",
    title: "Stranger Things",
    desc: "Stranger Things is a 1980s-set science fiction horror series about a group of children in the fictional town of Hawkins, Indiana, who encounter supernatural forces and secret government experiments. The story is kicked off by the mysterious disappearance of a young boy, Will Byers, and the simultaneous escape of a powerful young girl named Eleven from a nearby laboratory. Their efforts to find him uncover a secret portal to a dark, alternate dimension known as the 'Upside Down' and its terrifying creatures.",
    trailer: "https://www.youtube.com/embed/mnd7sFt5c3A",
  },
  {
    poster: "../assets/posters/theconjuring.jpg",
    title: "The Conjuring",
    desc: "The Conjuring is a feature-length supernatural horror film based on the allegedly true experiences of paranormal investigators Ed and Lorraine Warren. The movie depicts the Warrens assisting the Perron family after they move into a secluded farmhouse in Harrisville, Rhode Island, in 1971 and begin to experience disturbing paranormal activity.",
    trailer: "https://www.youtube.com/embed/ejMMn0t58Lc",
  },
  {
    poster: "../assets/posters/firstomen.jpg",
    title: "The First Omen",
    desc: "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
    trailer: "https://www.youtube.com/embed/lmN1Op8ygno",
  },
];

let currentIndex = 0;

const carousel = document.getElementById("movie-carousel");
const trailerFrame = document.getElementById("movie-trailer");
const titleEl = document.getElementById("movie-title");
const descEl = document.getElementById("movie-desc");
const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

// ----- core display -----
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

  //center active thumb in the carousel
  const activeThumb = carousel.querySelector(
    `.movie-thumb[data-index="${currentIndex}"]`
  );
  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

// ----- next/previous index -----
function nextMovie() {
  currentIndex++;
  if (currentIndex >= movies.length) {
    currentIndex = 0;
  }
  showMovie();
}

function previousMovie() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = movies.length - 1;
  }
  showMovie();
}

// ----- keyboard arrows -----
function handleKey(e) {
  if (e.key === "ArrowLeft") {
    previousMovie();
  } else if (e.key === "ArrowRight") {
    nextMovie();
  }
}

// ----- build posters in carousel -----
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

// arrows beside the carousel
if (leftBtn) {
  leftBtn.addEventListener("click", previousMovie);
}
if (rightBtn) {
  rightBtn.addEventListener("click", nextMovie);
}
