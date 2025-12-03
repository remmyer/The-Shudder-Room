"use strict";

const moviesBySubgenre = {
  paranormal: [
    {
      title: "Insidious",
      poster: "../assets/posters/insidious.jpg",
      desc: "A family discovers that their comatose son is a beacon for spirits from a dark realm called The Further.",
    },
    {
      title: "Talk To Me",
      poster: "../assets/posters/talktome.jpg",
      desc: "Teens use an embalmed hand to contact spirits, but the ritual becomes a dangerous addiction with horrific consequences.",
    },
    {
      title: "The Conjuring",
      poster: "../assets/posters/theconjuring.jpg",
      desc: "Paranormal investigators Ed and Lorraine Warren help the Perron family fight a dark presence in their farmhouse.",
    },
    {
      title: "The First Omen",
      poster: "../assets/posters/firstomen.jpg",
      desc: "A young woman in Rome uncovers a conspiracy to bring about the birth of evil incarnate.",
    },
    {
      title: "Hereditary",
      poster: "../assets/posters/hereditary.jpg",
      desc: "After their secretive grandmother dies, a family is haunted by a terrifying inheritance tied to a demon.",
    },
  ],

  slasher: [
    {
      title: "Scream",
      poster: "../assets/posters/scream.jpg",
      desc: "Sidney Prescott and her friends are stalked by a masked killer who loves horror movie rules.",
    },
    {
      title: "Halloween",
      poster: "../assets/posters/halloween.jpg",
      desc: "Michael Myers escapes a sanitarium and returns to his hometown for a bloody Halloween night.",
    },
    {
      title: "Friday the 13th",
      poster: "../assets/posters/f13.jpg",
      desc: "Camp counselors at Crystal Lake are picked off one by one by an unseen killer.",
    },
    {
      title: "Texas Chainsaw Massacre",
      poster: "../assets/posters/tcm.jpg",
      desc: "A group of friends stumbles upon Leatherface and his cannibalistic family in rural Texas.",
    },
    {
      title: "A Nightmare on Elm Street",
      poster: "../assets/posters/elmstreet.jpg",
      desc: "Teens are hunted in their dreams by Freddy Krueger, and dying in a dream means dying in real life.",
    },
  ],

  // key matches value="foundfootage"
  foundfootage: [
    {
      title: "The Blair Witch Project",
      poster: "../assets/posters/blairwitchproject.jpg",
      desc: "Three student filmmakers disappear in the woods while investigating the Blair Witch legend.",
    },
    {
      title: "Paranormal Activity",
      poster: "../assets/posters/paranormalactivity.jpg",
      desc: "A couple documents strange and escalating supernatural events inside their home.",
    },
    {
      title: "As Above, So Below",
      poster: "../assets/posters/asabove.jpg",
      desc: "Explorers enter the Paris catacombs and descend into a literal personal hell.",
    },
    {
      title: "Cloverfield",
      poster: "../assets/posters/cloverfield.jpg",
      desc: "Friends record a monstrous creature attack on New York City as it unfolds.",
    },
    {
      title: "The Taking of Deborah Logan",
      poster: "../assets/posters/deborahlogan.jpg",
      desc: "A documentary about a woman with Alzheimer’s turns into something far more sinister.",
    },
  ],

  psychological: [
    {
      title: "Perfect Blue",
      poster: "../assets/posters/perfectblue.jpg",
      desc: "A former pop idol turned actress loses her grip on reality as a stalker targets her.",
    },
    {
      title: "The Silence of the Lambs",
      poster: "../assets/posters/thesilenceofthelambs.jpg",
      desc: "Clarice Starling seeks help from Hannibal Lecter to catch a serial killer known as Buffalo Bill.",
    },
    {
      title: "Black Swan",
      poster: "../assets/posters/blackswan.jpg",
      desc: "A ballerina’s obsession with perfection leads her into a dark psychological spiral.",
    },
    {
      title: "The Babadook",
      poster: "../assets/posters/babadook.jpg",
      desc: "A grieving mother and her son are haunted by a sinister figure from a mysterious children’s book.",
    },
    {
      title: "Gone Girl",
      poster: "../assets/posters/gonegirl.jpg",
      desc: "When his wife disappears, a husband becomes the main suspect in a twisted media-fueled mystery.",
    },
  ],

  // key matches value="creature"
  creature: [
    {
      title: "Stranger Things",
      poster: "../assets/posters/strangerthings.jpg",
      desc: "Kids in 80s Hawkins uncover a secret lab, the Upside Down, and creatures from another dimension.",
    },
    {
      title: "Junji Ito Maniac",
      poster: "../assets/posters/junjiito.jpg",
      desc: "Anthology series of bizarre and disturbing monster and body horror stories.",
    },
    {
      title: "A Quiet Place",
      poster: "../assets/posters/aquietplace.jpg",
      desc: "A family survives in silence to avoid creatures that hunt by sound.",
    },
    {
      title: "The Ring",
      poster: "../assets/posters/thering.jpg",
      desc: "A cursed videotape brings a vengeful spirit to anyone who watches it.",
    },
    {
      title: "The Mist",
      poster: "../assets/posters/themist.jpg",
      desc: "A strange mist traps townspeople as terrifying creatures lurk outside.",
    },
  ],
};

