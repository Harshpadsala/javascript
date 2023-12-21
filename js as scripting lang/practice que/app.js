// let input = document.createElement('input');
// document.body.append(input);

// let btn = document.createElement('button');
// btn.innerText = 'click me';
// document.body.appendChild(btn);


// btn.id = 'btnid';
// input.placeholder = 'username';

// let btnid = document.querySelector('#btnid');

// btnid.style.backgroundColor = 'blue';
// btnid.style.color = 'white';

// let heading = document.createElement('h1');
// heading.innerText = 'DOM practice';
// heading.style.color = 'purple';
// heading.style.textDecoration = '2px wavy underline';

// document.body.prepend(heading);

// let delta = document.createElement('p');
// delta.innerText = 'apna college delta practice';

let bt = document.querySelector('button');
let d = document.querySelector('div');
let h = document.querySelector('h1');

bt.addEventListener('click',()=>{
    let r1 = Math.floor(Math.random()*255)+1;
    let r2 = Math.floor(Math.random()*255)+1;
    let r3 = Math.floor(Math.random()*255)+1;

    console.log(r1+" "+r2+" "+r3);
    let str = `rgb(${r1} , ${r2} , ${r3})`;

    h.innerText = str;

    d.style.backgroundColor = `rgb(${r1} , ${r2} , ${r3})`;
});




