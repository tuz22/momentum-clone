const images = ['0.jpg', '1.jpg', '2.jpg'];
const selectImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement('img');

backgroundImage.src =`img/${selectImage}`;
document.body.appendChild(backgroundImage);