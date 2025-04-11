const bgEl = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    let color = '#';
    let nohashtag = Math.random().toString(16).slice(2,8);
    let colorhex = color + nohashtag 
    bgEl.style.backgroundColor = colorhex;
    document.getElementById("test").textContent = `Color Code: ${colorhex}`;
    return fetchData(nohashtag);

})



async function fetchData(nohashtag){
    try{
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${nohashtag}`);

        const data = await response.json();
        const colorname = data.name.value;
        if (colorname === "Black") {
        colorname = "Unnamed Color";
                }
        

        document.getElementById("namn").innerHTML = `Color Name: ${colorname}`;
        console.log(colorname);
        
    }

    catch(error){
        console.error(error);
    }
    

}            
