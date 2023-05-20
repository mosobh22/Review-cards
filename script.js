users = [
    {
        name:'Mohamed',
        job:'software engineer',
        img:'mohamed.jfif',
        review:'She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet'
    }
    ,
    {
        name:'Ahmed',
        job:'designer',
        img:'ahmed.jpg',
        review:'confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.'
    },
    {
        name:'Khaild',
        job:'electric engineer',
        img:'khaild.jpg',
        review:'Devon couldnt figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes hed ever seen.'
    },   
];



const userImg = document.querySelector('.user-img');
const userName = document.querySelector('.user-name');
const jobTitle = document.querySelector('.job-title');
const userFeedback = document.querySelector('.user-review');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const randomBtn = document.querySelector('.random-btn');
let index = 0;
let pos = 0;
window.onload = loadUser(pos);

rightBtn.addEventListener('click',moveRight);
leftBtn.addEventListener('click',moveLeft);
randomBtn.addEventListener('click',randomUser);

function moveRight(){
    index++;
    if(index >= users.length){
        index = 0;
    }
    loadUser(index); 
}

function moveLeft(){
    index--;
    if(index < 0){
        index = users.length - 1;
    }
    loadUser(index); 
}

function loadUser(idx){
    userImg.src = users[idx].img;
    userName.textContent = users[idx].name;
    jobTitle.textContent = users[idx].job;
    userFeedback.textContent = users[idx].review;
}


function randomUser(){
    let indx = parseInt(Math.random() * users.length);
    loadUser(indx);
    index = indx;
}