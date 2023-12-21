let btn = document.querySelector('button');
let img = document.querySelector('img');

let url = "https://dog.ceo/api/breeds/image/random";

async function dogpic(){
    try{
        let photo = await axios.get(url);
        console.log(photo.data.message);
        return photo.data.message;
    }
    catch(e){
        console.log(e);
    }
}
btn.addEventListener('click',async()=>{
    img.src = `${await dogpic()}`;
})
