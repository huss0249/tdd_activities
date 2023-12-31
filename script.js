const log = console.log;
const $App1 = document.querySelector("#App1");
const $App2 = document.querySelector("#App2");
const $App3 = document.querySelector("#App3");
const $App4 = document.querySelector("#App4");

let $fire = "";

let $Question = "";
let attempts = 0; // attempts counter
const maxAttempts = 2; // Max attempts
const maxChck = choices.filter((c) => c.correct === true).length; // Max checked boxes
let boxes = []; // Checked Boxes
let counter = 0; // counter

let $orders = ""; // numbered order PlaceHolder
let $inputs = ""; // all inputs PlaceHolder

let inputTarget = ""; // Checked target input
let orderedTarget = ""; // Checked target order
let $submit = ""; // SUBMIT button
let submitText = "SUBMIT";
let restartText = "Try Again";
let resetText = "Start Over";
let $feedback = ""; // Feedback PlaceHolder

const feedbacks = {
  correct: `<h2>Correct!</h2><p>FEEDBACK.</p>`,

  incorrect: `<h2>Incorrect.</h2><p>Try again.</p>`,

  failed: `
  <h2>Incorrect.</h2><p>The correct response is:</p>`
}; // Feedback levels

//----------------------------------------------------------

const reuse = {
  // Assign Classes
  setClasses(el, arr) {
    arr.forEach((j) => el.classList.add(j));
    return el;
  },

  // Define Selectors
  setObj(selectorRef, newType, newId, classArray) {
    let newSelector = "";
    if (selectorRef != undefined || selectorRef != null) {
      newSelector = document.querySelector(selectorRef);
      reuse.setClasses(newSelector, classArray);
    } else {
      newSelector = document.createElement(newType);
      newId != undefined || newId != null ? (newSelector.id = newId) : "";
      reuse.setClasses(newSelector, classArray);
    }
    return newSelector;
  },

  selected(e) {
    let trgt = "";
    $fire.classList.remove("fire-up");
    $fire.classList.remove("fire-down");
    e.target.closest("button").dataset.src != null ||
    e.target.closest("button").dataset.src != undefined
      ? (trgt = e.target.closest("button").dataset.src)
      : log("no object");
    trgt === "1" ? $fire.classList.add("fire-fade") : "";
    trgt === "2" ? $fire.classList.add("fire-fade") : "";
    trgt === "3" ? $fire.classList.add("fire-fade") : "";
    trgt === "4" ? $fire.classList.add("fire-fade") : "";
    // log(e.target.closest("button").dataset.src);
  },
  fireUp(e) {
    // let trgt = "";
    // e.target.closest("button").dataset.src != null ||
    // e.target.closest("button").dataset.src != undefined
    //   ? (trgt = e.target.closest("button").dataset.src)
    //   : log("no object");
    // trgt === "1" ? $fire.classList.add("fire-fade") : "";
    // trgt === "2" ? $fire.classList.add("fire-fade") : "";
    // trgt === "3" ? $fire.classList.add("fire-fade") : "";
    // trgt === "4" ? $fire.classList.add("fire-fade") : "";
    $fire.classList.remove("fire-fade");
    // $fire.classList.remove("fire-down");
    $fire.classList.add("fire-up");
    log(e.target);
  },
  fireDown(e) {
    // let trgt = "";
    // e.target.closest("button").dataset.src != null ||
    // e.target.closest("button").dataset.src != undefined
    //   ? (trgt = e.target.closest("button").dataset.src)
    //   : log("no object");
    // trgt === "1" ? $fire.classList.add("fire-fade") : "";
    // trgt === "2" ? $fire.classList.add("fire-fade") : "";
    // trgt === "3" ? $fire.classList.add("fire-fade") : "";
    // trgt === "4" ? $fire.classList.add("fire-fade") : "";
    $fire.classList.remove("fire-fade");
    // $fire.classList.remove("fire-up");
    $fire.classList.add("fire-down");
    log(e.target);
  }
};
// ========================================================================================
// CREATE TRIANGLE
const createQ = () => {
  let tmpArr = [];
  let $tQ = reuse.setObj(null, "div", null, [
    "container",
    "col-sm-12",
    "col-md-4",
    "t-grid",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "m-3",
    "mx-auto"
  ]);
  // log("choices = ", choices.length, choices);
  tmpArr.push('<div class="t-row d-flex justify-content-center">');
  choices.forEach((c, i) => {
    i === 0
      ? tmpArr.push(`
    <button data-src="${c.value}" class='btn btn-primary text-wrap text-uppercase fs-6 tri'>${c.choice}</button>
    </div>
    <div class="t-row d-flex justify-content-center">
    `)
      : tmpArr.push(
          `<button data-src="${c.value}" class='btn btn-primary text-wrap text-uppercase fs-6 tri'>${c.choice}</button>`
        );
  });
  tmpArr.push("</div>");
  $tQ.innerHTML = tmpArr.join(" ");
  $App1.appendChild($tQ);
};

