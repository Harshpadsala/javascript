// let btn = document.querySelector('button');
// btn.innerText = 'click me!';

// let inp = document.querySelector('input');

// inp.addEventListener('keydown',function(e){
//     // e.preventDefault;
//     console.log("code is "+e.code);
//     console.log("key is "+e.key);
//     // console.log(e.key);
// });

// btn.addEventListener('click',function(e){
//     // e.preventDefault;
//     console.log(e);
// });



// inp.addEventListener('keydown',function(e){
//     // console.log(e);s
//     // console.log(keyBoardEvent.code);
//     console.log(inp.value);
// });

// inp.addEventListener('change',function(e){
//     console.log(inp.value);
// });

// inp.addEventListener('input',function(e){
//     console.log(inp.value);
// });

// inp.addEventListener('keydown',(e)=>{
//     console.dir(e.code); // -->print keycode of entered key
//     console.dir(e.key); // -->print key of entered key
//     // console.dir(inp.value);
// });

// btn.addEventListener('dblclick', function() {
//     console.log('button is pressed');
//     this.style.backgroundColor = 'skyblue';
// });

// btn.addEventListener('click', function() {
//     console.log('button is pressed');
//     this.style.backgroundColor = 'yellowgreen';
//     this.style.color = 'white';

    
// });

// btn.addEventListener('mouseenter', function() {
//     console.log('button is hoverd');
//     this.style.backgroundColor = 'black';
//     this.style.color = 'white';
// });





let frm = document.querySelector('form');

let btn = document.querySelector('button');
let inp = document.querySelector('input');

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
});