url = "http://universities.hipolabs.com/search?country=";
let ul = document.querySelector('ul');

let state;

let btn = document.querySelector('button');
btn.addEventListener('click',async ()=>{
    let ctr = document.querySelector('input').value;
    let clgs = await university(ctr);
    console.log(clgs);
    show(clgs);
});

function show(clgs){
    for (clg of clgs){
        let li = document.createElement('li');
        li.innerText= clg.name;
        ul.appendChild(li);
    }
}

async function university(country){
    try
    {
        let config = { headers:{ Accept:"application/json"} };
        let res  = await axios.get(url+country,config);
        // console.log(res);
        return res.data;

    }
    catch(e){
        console.log(e);
    }
    
}