// ========================================================================================
const createSample = () => {
  $fire = document.querySelector(".fire");
  for (let i = 70; i > 0; i--) {
    // for (let i = 0; i < 70; i++) {
    // let $flame = document.createElement("div");
    let $flame = document.createElement("span");
    $flame.classList.add(
      "flame",
      "shadow",
      "position-absolute",
      "fixed-bottom"
    );
    $flame.style.setProperty("--i", i);
    $flame.style.setProperty("--rand", Math.random());
    $fire.appendChild($flame);
  }

  const $stop_btn = document.querySelector("#stop");
  $stop_btn.addEventListener("click", function () {
    // $fire.classList.remove("fire-up");
    // $fire.classList.remove("fire-down");
    $fire.classList.add("fire-fade");
    // alert('clicked')
  });

  const $reset_btn = document.querySelector("#reset");
  $reset_btn.addEventListener("click", function () {
    $fire.classList.remove("fire-up");
    $fire.classList.remove("fire-down");
    $fire.classList.remove("fire-fade");
    // alert('clicked')
  });

  const $up_btn = document.querySelector("#up");
  $up_btn.addEventListener("click", reuse.fireUp);

  const $down_btn = document.querySelector("#down");
  $down_btn.addEventListener("click", reuse.fireDown);

  // const $tGrid = document.querySelector(".t-grid");
  let $tGrid = document.querySelector(".t-grid");
  $tGrid.addEventListener("click", reuse.selected);
  return
};
// ========================================================================================

// ========================================================================================
// const createApp = () => {
const createApp = (obj) => {
  // CREATE FIRE CONTAINER
  let $fireContainer = reuse.setObj(null, "div", "fire-cont", [
    "container",
    "col-sm-12",
    "col-md-8",

    // "p-3",
    "pt-5",
    "my-3",
    // "w-100",
    // "h-100",
    "rounded-circle",
    // "rounded",
    "shadow",
    "border",
    "border-5",
    "border-light"
    // "bg-dark"
  ]);
  // $App1.appendChild($fireContainer);
  obj.appendChild($fireContainer);
  // $fireContainer.innerHTML = `<div class='fire m-auto p-5'></div>`;
  $fireContainer.innerHTML = `<div class='fire m-auto p-5'></div>`;

  // ASSIGN APP CLASSES
  // reuse.setClasses($App1, [
  reuse.setClasses(obj, [
    // "container",
    "row",
    "d-flex",
    "flex-row",

    // "justify-content-around",

    "justify-content-stretch",
    "align-items-center"
    // "rounded",
    // "shadow",
    // "m-5",
    // "mx-auto",
    // "p-5",
    // "bg-light"
  ]);

  createQ();
  createSample();
  return
};

// createApp();
createApp($App1);
createApp($App2);
createApp($App3);
createApp($App4);

// ========================================================================================
