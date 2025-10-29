const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

//============ comlement ========== 

const astrologyCompliments = [
  "Your energy is absolutely radiant today",
  "You have a magnetic presence that draws people in",
  "Your intuition is incredibly strong",
  "You bring perfect balance to every situation",
  "Your passion and drive are truly inspiring",
  "You have a natural gift for understanding others",
  "Your creativity knows no bounds",
  "You possess remarkable inner strength",
  "Your wisdom shines through in everything you do",
  "You have an adventurous spirit that's contagious",
  "Your compassion touches everyone around you",
  "You bring harmony wherever you go",
  "Your determination is unshakeable",
  "You have a beautiful, free-spirited soul",
  "Your loyalty and dedication are extraordinary",
  "You possess a rare and powerful authenticity",
  "Your mysterious aura is captivating",
  "You have an amazing ability to transform challenges into opportunities",
  "Your optimism lights up the darkest days",
  "You bring stability and comfort to those around you",
  "Your communication skills are truly remarkable",
  "You have a nurturing heart that heals others",
  "Your confidence and charisma are undeniable",
  "You possess exceptional analytical abilities",
  "Your sense of justice and fairness is admirable",
  "You have incredible emotional depth",
  "Your visionary thinking sets you apart",
  "You bring joy and warmth to every room",
  "Your grounded nature is a gift to others",
  "You have a unique and brilliant mind",
  "Your spiritual awareness is truly enlightened"
];


// ====== victim card complement ===========

const victimCardCompliments = [
  "You've been through so much, but you're still here - that takes real strength",
  "Life hasn't been fair to you, yet you keep going",
  "You deserve better than what you've experienced",
  "It's understandable why you feel the way you do given everything",
  "You've faced more challenges than most people could handle",
  "No one can blame you for feeling overwhelmed by your circumstances",
  "You've had to deal with things that weren't your fault",
  "It's okay to acknowledge that life has been harder for you",
  "You have every right to feel hurt by what happened",
  "Your struggles are valid and real",
  "You've been let down by so many people, and that's not fair",
  "It's not your fault that things turned out this way",
  "You deserve compassion for everything you've endured",
  "Life has thrown you more curveballs than you deserved",
  "You've been dealt a difficult hand in life",
  "It's understandable that you need time to process your pain",
  "You shouldn't have had to go through what you did",
  "Your feelings of frustration are completely justified",
  "You've been through experiences that would break most people",
  "It's okay to recognize that others have had it easier than you"
];

// ====== Recommendation ====== 

const astrologyRecommendations = [
  "Take time for meditation and self-reflection today",
  "Connect with nature to recharge your energy",
  "Express your creativity through art or writing",
  "Have an honest conversation with someone close to you",
  "Set clear boundaries to protect your peace",
  "Try something new that excites you",
  "Practice gratitude by listing three things you're thankful for",
  "Spend quality time with loved ones",
  "Focus on your physical health with exercise or yoga",
  "Let go of something that no longer serves you",
  "Trust your gut feeling in an important decision",
  "Plan a spontaneous adventure or trip",
  "Organize your space to create better energy flow",
  "Invest in your personal growth with learning or courses",
  "Practice self-care and pamper yourself today",
  "Reach out to someone you've been thinking about",
  "Set a new goal and take the first step toward it",
  "Spend time alone to reconnect with yourself",
  "Be open to unexpected opportunities coming your way",
  "Practice forgiveness to release old wounds",
  "Channel your emotions into productive activities",
  "Surround yourself with positive and uplifting people",
  "Take a break from technology and digital devices",
  "Journal your thoughts and feelings for clarity",
  "Help someone in need or volunteer your time",
  "Embrace change instead of resisting it",
  "Focus on financial planning and budgeting",
  "Explore your spiritual side through new practices",
  "Be bold and speak your truth confidently",
  "Rest and recharge - your body needs recovery time"
];

// ========= prediction ============

const astrologyPredictions = [
  "An unexpected message will bring you clarity this week",
  "A financial opportunity is heading your way soon",
  "You'll reconnect with someone from your past",
  "A creative project will bring you recognition",
  "Romance is blooming in an unexpected place",
  "A difficult decision will resolve itself naturally",
  "You'll receive good news related to your career",
  "Travel plans will materialize sooner than expected",
  "Someone will offer you valuable advice - listen carefully",
  "A long-standing issue will finally come to an end",
  "New friendships will enter your life this month",
  "Your hard work will be rewarded in unexpected ways",
  "A hidden talent will reveal itself to you",
  "Family matters will take a positive turn",
  "You'll experience a breakthrough in personal growth",
  "An old dream will become achievable again",
  "Trust will be restored in an important relationship",
  "A chance encounter will lead to exciting opportunities",
  "Your intuition will guide you to make the right choice",
  "Abundance and prosperity are flowing toward you"
];

// const form = document.getElementByTagName("form")[0];
// form.addEventListener


const form = document.getElementById("astro-form");

form.addEventListener("submit", (e)=> {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  
  // console.log(name, surname)

  const text = `Hi ${name} ${surname}, your zodaic sign is ${zodiacSigns [month-1]}... ${astrologyCompliments[day-1]}.${victimCardCompliments[year%20]}. ${astrologyRecommendations[(day*month)%30]}. ${astrologyPredictions[(name.length * surname.length) % 20]}`

  document.getElementById("result").textContent = text;

})