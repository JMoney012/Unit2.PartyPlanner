let data = " ";
const wrapper = document.getElementById("wrapper");


// Fetching data from the API
async function myFunction() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events/");
    return await response.json();
}   
// Pulling the data from the API and displaying it in the console
myFunction().then((response) => {
    console.log(response.data);
    response.data.forEach((itm)=> {
        createEvent(item)
    })
})
  

function createEvent(info){
    const ele = document.createElement("div");

    
}

