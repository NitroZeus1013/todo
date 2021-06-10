console.log("working");
let  container = document.querySelector("#todos");
let input = document.querySelector("#add-todo");
let itemCount = document.querySelector('#items-left')



function updateCount(){
    return document.querySelectorAll('.unchecked').length;
}


function checkUncheck(e){
    

    e.target.classList.toggle('checkedimg');
    e.target.classList.toggle('unchecked');

    itemCount.textContent=`${updateCount()} items left`;
   
    // e.target.children[0].setAttribute('src',"./images/icon-check.svg");
    // console.log(e.target);

}




function createTodo(text){
    
    let todo = document.createElement('div');
    todo.addEventListener('click',()=>{
        todo.classList.toggle('selected');
    })
    let img_div= document.createElement('div');
    let contentDiv = document.createElement('div');
    let imgContent= document.createElement('img');
    let todoText = document.createTextNode(text);
    img_div.addEventListener('click',checkUncheck);
    todo.classList.add('todo');
    img_div.classList.add('unchecked');
    contentDiv.classList.add('todo-content');
    img_div.appendChild(imgContent);
    contentDiv.appendChild(todoText);
    todo.appendChild(img_div)
    todo.appendChild(contentDiv);
    return todo;

}

function insertTodo(){
    let todoText = document.querySelector("#add-todo").value;
    if(!todoText){
        alert("Please add some todo inside input");
    }
    else{
        let newTodo=createTodo(todoText);
        container.appendChild(newTodo);
        itemCount.textContent=`${updateCount()} items left`;
    }
}

input.addEventListener('keydown',(e)=>{
    if(e.keyCode ===13){
        insertTodo();
        input.value="";
    }
    
})





function Active(){
    let checked = document.querySelectorAll('.todo');
    checked.forEach(elem => {
        if(elem.classList.contains('selected') && elem.style.display!=='none')
        elem.style.display="none";
        else 
        elem.style.display="flex";

    })
}
function All(){

    let checked = document.querySelectorAll('.todo');
    checked.forEach(elem => {
        if(elem.style.display==='none')
        elem.style.display="flex";
    })
}
function Completed(){
    let checked = document.querySelectorAll('.todo');
    checked.forEach(elem => {
        if(elem.classList.contains('selected'))
        elem.style.display="flex";
        else 
        elem.style.display="none";
    })
}

function clearSelected(){
    let checked = document.querySelectorAll('.todo');
    checked.forEach(elem => {
        if(elem.classList.contains('selected')){
            elem.parentElement.removeChild(elem);
        }
    })
}