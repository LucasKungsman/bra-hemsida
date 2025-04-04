const bgEl = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    let color = '#';
    let nohastag = Math.random().toString(16).slice(2,8);
    let colorhex = color + nohastag 
    bgEl.style.backgroundColor = colorhex;
    document.getElementById("test").textContent = `Color Code: ${colorhex}`;
    fetchData();

})


async function fetchData(){
    try{
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${nohastag}`);

        const data = await response.json();
        const colorname = data.name.value;

        document.getElementById("namn").innerHTML = `Color Name: ${colorname}`;
        
    }

    catch(error){
        console.error(error);
    }
    

}
