const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const boy = document.querySelector("#Boy");
    const girl = document.querySelector("#Girl");

    const l1 = boy.value.length;
    const l2 = girl.value.length;

    const result = Math.pow(l1+l2,3)%101;

    console.log(getLoveMessage(result))
    
    document.querySelector("h2").textContent = `Result: ${result}%`;
    document.querySelector(".advice").textContent = getLoveMessage(result);
    form.reset();
 
})

function getLoveMessage(percentage) {
  let message = "";

  if (percentage >= 90) {
    message = "💞 Perfect match! You both are made for each other!";
  } 
  else if (percentage >= 75) {
    message = "❤️ Strong connection! Keep the love alive!";
  } 
  else if (percentage >= 60) {
    message = "💖 Nice pair! Just a little more understanding and it’ll be perfect!";
  } 
  else if (percentage >= 40) {
    message = "💛 There’s potential! A bit more effort can make it beautiful.";
  } 
  else if (percentage >= 20) {
    message = "💔 Not bad, but communication can help a lot!";
  } 
  else {
    message = "😅 Maybe friendship suits you both better right now.";
  }

  return message;
}
