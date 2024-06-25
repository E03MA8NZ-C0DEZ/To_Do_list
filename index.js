const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox==='')
        {
            alert("You must right something");
        }
    else
        {
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;
            listcontainer.appendChild(li);
        }
}