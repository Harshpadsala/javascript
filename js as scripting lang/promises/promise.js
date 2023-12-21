// function save(data){
//     return new Promise((resolve,reject)=>{
//         let speed = Math.floor(Math.random()*10)+1;
//         if (speed>4){
//             resolve('success');
//         }
//         else{
//             reject('failure');
//         }

//     });
// }

// save('hallo')
//     .then(()=>{
//         console.log('hello is saved');
//         return save('world');
//     })
//     .then(()=>{
//         console.log('world is saved');
//         return save('!');
//     })
//     .then(()=>{
//         console.log('! is saved');
//     })
//     .catch(()=>{
//         console.log('data is not saved');
//     });

let h1 = document.querySelector('h1');

function bang(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if (num>5){
                reject('color not change');
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve('color changed');
        },delay);
    });
}


async function demo(){
    try{
        await bang("red",1000);
        await bang("green",1000);
        await bang("blue",1000);
        await bang("white",1000);
        await bang("grey",1000);
    }
    catch(err){
        console.log('error occurred');
        console.log(err);
    }
    
    let n = 5;
    console.log(n+3 + ' is total sum');

}



// bang('red',10000)
//     .then(( )=>{
//         console.log('color is red');
//         return bang('green',1000);
//     })
//     .then(()=>{
//         console.log('color is green');
//         return bang('blue',1000);
//     })
//     .then(()=>{
//         console.log('color is blue');
//     })
//     .catch(()=>{
//         console.log('color is UNCHANGED');
//     })


// async function greet(){
//     throw 'random error';
//     return "hello wrold";
// }

// greet()
//     .then((result)=>{
//         console.log('successful');
//     })
//     .catch((err)=>{
//         console.log('error',err);
//     });
    

// let demo = async ()=> {
//     return 5;
// }

// function getnumber(){
//     return new Promise((resolve,reject)=>{
// let num = Math.floor(Math.random()*10)+1;
//         setTimeout(() => {
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo(){
//     await getnumber();
//     await getnumber();
//     await getnumber();
//     await getnumber();
//     await getnumber();

// }