// scroll more design
const text = document.querySelector('.scroll p');
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`
).join("")


//following circle
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
  const centerX = circle.offsetLeft + circle.clientWidth / 2;
  const centerY = circle.offsetTop + circle.clientHeight / 2;
  const distanceFromCenter = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
  const maxDistance = circle.clientWidth / 2 - 10;
  let x, y;
  if (distanceFromCenter > maxDistance) {
    x = e.clientX - centerX;
    y = e.clientY - centerY;
  } else {
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    x = Math.cos(angle) * maxDistance;
    y = Math.sin(angle) * maxDistance;
  }
  circle.style.transform = `translate(${x}px, ${y}px)`;
});



  //cursor hover
    const cursor = document.getElementById("cursor");
    document.addEventListener("mouseover", function(event) {

      const cursorType = getComputedStyle(event.target).getPropertyValue("cursor");
      
      if (cursorType === "pointer") {
        cursor.classList.add("active");
      }
    });
  
    document.addEventListener("mouseout", function(event) {
      cursor.classList.remove("active");
    });



//hambuger
let hamburger = document.querySelector(".hamburger");

let phoneNav = document.querySelectorAll(".phone-lists");

document.addEventListener("click", (event) => {
  if (event.target === hamburger) {
    hamburger.classList.toggle("active");
    
    phoneNav.forEach((phone) => phone.classList.toggle("active"));
  } else {
    hamburger.classList.remove("active");
    
    phoneNav.forEach((phone) => phone.classList.remove("active"));
  }
});
