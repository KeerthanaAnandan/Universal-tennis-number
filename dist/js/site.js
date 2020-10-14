let questions = [
  {
    id: 1,
    question: "What grip do you use on your serve? ",
    answer: "2",
    options: [
      "Western Grip",
      "Continental Grip",
      "Eastern Forehand",
      "I don`t know the name of it",
    ],
  },
  {
    id: 2,
    question: "How much do you play tennis?",
    answer: "2",
    options: [
      "0 - 1hr per week",
      "1 - 3hrs per week",
      "3 - 6hrs per week",
      "6hrs plus per week",
    ],
  },
  {
    id: 3,
    question: "Have you ever had a coach?",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    question: "What grip do you use on your volley?",
    answer: "2",
    options: [
      "I don`t know the name of it",
      "Eastern grip",
      "Continental",
      "Western",
    ],
  },
  {
    id: 5,
    question: "Describe your serve",
    answer: "2",
    options: [
      "My serve is consistent and accurate",
      "I double fault way to much",
      "I am just starting to learn",
    ],
  },
  {
    id: 6,
    question: "Describe your footwork on court",
    answer: "2",
    options: [
      "My footwork is not that good",
      "I position well for most shots",
      "My footwork is the best part of my game",
    ],
  },
  {
    id: 7,
    question: "Depth of groundstrokes",
    answer: "2",
    options: [
      "I do not know what a groundstroke is",
      "I can hit my groundstrokes deep and with control",
      "The depth of my groundstrokes are a bit random",
    ],
  },
  {
    id: 8,
    question: "Defense or Attack?",
    answer: "2",
    options: [
      "I am an attacking type of player",
      "I am a defending type of player",
      "I can play both attack and defense",
      "I don`t know if I attack or defend",
    ],
  },
  {
    id: 9,
    question: "Anticipation",
    answer: "2",
    options: [
      "I anticipate well",
      "What is anticipation?",
      "I struggle with anticipation",
    ],
  },
  {
    id: 10,
    question: "What is the highest competitive level you have played at?",
    answer: "2",
    options: [
      "I have not played a competition yet",
      "Local competitions and tournaments",
      "National tournaments",
      "Main Draw Futures and or higher events",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;
let points = Number(sessionStorage.getItem("points"));

window.onload = function () {
  show(question_count);
  s
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector(".option.active").innerHTML;

  // check if the answer is right or wrong
  //if (user_answer == questions[question_count].answer) {
  //points += 10;
  //}
  if (
    user_answer === "I do not know what a groundstroke is" ||
    user_answer === "I don`t know if I attack or defend"
  ) {
    points += 0;
  } else if (
    user_answer === "I don`t know the name of it" ||
    user_answer === "I am just starting to learn" ||
    user_answer === "What is anticipation?" ||
    user_answer === "I have not played a competition yet"
  ) {
    points += 3;
  } else if (
    user_answer === "I double fault way to much" ||
    user_answer === "Local competitions and tournaments"
  ) {
    points += 5;
  } else if (user_answer === "0 - 1hr per week" || user_answer === "Western") {
    points += 6;
  } else if (
    user_answer === "No" ||
    user_answer === "Eastern Forehand" ||
    user_answer === "Eastern grip" ||
    user_answer === "My footwork is not that good" ||
    user_answer === "The depth of my groundstrokes are a bit random"
  ) {
    points += 9;
  } else if (user_answer === "1 - 3hrs per week") {
    points += 10;
  } else if (
    user_answer === "Western Grip" ||
    user_answer === "3 - 6hrs per week" ||
    user_answer === "I am a defending type of player" ||
    user_answer === "I struggle with anticipation"
  ) {
    points += 15;
  } else if (user_answer === "I am an attacking type of player") {
    points += 18;
  } else if (
    user_answer === "National tournaments" ||
    user_answer === "My footwork is the best part of my game"
  ) {
    points += 21;
  } else if (
    user_answer === "Yes" ||
    user_answer === "Continental" ||
    user_answer === "My serve is consistent and accurate" ||
    user_answer === "I can hit my groundstrokes deep and with control"
  ) {
    points += 24;
  } else if (
    user_answer === "I position well for most shots" ||
    user_answer === "I anticipate well"
  ) {
    points += 27;
  } else if (
    user_answer === "Continental Grip" ||
    user_answer === "6hrs plus per week" ||
    user_answer === "I can play both attack and defense" ||
    user_answer === "Main Draw Futures and or higher events"
  ) {
    points += 30;
  }
  sessionStorage.setItem("points", points);
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  if (question_count == 2) {
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    

  </ul> 
    `;
    toggleActive();
  } else if (
    question_count == 4 ||
    question_count == 5 ||
    question_count == 6 ||
    question_count == 8
  ) {
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>

  </ul> 
    `;
    toggleActive();
  } else {
    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
</ul> 
  `;
    toggleActive();
  }
}
function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
