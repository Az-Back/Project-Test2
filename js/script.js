const Logo = document.querySelector(".Text");

const control = document.querySelector(".container");
const control2 = document.querySelector(".circle");
const control3 = document.querySelector(".circle2");
const control4 = document.querySelector(".circle4");

control.addEventListener('mouseenter', () =>{
    control.classList.add("container1")
});

control2.addEventListener('mouseenter', () =>{
    control2.classList.add("circle1")
});

control3.addEventListener('mouseenter', () =>{
    control3.classList.add("circle3")
});

control4.addEventListener('mouseenter', () =>{
    control4.classList.add("circle5")
});

Logo.addEventListener('click', () =>{
    let answer = prompt('Entrez votre nom!');
    Logo.classList.remove("Text")
    Logo.classList.add("Text2")
    Logo.innerHTML = "Bienvenue<br>" + answer +"<br>!";
    Logo.style.fontSize = "45px";
    control.addEventListener = control.classList.remove("container1");
    control.addEventListener = control.classList.add("container");
    control2.addEventListener = control2.classList.remove("circle1");
    control2.addEventListener = control2.classList.add("circle");
    control3.addEventListener = control3.classList.remove("circle3");
    control3.addEventListener = control3.classList.add("circle2");
    control4.addEventListener = control4.classList.remove("circle5");
    control4.addEventListener = control4.classList.add("circle4");
    const audio = new Audio();
    audio.src = "Sound/Bienvenue.mp3";
    audio.play();
  });