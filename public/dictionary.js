
//input field
let text = document.querySelector("#text");
//search button
let search = document.querySelector("#search");
//main content 
let data = document.querySelector("#data");

let loadData = ()=>{
    //api for dicitonary
    let api = 'https://api.dictionaryapi.dev/api/v2/entries/en/${text.value}';
    
    fetch(api).then(response =>response.json()).then(result =>{
        //display results
        //data.innerHTML = 'div class = "details">
        //<h5 class = "meaning">WORD</h5>
        //<p>Lorem ipsum dolor, sit amet consectetur a</p>';
    console.log(result)
    });

}

search.addEventListener("click", ()=>{
if(text.value !=""){
    //run function
    loadData()
} 
})
///////UP TO 27:27 of vid (API not linking to page)


class Dictionary{

    
}
export default Dictionary;

