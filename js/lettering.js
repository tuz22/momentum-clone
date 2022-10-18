const letterings = [
  {
    lettering: "I'll catchthe shooting stars. And place them in your hands."
  },
  {
    lettering: "Before those long days and nights became old and rusty, let's shine again."
  },
];

const lettering = document.querySelector('#lettering span'); // span 여러개일 땐 first-child사용
const todayLettering = letterings[Math.floor(Math.random() * letterings.length)];
lettering.innerHTML = todayLettering.lettering;