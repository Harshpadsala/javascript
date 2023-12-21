let userSeq=[];
let gameSeq=[];

let started = false;
let level = 0;
let highscore = 0;

let btns=['yellow','red','grey','purple']

let h2 = document.querySelector('h2');

window.addEventListener('keypress',()=>{
    if (!started){
        started=true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add('gameflash');

    setTimeout(() => {
        btn.classList.remove('gameflash');
    }, 500);
}

function userFlash(btn){
    btn.classList.add('userflash');

    setTimeout(() => {
        btn.classList.remove('userflash');
    }, 500);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let chooseidx = Math.floor(Math.random() * 3) ;
    let randColor = btns[chooseidx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkans(idx){
    console.log(userSeq);
    console.log(gameSeq);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
        setTimeout(levelUp(),1000);
    }
    else{
        h2.innerHTML = `Game Over !! Your score was ${level} <br> press any key to start`; 
        let h3 = document.createElement('h2');
        h3.innerText=`highest score is ${highscore}`;
        h2.appendChild(h3);

        document.querySelector("body").style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor='white';
        }, 150);
        highscore = Math.max(highscore,level);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.btn');


for(btn of allBtns){
    btn.addEventListener('click',btnpress);
}


function reset(){
    started = false;
    userSeq=[];
    gameSeq=[];
    level=0;
}