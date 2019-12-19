import {elements} from "./elements";

elements.amiiboForms.addEventListener("keypress", function(event){
    if(event.KeyCode ===13) {
        event.preventDefault();
        document.querySelector(".btn").click();
    }
});

function search(){
    elements.amiiboForms.addEventListener("submit", async function (e){
        e.preventDefault();
        const amiiboURL = `https://www.amiiboapi.com/api/amiibo/?character=${elements.amiiboName.value}`;
    });
}