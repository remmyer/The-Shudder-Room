"use strict"
// Mohima

// ARRAY CONTAINING QUESTION DATA

const quizData = [
  {
    question: "What makes Ready or Not frightening, despite not being labeled horror?",
    questionNum: "Question 1/10",
    imgSrc: "../assets/quizPics/ron.png",
    imgAlt: "Criminals with firearms, and police officers defending civilians",
    options: ["No combat", "Extraterrestrial creatures", "Constant loud music", "Realism"],
    answer: 3
  },
    
  {
    question: "What creature relentlessly stalks the player in Resident Evil 2 Remake?",
    questionNum: "Question 2/10",
    imgSrc: "../assets/quizPics/re2r.jpg",
    imgAlt: "Police officer holding shotgun, in front of police department at night",
    options: ["Nemesis", "Pyramid Head", "Mr. X", "Zombie dog"],
    answer: 2
  },

  {
    question: "Where is Outlast set?",
    questionNum: "Question 3/10",
    imgSrc: "../assets/quizPics/outlast.jpg",
    imgAlt: "VHS recording of a sinister man located in the sewers behind wooden boxes",
    options: ["Abandoned school", "Mount Massive Asylum", "Forest camp", "A mall"],
    answer: 1
  },

  {
    question: "In FNAF 4, the player is:",
    questionNum: "Question 4/10",
    imgSrc: "../assets/quizPics/fnaf4.jpg",
    imgAlt: "A dusty yellow rabbit stuffed animal sitting on a chair in the end of a hallway",
    options: ["A child", "A guard", "A soldier", "A detective"],
    answer: 0
  },

  {
    question: "Rule of Rose centers on:",
    questionNum: "Question 5/10",
    imgSrc: "../assets/quizPics/ror.webp",
    imgAlt: "A woman holding a revolver with an expression of fear, in a bathroom",
    options: ["Lauren, a preschool teacher",
      "Penelope, a college student",
      "Rose, a child psychologist",
      "Jennifer, recovering childhood memories"],
    answer: 3
  },

  {
    question: "In the Silent Hill 2 Remake, James returns to Silent Hill because:",
    questionNum: "Question 6/10",
    imgSrc: "../assets/quizPics/sh2r.jpg",
    imgAlt: "A back view of a man in a green jacket holding a bat attempting to hit a monster",
    options: ["The Bakers called him",
      "A message from his deceased wife",
      "He gets a new job",
      "He gets nostalgic"],
    answer: 1
  },
    
  {
    question: "Silent Hill 3 follows the story of...",
    questionNum: "Question 7/10",
    imgSrc: "../assets/quizPics/sh3.webp",
    imgAlt: "A pink bunny mascot covered in blood as it sits on a rusty bench in a theme park",
    options: ["Heather", "Leon", "Shuichi", "Claire"],
    answer: 0
  },

  {
    question: "What makes the dark lab scene in Resident Evil 4 Remake scary?",
    questionNum: "Question 8/10",
    imgSrc: "../assets/quizPics/re4r.jpg",
    imgAlt: "A police officer infront of abandoned house in the middle of the forest at night",
    options: ["The excruciating puzzles",
      "The Regeneradors",
      "The lack of time",
      "Being chased by Mr. X"],
    answer: 1
  },

  {
    question: "Why is Resident Evil 7 considered scarier than the earlier games?",
    questionNum: "Question 9/10",
    imgSrc: "../assets/quizPics/re7.jpg",
    imgAlt: "Interior of a house in a swamp green filter",
    options: ["More zombies", "Horrible graphics", "First-person view", "No combat"],
    answer: 2
  },

  {
    question: "In Clock Tower 3, Alyssa is transported back to:",
    questionNum: "Question 10/10",
    imgSrc: "../assets/quizPics/ct3.jpg",
    imgAlt: "Image of a clock on a clock tower",
    options: ["Victorian London", "1950s Japan", "1950s America", "Medieval Europe"],
    answer: 3
  }
]

// ARRAY CONTAINING DIFFERENT STYLES FOR EACH QUESTION

const quizStyles = [

  {
    fieldsetBg: "linear-gradient(-280deg, #1a0000, #3f0000)",
    buttonBg: "linear-gradient(to bottom right, #640000, #960000)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #00334d, #001a33)",
    buttonBg: "linear-gradient(90deg, #003d82, #00163b)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #001a00, #003300)",
    buttonBg: "linear-gradient(to bottom right, #004d00, #007300)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #000014, #000033)",
    buttonBg: "linear-gradient(to bottom right, #001144, #002255)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #3a2d23, #1e1a16)",
    buttonBg: "linear-gradient(to bottom right, #5a4636, #3b2f24)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #4d5b50, #2b2f2d)",
    buttonBg: "linear-gradient(to bottom right, #3b4a3f, #1f2923)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #2e3b32, #1a221d)",
    buttonBg: "linear-gradient(to bottom right, #4f5f52, #2a332d)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #081a2d, #0d1b33)",
    buttonBg: "linear-gradient(to bottom right, #153255, #0c2138)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #0a0a0a, #1b1f12)",
    buttonBg: "linear-gradient(to bottom right, #2d331e, #161b10)",
  },

  {
    fieldsetBg: "linear-gradient(-280deg, #2b304f, #1b1f33)",
    buttonBg: "linear-gradient(to bottom right, #3e4473, #242847)",
  }
];

