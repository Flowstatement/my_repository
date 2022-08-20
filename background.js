const images = [
     "/am1.jpg",
     "/am3.jpg",
     "/jp1.jpg",
     "/swiss6.jpg"
]

console.log(images);
const selected_images = images[Math.floor((Math.random() * images.length))];

const bg_image = document.createElement("img");

bg_image.style.width = "2000px";

bg_image.src = `img/${selected_images}`;

document.body.appendChild(bg_image);