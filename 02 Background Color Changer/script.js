const body = document.querySelector("body");
const parents = document.querySelector(".parents");

parents.addEventListener("click", (e)=>{
// console.log(e.target)
body.style.backgroundColor = e.target.id;
})