
let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");



// menuIcon.addEventListener("click", () => {
//     if(navbar.style.right === '0px'){
//         navbar.style.right= '-160px';
//     }else{
//         navbar.style.right ='0px'
//     }
// })

let icon1 = document.querySelector(".navbar :nth-child(1)");
let icon2 = document.querySelector(".navbar :nth-child(2)");
let icon3 = document.querySelector(".navbar :nth-child(3)");
let icon4 = document.querySelector(".navbar :nth-child(4)");
let icon5 = document.querySelector(".navbar :nth-child(5)");

menuIcon.addEventListener('click', () => {
    if(icon1.style.right === '2rem'){
        icon1.style.right = '-150px'
    }else{
        icon1.style.right = '2rem'
    }

    if(icon2.style.right === '2rem'){
        icon2.style.right = '-300px'
    }else{
        icon2.style.right = '2rem'
    }

    if(icon3.style.right === '2rem'){
        icon3.style.right = '-450px'
    }else{
        icon3.style.right = '2rem'
    }

    if(icon4.style.right === '2rem'){
        icon4.style.right = '-600px'
    }else{
        icon4.style.right = '2rem'
    }

    if(icon5.style.right === '2rem'){
        icon5.style.right = '-750px'
    }else{
        icon5.style.right = '2rem'
    }
});

let readBtn = document.querySelector('#read-btn');
let readMore = document.querySelector('.read-more')

readBtn.addEventListener('click', () => {
   if( readMore.style.display === "block"){
      readMore.style.display = "none"
         readBtn.innerText = "Read more"

   }else{
     readBtn.innerText = "Read less"
     readMore.style.display = "block"
   }   
});

let Game = document.querySelector('.game');

Game.addEventListener('click', () => {
    window.location.href = 'https://sinhajee95.github.io/Game/';
});


let noteSites = document.querySelector('.noteSites');

noteSites.addEventListener('click', () => {
    window.location.href = "https://bright-centaur-3487b1.netlify.app/";
});


let Todolist = document.querySelector('.list');

Todolist.addEventListener('click', () => {
    window.location.href = "https://sinhajee95.github.io/Todo-web/";
});


let weather = document.querySelector('.weather');

weather.addEventListener('click', () => {
    window.location.href = 'https://astounding-flan-ff993a.netlify.app/';
});



let Weather = document.querySelector('.Weather');

Weather.addEventListener('click', () => {
    window.location.href = "https://weatherwebsite75.netlify.app";
});


let contactForm = document.querySelector('.contactform');

contactForm.addEventListener('click', () => {
    window.location.href = 'https://simple-calculator-app-react.netlify.app';
});


