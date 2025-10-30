const quotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "The computer was born to solve problems that did not exist before. – Bill Gates",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "In theory, theory and practice are the same. In practice, they’re not. – Yogi Berra",
  "The function of good software is to make the complex appear simple. – Grady Booch",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "Computers are fast; programmers keep them slow. – Anonymous",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
  "There are two ways to write error-free programs; only the third one works. – Alan J. Perlis",
  "It’s not a bug – it’s an undocumented feature. – Anonymous",
  "To iterate is human, to recurse divine. – L. Peter Deutsch",
  "The art of programming is the art of organizing complexity. – Edsger W. Dijkstra"
];


const quote = document.querySelector(".quote");
const button = document.querySelector("button")

button.addEventListener("click",() => {
const num = Math.floor(Math.random()*20);
quote.textContent = quotes[num] ;
})
