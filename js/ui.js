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

  console.log(saveCalc, typeof saveCalc); // string
})
