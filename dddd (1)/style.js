
/*const는 자바스크립트에서 사용하는 변수기호 
const는 변수를 상수로 만들어주는 개념 var과는 다르게 하나만 선언이 가능함 
queryselector는 document(문서)에서 css 선택자에 대응되는 것을 선택해주는 기능 > id값을 main으로 둔거이기에 */

let buutonEl = document.querySelector("button");
let $subPage = document.querySelector("#subPage");
let $main = document.querySelector("#main")

buutonEl.onclick = function toggleFn()
  {
      window.scrollTo({top: 0, behavior: 'smooth'});
      $main.classList.toggle("hidden");
      $subPage.classList.toggle('show'); 
  }
