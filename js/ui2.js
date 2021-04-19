/* section height */
const section = document.querySelector(".section");

section.style.height = window.innerHeight + "px";

/* calculator js */
// btn select
const btnWrap = document.querySelectorAll(".btn-wrap");

// roof btn index
for (i = 0; i < btnWrap.length; i++) {
  // btn and result select
  const btns = document.querySelector(
    ".btn-wrap:nth-child(" + [i + 1] + ") .btn"
  );
  const result = document.getElementById("result");

  // btn click event
  btns.addEventListener("click", function () {
    const savePrev = result.innerText;

    // icon button return false
    if (btns.classList.contains("icon")) {
      return false;
    } else {
      //btn text save
      const textSave = this.innerText;
      // console.log(textSave);

      // btn text result result
      result.innerText = savePrev + textSave;
    }
  });
}

// icno button select
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");
calcAry = ["plus", "minus", "multi", "division"];

// 연산자 click == 글자를 숫자로 저장 + reset
for (i = 0; i < calcAry.length; i++) {
  let calcBtn = document.getElementById(calcAry[i]);

  calcBtn.addEventListener("click", function () {
    // save string
    let saveString = result.innerText;
    // convart number
    let myNum = Number(saveString);

    let calcul = this.innerText;
    // let calcul = this.getAttribute.value();
    
    // console.log(myNum, typeof myNum);
    // console.log(calcul, typeof calcul);

    result.innerText = "";

    // equal click == calculate
    equalBtn.addEventListener("click", function () {
      const saveCalc = result.innerText;
      
      let myNum2 = Number(saveCalc);
      
      if (calcBtn.classList.contains('plus')) {
        let calculs = myNum + myNum2;
        result.innerText = calculs;
      } else if (calcBtn.classList.contains('minus')) {
        let calculs = myNum - myNum2;
        result.innerText = calculs;
      } else if (calcBtn.classList.contains('multi')) {
        let calculs = myNum * myNum2;
        result.innerText = calculs;
      } else if (calcBtn.classList.contains('division')) {
        let calculs = myNum / myNum2;
        result.innerText = calculs;
      }
    
      // 글자를 숫자로 바꿔서 연산시키기
      // 혹은 연산자 누르면 바로 연산되게
      // 그러려면 전데이터, 후 데이터를 다 저장해야하지않나?
    });
  });
  // 이거 쓰면 복합 연산 불가능. 무조건 +-*/ 중 한번만 써야함
}

// clear click == reset
clearBtn.addEventListener("click", function () {
  result.innerText = "";
});
