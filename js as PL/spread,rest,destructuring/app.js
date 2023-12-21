// function sum(a,b=2){
//     return a+b;
// }

// console.log(sum(1));

// let arr = [1,2,3,4,5];
// let ans = Math.min(...arr);
// console.log(ans);

// because Math.min() function taks unlimited perameters as args 

// arr.push(-1);
// let ans = Math.min(...arr);
// console.log(ans);


// console.log(...arr);

// let str = "hellow world"
// console.log(...str);

// let arr=[1,2,3,4,5];

// let new_arr = [...arr];

// console.log(new_arr);


// let string = "harsh padsala";
// let newstring = [...string];

// console.log(newstring);

// let arr1=[1,2,3,4,5];
// let arr2=[1,2,3,4,5];

// let arr3 = [...arr1 , ...arr2];
// console.log(arr3);

// const data = {
//     email : "harshpadsala",
//     no : 9909094939
// };

// const datacopy = {
//     ...data,
//     id : 1,
// country : 'india'
// };

// console.log(datacopy);

// let arr= [1,2,3,4,5];

// const obj = {
//     ...arr
// };

// console.log(obj);

// let str ='harsh';
// let obj2= {
//     ...str,
// };

// console.log(obj2);

// function sum(...args){
//     for (let i=0; i<args.length;i++){
//         console.log("you gave us "+ args[i]);
//     }
// }

// function min(){
//     console.log(arguments.length);
// }


// function min(pera,...args){
//     console.log(pera[mi]);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }
//         else
//         return min;
//     });
// }






// Destructring

// let name = ['tony','bruce','seave' ,'peter','wanda','vision'];

// let [winner,runnerup,...others] = name; // winner and runnerup is variable here

// console.log(winner,runnerup);
// console.log(others);


const student = {
    name : "harsh",
    age : 21,
    class  : 9,
    sub : ['hindi','english','maths'],

    username : 'harshpadsala',
    password : 1234,
    city : 'toranto'
};

// // let username = student.user;
// // let password = student.pass;

let {username :user , password : secret,city : place= "surat"} = student;





