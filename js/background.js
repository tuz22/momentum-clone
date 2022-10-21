const background = document.querySelector('.background');
const imageCount = 12;
let images = [];

for(let i = 0; i < imageCount; i++) {
  let img;
  img = `${i}.jpg`
  images.push(img);
}

const selectImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement('img');

backgroundImage.src =`img/${selectImage}`;
background.appendChild(backgroundImage);