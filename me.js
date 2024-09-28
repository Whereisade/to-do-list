const inputCtn = document.getElementById("inputbx");
const taskList = document.querySelector(".tasklist");
const btn = document.getElementById('btnclick');

btn.addEventListener('click', function() {
    if(inputCtn.value == ''){
        alert('Please input the information')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputCtn.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="&#9747";
        li.appendChild(span);
    }
    inputCtn.value = "";
    saveData();

});

taskList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false); 

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function displayStuff(){
    taskList.innerHTML = localStorage.getItem('data');
}
displayStuff();