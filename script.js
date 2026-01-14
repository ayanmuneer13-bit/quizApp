document.addEventListener("DOMContentLoaded", () => {
  let currentQuestionIndex = 0;
  let score = 0;
  let correctClicks = 0;
  const questions = [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choices: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "What does CSS stand for?",
      choices: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which data type is NOT primitive in JavaScript?",
      choices: ["String", "Number", "Boolean", "Object"],
      answer: "Object",
    },
    {
      question: "What does DOM stand for?",
      choices: [
        "Document Object Model",
        "Data Object Model",
        "Digital Object Model",
        "Document Oriented Model",
      ],
      answer: "Document Object Model",
    },
  ];
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    startQuiz();
  });

  function startQuiz() {
    if (currentQuestionIndex === 0) {
      startBtn.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      restartBtn.classList.add("hidden");
      resultContainer.classList.add("hidden");
    }
    if (currentQuestionIndex < questions.length) {
      questionText.textContent = `${questions[currentQuestionIndex].question}`;

      //choices list
      questions[currentQuestionIndex].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = `${choice}`;
        choicesList.appendChild(li);
        li.addEventListener("click", (e) => {
          console.log(e.target.textContent);

          if (e.target.textContent === questions[currentQuestionIndex].answer) {
            console.log("selected");

            li.style.backgroundColor = "#6200ea";
            score++;
          }
        });

        nextBtn.classList.remove("hidden");
      });
    } else {
      showScorePage();
    }
  }
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);

    questionText.textContent = ``;
    choicesList.textContent = ``;
    startQuiz();
  });
  function showScorePage() {
    questionContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  });
});