let score = 0;

let currentIndex = 0;

const questionNum = document.querySelector("#questionNum");
const question = document.querySelector("#question");
const questionImg = document.querySelector("#quizImage");
const nextButton = document.querySelector("#nextButton");

const startScreen = document.querySelector("#startScreen");
const quizScreen = document.querySelector("#quizScreen");
const scoreScreen = document.querySelector("#scoreScreen");
const checkScreen = document.querySelector("#checkboxScreen");
const feedbackScreen = document.querySelector("#feedbackScreen");

const startBtn = document.querySelector("#startButton");

startBtn.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

// Starts the quiz
function startQuiz(){
  quizScreen.style.display = "flex";
  startScreen.style.display = "none";
}

// Loads each question
function loadQuestion(index) {
  const q = quizData[index];
  questionNum.innerHTML = q.questionNum;
  question.innerHTML = q.question;
  questionImg.setAttribute("src", q.imgSrc);
  questionImg.setAttribute("alt", q.imgAlt);
}

// Loads the options for the questions
function loadOptions(index){
  const choiceLabels = [document.querySelector(".choice:nth-child(1)"),
    document.querySelector(".choice:nth-child(2)"),
    document.querySelector(".choice:nth-child(3)"),
    document.querySelector(".choice:nth-child(4)")]
  const q = quizData[index];
  for(let i = 0; i < choiceLabels.length; i++){
    choiceLabels[i].childNodes[1].nodeValue = q.options[i];
  }
}

const scoreNum = document.querySelector("#score");
const scoreMessage = document.querySelector("#scoreMessage");

// Updates score, and switches question
function nextQuestion(){
  const checkedChoice = document.querySelector("input[name=\"choice\"]:checked");
  const noInput = document.querySelector("#noInputMessage");

  if (!checkedChoice) {
    noInput.innerHTML = "Please pick an answer!";
    return;
  }
  noInput.innerHTML = "";

  const userAnswer = Number(checkedChoice.value);

  if (userAnswer === quizData[currentIndex].answer) {
    score++;
  }

  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
    loadOptions(currentIndex);
    themeChanger(currentIndex);
    document.querySelectorAll("input[name=\"choice\"]").forEach(input => input.checked = false);
  } else {
    quizScreen.style.display = "none";
    scoreScreen.style.display = "block"
    scoreNum.innerHTML = score + "/10";
    if(score === 10){
      scoreMessage.innerHTML = "Perfect Score! Great job!";
    } else if(score < 10 && score > 6){
      scoreMessage.innerHTML = "You passed, good job!";
    } else if(score === 6){
      scoreMessage.innerHTML = "You passed! Barely...";
    } else if(score < 6){
      scoreMessage.innerHTML = "Better luck next time!";
    }
  }
}

// Changes theme each question
function themeChanger(index){
  const fieldset = document.querySelector("#quizFieldset");
  const choices = document.querySelectorAll(".choice");
  const nextBtn = document.querySelector("#nextButton");

  const style = quizStyles[index];

  fieldset.style.background = style.fieldsetBg;
  nextBtn.style.background = style.buttonBg;
  questionNum.style.background = style.buttonBg;

  choices.forEach(choice => {
    choice.style.background = style.buttonBg;
  });
}

const retryButton = document.querySelector("#tryAgainButton");
retryButton.addEventListener("click", retryQuiz);

// Retries quiz
function retryQuiz(){
  quizScreen.style.display = "flex";
  scoreScreen.style.display = "none";
  feedbackScreen.style.display = "none";
  checkScreen.style.display = "none";

  currentIndex = 0;
  score = 0;

  loadQuestion(0);
  loadOptions(0);
  themeChanger(0);

  document.querySelectorAll("input[name=\"choice\"]").forEach(input => input.checked = false);
}

const toCheckButton = document.querySelector("#toCheckButton");

toCheckButton.addEventListener("click", toCheckSection);

// Moves onto the checkbox sequence
function toCheckSection(){
  quizScreen.style.display = "none";
  scoreScreen.style.display = "none";
  checkScreen.style.display = "flex";
}

const checkSubmit = document.querySelector("#checkSubmit");
const feedbackSubmit = document.querySelector("#feedbackSubmit");
const checkNext = document.querySelector("#checkNext");
checkSubmit.addEventListener("click", checkText);
feedbackSubmit.addEventListener("click", feedText);

function checkText(){
  const checkItemsMessage = document.querySelector("#checkItemsMessage");
  checkItemsMessage.innerHTML = "Awesome!";
  checkNext.style.display = "flex"
}

const finalRetryButton = document.querySelector("#finalRetryButton");
finalRetryButton.addEventListener("click", retryQuiz);

function feedText(){
  const feedbackMessage = document.querySelector("#feedbackMessage");
  feedbackMessage.innerHTML = "Thank You!";
  finalRetryButton.style.display = "flex"
}

checkNext.addEventListener("click", toFeedback);

function toFeedback(){
  quizScreen.style.display = "none";
  scoreScreen.style.display = "none";
  checkScreen.style.display = "none";
  feedbackScreen.style.display  = "flex";
}