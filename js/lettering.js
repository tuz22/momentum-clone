const letterings = [
  {
    lettering: "I'll catch the shooting stars. And place them in your hands."
  },
  {
    lettering: "Before those long days and nights became old and rusty, let's shine again."
  },
  {
    lettering: "Through the endlessly lost, cold and crueldays i know your name that has silently been forgotton."
  },
  {
    lettering: "Let me turn time back and go to where you are. Let me stay with you."
  },
  {
    lettering: "A goal without a plan is just a wish."
  },
  {
    lettering: "What is not started today is never finished tomorrow."
  },
  {
    lettering: "There maybe no end to our journey of dreams, so let's take a break for today."
  },
  {
    lettering: "Though your beginnings may be humble, may the end be properous."
  },
  {
    lettering: "The morning will come again. Because no darkness, no season can last forever."
  },
  {
    lettering: "I hope to be stronger tomorrow."
  },
];

const lettering = document.querySelector('#lettering span'); // span 여러개일 땐 first-child사용
const todayLettering = letterings[Math.floor(Math.random() * letterings.length)];
lettering.innerHTML = todayLettering.lettering;