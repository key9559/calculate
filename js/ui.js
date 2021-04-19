// section height
const section = document.querySelector(".section");

section.style.height = window.innerHeight + 'px';

const btnWrap = document.querySelectorAll('.btn-wrap');
for (i = 0; i < btnWrap.length; i++) {
  
  const btns = document.querySelector(".btn-wrap:nth-child(" + [i + 1] + ") .btn");
  const result = document.querySelector(".result");

  btns.addEventListener("click", function () {
    const textSave = this.innerText;
    console.log(textSave);
  })
}
