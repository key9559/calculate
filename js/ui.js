// section height
const section = document.querySelector(".section");

section.style.height = window.innerHeight + 'px';

// btn select
const btnWrap = document.querySelectorAll('.btn-wrap');

// roof btn index
for (i = 0; i < btnWrap.length; i++) {
  
  // btn and result select
  const btns = document.querySelector(".btn-wrap:nth-child(" + [i + 1] + ") .btn");
  const result = document.getElementById("result");

  // btn click event
  btns.addEventListener("click", function () {
    const savePrev = result.innerText;
    
    // icon button return false
    if(btns.classList.contains('icon')) {
      return false;
    } else {
      //btn text save
      const textSave = this.innerText;
      // console.log(textSave);
  
      // btn text result result
      result.innerText = savePrev + textSave;
    }
  })
}

// icno button select
let clearBtn = document.getElementById('clear');
let equalBtn = document.getElementById('equal');

// clear click == reset
clearBtn.addEventListener('click', function () {
  result.innerText = '';
})

// equal click == calculate
equalBtn.addEventListener('click', function () {
  const saveCalc = result.innerText;

  console.log(saveCalc, typeof saveCalc); // string. not number
  
  // 글자를 숫자로 바꿔서 연산시키기
  // 혹은 연산자 누르면 바로 연산되게
  // 그러려면 전데이터, 후 데이터를 다 저장해야하지않나?

  /*
  1.
  const nums = number('90-5');
  const nums = number(90-5);
  
  console.log(nums);
  둘다 결과는 같음
  ui.js:50 Uncaught ReferenceError: number is not defined at HTMLButtonElement
  */

  /*
  2.
  const resultNum = Math.floor(saveCalc);
  console.log(resultNum);
  NaN
  */

  console.log(saveCalc * 1);
})
