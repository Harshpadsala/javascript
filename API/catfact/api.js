let url= "https://catfact.ninja/fact";

// async function getfacts(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(res);
        
//         console.log(data.fact);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

let h1 = document.querySelector('h1');
let btn = document.querySelector('button');

btn.addEventListener('click', async() => {
    let fact =await getfacts(); 
    h1.innerText = fact;
});


async function getfacts(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log('no fact found');
    }
    
}


