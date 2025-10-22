
const Time = document.querySelector(".Time");
const targetDate = document.querySelector("#targetDate");
const form = document.querySelector("form");

let countDownInterval;

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(countDownInterval){
        clearInterval(countDownInterval)
    }


    const inputDate = targetDate.value;


        if (!inputDate) {
        alert("Please select a date!");
        return;
    }

    const destinationDate = new Date(inputDate).getTime();


countDownInterval = setInterval(()=>{
    const currentTime = Date.now();
  
    let countTime = destinationDate - currentTime;
    const days = Math.floor((countTime)/(1000*60*60*24));
    countTime%= 1000*60*60*24;
    const hours = Math.floor((countTime)/(1000*60*60));
    countTime%= 1000*60*60;
    const mins = Math.floor((countTime)/(1000*60));
    countTime%= 1000*60;
    const seconds = Math.floor((countTime)/(1000));
    countTime%= 1000;

Time.textContent = `${days} Days ${hours} Hours ${mins} Minutes ${seconds} Seconds remain.`

},1000)
})



// console.log(countTime);




// console.log(`${days} Days ${hours} Hours ${mins} Minutes ${seconds} Seconds left.`)
