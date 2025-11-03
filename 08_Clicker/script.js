
const greetings = [
  // Indian Languages
  { language: "Hindi", greeting: "नमस्ते" },
  { language: "Bengali", greeting: "নমস্কার" },
  { language: "Telugu", greeting: "నమస్కారం" },
  { language: "Marathi", greeting: "नमस्कार" },
  { language: "Tamil", greeting: "வணக்கம்" },
  { language: "Gujarati", greeting: "નમસ્તે" },
  { language: "Urdu", greeting: "السلام علیکم" },
  { language: "Kannada", greeting: "ನಮಸ್ಕಾರ" },
  { language: "Malayalam", greeting: "നമസ്കാരം" },
  { language: "Odia", greeting: "ନମସ୍କାର" },
  { language: "Punjabi", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
  { language: "Assamese", greeting: "নমস্কাৰ" },
  { language: "Maithili", greeting: "प्रणाम" },
  { language: "Sanskrit", greeting: "नमस्ते" },
  { language: "Kashmiri", greeting: "आदाब" },
  { language: "Nepali", greeting: "नमस्ते" },
  { language: "Konkani", greeting: "नमस्कार" },
  { language: "Sindhi", greeting: "السلام علیڪم" },
  { language: "Dogri", greeting: "नमस्कार" },
  { language: "Manipuri", greeting: "ꯈꯨꯔꯨꯝꯖꯔꯤ" },
  { language: "Bodo", greeting: "आय" },
  { language: "Santali", greeting: "ᱡᱚᱦᱟᱨ" },
  
  // International Popular Languages
  { language: "English", greeting: "Hello" },
  { language: "Spanish", greeting: "Hola" },
  { language: "French", greeting: "Bonjour" },
  { language: "German", greeting: "Hallo" },
  { language: "Italian", greeting: "Ciao" },
  { language: "Portuguese", greeting: "Olá" },
  { language: "Russian", greeting: "Привет" },
  { language: "Japanese", greeting: "こんにちは" },
  { language: "Chinese (Mandarin)", greeting: "你好" },
  { language: "Korean", greeting: "안녕하세요" },
  { language: "Arabic", greeting: "مرحبا" },
  { language: "Turkish", greeting: "Merhaba" },
  { language: "Dutch", greeting: "Hallo" },
  { language: "Swedish", greeting: "Hej" },
  { language: "Polish", greeting: "Cześć" },
  { language: "Greek", greeting: "Γειά σου" },
  { language: "Hebrew", greeting: "שלום" },
  { language: "Thai", greeting: "สวัสดี" },
  { language: "Vietnamese", greeting: "Xin chào" },
  { language: "Indonesian", greeting: "Halo" },
  { language: "Malay", greeting: "Hai" },
  { language: "Swahili", greeting: "Jambo" },
  { language: "Persian (Farsi)", greeting: "سلام" },
  { language: "Ukrainian", greeting: "Привіт" },
  { language: "Romanian", greeting: "Salut" },
  { language: "Czech", greeting: "Ahoj" },
  { language: "Danish", greeting: "Hej" },
  { language: "Finnish", greeting: "Hei" },
  { language: "Norwegian", greeting: "Hei" },
  { language: "Hungarian", greeting: "Helló" }
];


// console.log(greetings[0].greeting);

const body = document.querySelector("body");
// console.log(body)

body.addEventListener('click', (e)=> {
  // console.log(e.clientX, e.clientY)

  const circleElement = document.createElement('div')
  circleElement.classList.add('circle');
 
  // console.log(color())

  circleElement.style.backgroundColor = color();
    
  const randomIndex = Math.floor(Math.random() * greetings.length);
  circleElement.textContent = greetings[randomIndex].greeting;

  circleElement.style.top = `${e.clientY-25}px`
  circleElement.style.left = `${e.clientX-25}px`
  
  body.append(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 5000);

})



// random color generator



function color(){
const hex = "0123456789ABCDEF";

let color = "#";

for(let i=0; i<6; i++){
  color += hex[Math.floor(Math.random()*16)]
}

return color;
}




// console.log("hello rakib")

