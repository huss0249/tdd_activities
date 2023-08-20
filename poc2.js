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

// ======================================================
class FireContainer {
    constructor(_w, _h, _i, _obj) {
        this.app = _obj
        this.$fire = ''


        reuse.setClasses(this.app, [
          "row",
          "d-flex",
          "flex-row",
          "justify-content-stretch",
          "align-items-center"
        ]);

        let $fireContainer = reuse.setObj(null, "div", "fire-cont", [
            "container",
            "pt-5",
            "my-3",
            "rounded-circle",
            "shadow",
            "border",
            "border-5",
            "border-light"
          ]);

          
        // $fire = document.querySelector(".fire");
        let $fire = reuse.setObj(null, "div", null, [
            "fire",
            "m-auto",
            "p-5"
        ])
        
        // for (let i = _i; i > 0; i--) {

        // _obj.appendChild($fire);
    }


    static createFlame(_i) {
        const $lame = document.createElement('div')
        $flame.classList.add(
            "flame",
            "shadow",
            "position-absolute",
            "fixed-bottom"
            );
        $flame.style.setProperty("--i", i);
        $flame.style.setProperty("--rand", Math.random());

        return $flame
    }

    static createFire(_i) {
        const $fire = document.createElement('div')
        $fire.classList.add('fire', 'm-auto', 'p-5')

        // for (let i = 0; i < _i; i++) {
            
        //     $fire.appendChild(FireContainer.createFlame(_i));
        // }
            
        // $fireContainer.appendChild(FireContainer.createFire(_i));
        
        return $fire
    }

    static createContainer(_i) {
        const $fireContainer = document.createElement('div')
        // $fireContainer.id = "fire-cont"
        $fireContainer.classList.add("container",
        "pt-5",
        "my-3",
        "rounded-circle",
        "shadow",
        "border",
        "border-5",
        "border-light")

        for (let i = 0; i < _i; i++) {
            
            $fire.appendChild(FireContainer.createFlame(_i));
        }
        
        $fireContainer.appendChild(FireContainer.createFire(_i));

        return $fireContainer
    }


    makeFire(_i) {
        this.app.appendChild(FireContainer.createContainer(_i));
    }
}

// class Fire extends FireContainer {
//     constructor() {

//     }
// }



const s1 = new FireContainer(5, 6, 70, $App1).makeFire()
const s2 = new FireContainer(5, 6, 50, $App2).makeFire()
const s3 = new FireContainer(5, 6, 40, $App3).makeFire()
const s4 = new FireContainer(5, 6, 30, $App4).makeFire()