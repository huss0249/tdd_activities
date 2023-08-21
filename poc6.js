const log = console.log;
const $App1 = document.querySelector("#App1");
const $App2 = document.querySelector("#App2");
const $App3 = document.querySelector("#App3");
const $App4 = document.querySelector("#App4");

// ======================================================

class FireContainer {
    // constructor(_w, _h, _i, _obj) {
    constructor(_i, _obj) {
        this.app = _obj
        this._i = _i
        this.abc = this
        // this.aa = this.aa.bind(this) 
        this.$fire = ''
        this.defg = this.$fire

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
        this.$fire = $fire
        this.defg = this.$fire
        return $fire
    }

    static createContainer(_i) {
        const $fireContainer = document.createElement('div')
        // $fireContainer.id = "fire-cont"
        $fireContainer.classList.add(
        "container",
        "fire-cont",
        "pt-5",
        "my-3",
        "rounded-circle",
        "shadow",
        "border",
        "border-5",
        // "bg-dark",
        "border-light")

        $fireContainer.appendChild(FireContainer.createFire(_i));
        return $fireContainer
    }

    makeFire(_i) {
      this.app.appendChild(FireContainer.createContainer(this._i));
      // log(this)
    }

    fireUp() {
      // let $fire = 
        // $fire.classList.remove("fire-fade");
        // $fire.classList.add("fire-up");
        
        // FireContainer.$fire.classList.remove("fire-fade");
        // FireContainer.$fire.classList.add("fire-up");
        FireContainer.$fire.classList.remove("fire-fade");
        FireContainer.$fire.classList.add("fire-up");
        // log(e.target);
    //   log(FireContainer.$fire);
      
    }
    
    fireDown() {
      FireContainer.$fire.classList.remove("fire-fade");
      FireContainer.$fire.classList.add("fire-down");
      // log(e.target);
      log(FireContainer.$fire);

    //     $fire.classList.remove("fire-fade");
    //     $fire.classList.add("fire-down");
    //     log(e.target);
    }
    
    reset() {
      FireContainer.$fire.classList.remove("fire-fade", "fire-up", "fire-down");
      
        
      log('reset');
    }
    
    stop() {
      // FireContainer.$fire.classList.remove("fire-fade");
      FireContainer.$fire.classList.add("fire-fade");
      log('stop');
    }
    lll (qq) {
        // if(qq === 'c') {

        // that qq can be the id of the App
        log('qq = ', qq)
            let ttt = document.querySelector('#App1')
            log('ttt = ', ttt.querySelector('.fire'))
            // ttt.classList.add('fire-fade')
            log(this)
        // }
    }

}
// ======================================================

const s1 = new FireContainer(70, $App1)
const s2 = new FireContainer(50, $App2)
const s3 = new FireContainer(40, $App3)
const s4 = new FireContainer(30, $App4)

s1.makeFire()
s2.makeFire()
s3.makeFire()
s4.makeFire()

// $up.addEventListener('click', s1.fireUp)
// document.getElementById("up").addEventListener('click', s1.fireUp)
document.getElementById("up").addEventListener('click', s1.lll("a"))
document.getElementById("up").addEventListener('click', s2.lll("b"))
document.getElementById("down").addEventListener('click', s1.fireDown)
document.getElementById("stop").addEventListener('click', s1.stop)
document.getElementById("reset").addEventListener('click', s1.reset)
// ======================================================