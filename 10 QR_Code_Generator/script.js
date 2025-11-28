
const form = document.getElementById("qr-form");
const inputText = document.querySelector("#qr-input");
const submitButton = form.querySelector('input[type="submit"]');
const downloadButton = document.getElementById("download-btn");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

// console.log(inputText.value)



// change button text
const orginalText = submitButton.value;
// console.log(orginalText);

if(inputText.value == '')
    return;
else{
submitButton.value = "Generating...";
submitButton.disabled = true;

generateQR(inputText.value, submitButton, orginalText);

inputText.value ='';

}


})


function generateQR(inpuTtext, button, orginalText){
    const showImg = document.querySelector("#qr-img");

        showImg.onload = () => {
        button.value = orginalText;
        button.disabled = false;

        //Experiment
        // if (downloadButton) {
        //     downloadButton.style.display = "block";
        // }
        
    }

    showImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +inpuTtext;

}



// this is experiment code

// downloadButton.addEventListener('click', (e)=> {
//     const showImg = document.querySelector("#qr-img");
//     const link = document.createElement('a');
//     link.href = showImg.src;
//     link.download = 'qrcode.png';
//     link.click();
// })