// DOM elements
const subgenreSelect = document.getElementById("subgenre");
const randomBtn = document.getElementById("random-btn");

const mainPoster = document.getElementById("main-poster");
const mainTitle = document.getElementById("main-title");
const mainDesc = document.getElementById("main-desc");
const chosenGenre = document.getElementById("chosen-genre");

const sugg1 = document.getElementById("sugg-1");
const sugg2 = document.getElementById("sugg-2");
const sugg3 = document.getElementById("sugg-3");
const sugg4 = document.getElementById("sugg-4");
const suggestionImages = [sugg1, sugg2, sugg3, sugg4];

// placeholder poster (the TSR-style image)
const PLACEHOLDER_POSTER = "../assets/posters/placeholder.png";

/* Random index helper (Math.random from MDN)
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

/* Simple shuffle-style helper to get suggestion indices (Fisher–Yates idea)
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#randomize_array_elements */
function getSuggestions(list, mainIndex) {
  const indices = [];

  for (let i = 0; i < list.length; i++) {
    if (i !== mainIndex) {
      indices.push(i);
    }
  }

  // shuffle indices array
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = indices[i];
    indices[i] = indices[j];
    indices[j] = temp;
  }

  return indices.slice(0, 4); // up to 4 suggestions
}

// Get the label text (e.g., "Found Footage") from the <select>
function getSelectedGenreLabel() {
  const selectedOption = subgenreSelect.options[subgenreSelect.selectedIndex];
  return selectedOption.textContent;
}

// Reset main card back to placeholder state
function resetToPlaceholder() {
  mainPoster.src = PLACEHOLDER_POSTER;
  mainPoster.alt = "Placeholder horror poster";
  mainTitle.textContent = 'Click "Randomize" to begin!';
  mainDesc.textContent =
    'Choose a subgenre above and hit "Randomize" to get a horror movie or show that matches your vibe.';
  chosenGenre.textContent = "Genre: " + getSelectedGenreLabel();
}

// Core randomizer
function randomizeMovie() {
  const sub = subgenreSelect.value; // e.g. "foundfootage"
  const list = moviesBySubgenre[sub]; // matches key in moviesBySubgenre

  if (!list || list.length === 0) {
    return;
  }

  // pick main movie
  const mainIndex = getRandomIndex(list.length);
  const mainMovie = list[mainIndex];

  mainPoster.src = mainMovie.poster;
  mainPoster.alt = mainMovie.title + " poster";
  mainTitle.textContent = mainMovie.title;
  mainDesc.textContent = mainMovie.desc;
  // show label exactly like the selector text
  chosenGenre.textContent = "Genre: " + getSelectedGenreLabel();

  // pick suggestions (other movies from same subgenre)
  const suggIndices = getSuggestions(list, mainIndex);

  for (let i = 0; i < suggestionImages.length; i++) {
    const imgEl = suggestionImages[i];

    if (i < suggIndices.length) {
      const movie = list[suggIndices[i]];
      imgEl.src = movie.poster;
      imgEl.alt = movie.title + " poster";
    } else {
      // if not enough movies, just reuse the main movie poster
      imgEl.src = mainMovie.poster;
      imgEl.alt = mainMovie.title + " poster";
    }
  }
}

// Event listeners + initial state
if (randomBtn) {
  randomBtn.addEventListener("click", randomizeMovie);
}

if (subgenreSelect) {
  // whenever the user changes subgenre, go back to placeholder state
  subgenreSelect.addEventListener("change", resetToPlaceholder);
}

// set initial UI when page loads
resetToPlaceholder();
