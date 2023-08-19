const log = console.log;
const $App1 = document.querySelector("#App1");
const $App2 = document.querySelector("#App2");
const $App3 = document.querySelector("#App3");
const $App4 = document.querySelector("#App4");


// ======================================================


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
    },
    
    
    fireUp(e) {
      $fire.classList.remove("fire-fade");
      $fire.classList.add("fire-up");
      log(e.target);
    },
    
    
    fireDown(e) {
      $fire.classList.remove("fire-fade");
      $fire.classList.add("fire-down");
      log(e.target);
    }
  };

// ======================================================
class Fire {
    constructor(_w, _h) {

    }
}