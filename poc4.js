const log = console.log;
const $App1 = document.querySelector("#App1");
const $App2 = document.querySelector("#App2");
const $App3 = document.querySelector("#App3");
const $App4 = document.querySelector("#App4");


// ======================================================


const reuse = {
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
        this._i = _i

        this.app.classList.add(
          "row",
          "d-flex",
          "flex-row",
          "justify-content-stretch",
          "align-items-center"
        );
    }

    static createFire(_i) {
        let $fire = document.createElement('div')
        $fire.classList.add('fire', 'm-auto', 'p-5')
 
        for (let i = 0; i < _i; i++) {
            let $flame = document.createElement('span')
            $flame.classList.add(
                "flame",
                "shadow",
                "position-absolute",
                "fixed-bottom"
                );
                $flame.style.setProperty("--i", i);
            $flame.style.setProperty("--rand", Math.random());
            $fire.appendChild($flame)
        }
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
        "bg-dark",
        "border-light")

        $fireContainer.appendChild(FireContainer.createFire(_i));
        return $fireContainer
    }

    makeFire(_i) {
        this.app.appendChild(FireContainer.createContainer(this._i));
    }

    fireUp() {
        // $fire.classList.remove("fire-fade");
        // $fire.classList.add("fire-up");
        // log(e.target);
        log('fire up');
    }
    
    
    // fireDown(e) {
    //     $fire.classList.remove("fire-fade");
    //     $fire.classList.add("fire-down");
    //     log(e.target);
    // }
}

const s1 = new FireContainer(5, 6, 70, $App1).makeFire()
const s2 = new FireContainer(5, 6, 50, $App2).makeFire()
const s3 = new FireContainer(5, 6, 40, $App3).makeFire()
const s4 = new FireContainer(5, 6, 30, $App4).makeFire()

// s1.fireUp()