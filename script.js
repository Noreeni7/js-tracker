const lerningPlan = [
  "Day 1 – Setup & First Script: Learn script tag, console.log(), linking JS to HTML, and practice printing your name in the console & in a webpage.",
  "Day 2 – Variables & Data Types: Learn let, const, strings, numbers, booleans, and practice storing your name, age, and favorite color, then display them on the page.",
  "Day 3 – Operators & Expressions: Learn +, -, *, /, %, ===, !==, >, <, &&, ||, and practice making a program that checks if a number is even or odd.",
  "Day 4 – Functions: Learn function declaration, parameters, return values, and practice making a function that converts Celsius to Fahrenheit.",
  "Day 5 – Conditionals: Learn if, else if, else, switch, and practice asking for a user’s age (prompt) → display if they can vote.",
  "Day 6 – Loops: Learn for, while, for...of, and practice displaying numbers from 1 to 10 in a list.",
  "Day 7 – Mini Project 1: Project Counter App (buttons to increase, decrease, reset a number).",
  "Day 8 – DOM Basics: Learn document.querySelector(), .textContent, .innerHTML, and practice changing the text of a heading with JS.",
  "Day 9 – Styling with JS: Learn .style.property, and practice changing background color when clicking a button.",
  "Day 10 – Event Listeners: Learn addEventListener(), and practice clicking a button → display a random quote.",
  "Day 11 – Forms & Inputs: Learn value property, input events, and practice creating a form that displays entered name live on the page.",
  "Day 12 – Creating & Removing Elements: Learn createElement(), appendChild(), remove(), and practice adding a button that creates new list items.",
  "Day 13 – Arrays Basics: Learn push, pop, shift, unshift, length, and practice making a to-do list array & displaying tasks.",
  "Day 14 – Mini Project 2: Project Random Quote Generator (array of quotes, displayed on button click).",
  "Day 15 – Objects: Learn key-value pairs, accessing properties, and practice creating an object with name, age, job; display on page.",
  "Day 16 – Looping Through Arrays & Objects: Learn for...of, for...in, .forEach(), and practice displaying all tasks from an array.",
  "Day 17 – ES6 Features: Learn template literals, arrow functions, and practice rewriting previous tasks using ES6 syntax.",
  "Day 18 – Array Methods: Learn .map(), .filter(), .reduce(), and practice filtering numbers greater than 10 from an array.",
  "Day 19 – Date & Time: Learn Date() object, .getHours(), .getMinutes(), and practice displaying a live clock.",
  "Day 20 – JSON Basics: Learn JSON.stringify(), JSON.parse(), and practice saving an object as JSON and logging it.",
  "Day 21 – Mini Project 3: Project Digital Clock & Greeting (changes greeting based on time).",
  "Day 22 – What is an API?: Learn fetch() basics, and practice fetching and logging a sample API (e.g., JSONPlaceholder).",
  "Day 23 – Async/Await: Learn async functions, await keyword, and practice fetching data and displaying it on the page.",
  "Day 24 – Error Handling: Learn try...catch, and practice handling failed API requests gracefully.",
  "Day 25 – Local Storage: Learn localStorage.setItem(), .getItem(), and practice saving a to-do list in local storage.",
  "Day 26 – Review & Debugging: Review all concepts, and fix any weak spots.",
  "Day 27-29 – Final Project Build: Idea Weather App using API, fetch live weather data, display temperature, conditions, icon, and style with CSS for a polished look.",
  "Day 30 – Launch & Share: Host your project on GitHub Pages, and add it to your portfolio."
];



let progress = JSON.parse(localStorage.getItem("learningProgress")) || {};

lerningPlan.forEach(function (day, index) {
  const li = document.createElement("li");
  li.textContent = day;
  const btn = document.createElement("button");
  btn.style.borderColor = "pink";
  btn.textContent = "Check";

  if (progress[index]) {
    btn.textContent = "Done";
    btn.style.backgroundColor = "lightgreen";
  } else {
    btn.textContent = "Check";
    btn.style.backgroundColor = "lightblue";
  }
  btn.addEventListener("click", function () {
    if (btn.textContent === "Check") {
      btn.textContent = "Done";
      btn.style.backgroundColor = "lightgreen";
      progress[index] = true;
    } else {
      btn.textContent = "Check";
      btn.style.backgroundColor = "lightblue";
      progress[index] = false;
    }
    localStorage.setItem("learningProgress", JSON.stringify(progress));
  });
  li.appendChild(btn);
  document.querySelector(".plan").appendChild(li);
});
