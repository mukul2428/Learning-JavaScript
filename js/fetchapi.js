//1. fetch api by xmlhttprequest

const req = new XMLHttpRequest();
req.open('GET', "https://restcountries.eu/rest/v2/name/nepal");
req.send();

//get response
req.addEventListener('load',function(){
    const data = JSON.parse(this.responseText);
    console.log(data[0].name);
});


//2. fetch api by promise
const setHeader = {
    headers: {
        Accept: "application/json"
    }
}
fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => 
    //    console.log(res.json());
       res.json() //converted our html response to json
    )
    .then((data) => console.log(data.joke))
    .catch((error) => {
        console.log(error);
    })  
    
  
    
//3. fetch api by async await

const jokes = async () => {
    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();
        console.log(data.joke);
    }catch(err){
        console.log(`The error is ${err}`);
    }
}   
jokes();