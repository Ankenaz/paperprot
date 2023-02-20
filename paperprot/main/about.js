// Text for this design is from the source material - https://www.behance.net/gallery/86946867/b-lab

// Images were created with the Midjourney AI Bot

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle1");

const colors = [
  "#94918f",
  "#e9e6e4",
  "ECF2FF",
  "EDDBC7",
  "B99B6B",
  "F8CBA6",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
