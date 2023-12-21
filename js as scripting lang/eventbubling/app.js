// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// div.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log("div was clicked");
// });

// ul.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (l of li)
// {
//     l.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log("li was clicked");
//     });
// }

let button = document.querySelector('.add');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

button.addEventListener('click',(e)=>{
    let newli = document.createElement('li');
    newli.innerText = input.value;

    let newdlt = document.createElement('button');
    newdlt.innerText = 'Delete';
    newdlt.classList.add("delete");
    newli.append(newdlt);

    ul.appendChild(newli);
    input.value = "";

    // console.log(input.value);    
});


ul.addEventListener('click',(event)=>{
    let del = event.target.nodeName;
    let tgt = event.target;
    if(del=='BUTTON'){
        tgt.parentElement.remove();
    }
})

// let dlt = document.querySelectorAll(".delete");

// for (d of dlt){
//     d.addEventListener('click',()=>{
//         let dp = d.parentElement;
//         dp.remove();
//     })
// }

