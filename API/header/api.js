let url = "https://icanhazdadjoke.com";

async function getjoke(){
    try
    {

        let config = { headers:{ Accept : "application/json" } };
        let res  = await axios.get(url,config);
        console.log(res);

        console.log(res.data.joke);
    }
    catch(e){
        console.log(e);
    }
    
}