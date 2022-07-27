
let submit = document.getElementById('submit');

document.addEventListener("DOMContentLoaded", function() {
  loadLocalStorage()

let formForToDo = document.getElementById('Formfortodo');
let addToList = document.getElementById('list');
let items = document.getElementById('items');
formForToDo.addEventListener("submit", function(event){
    event.preventDefault();

  
  addToDo(document.getElementById("add2list").value);
  
  
    saveLocalStorage()
  
  })

  function saveLocalStorage() {
    const savedTodos = []
    const saveList = document.querySelectorAll('li');
    for (let i = 0; i < saveList.length; i++){
      savedTodos.push(saveList[i].innerText.replace('remove', ''))
    }
    
    localStorage.setItem("newTask", JSON.stringify(savedTodos) )        
  }
  
  function loadLocalStorage() {
    try {
      const savedTodos = JSON.parse(localStorage.newTask)
      for (let i = 0; i < savedTodos.length; i++) {
        addToDo(savedTodos[i])
      }
    } catch { }
   

  }

  function addToDo(selectedItem) {
    let newTask = document.createElement('li');
    newTask.innerText = selectedItem

    newTask.addEventListener('click', function(linethrough){
     linethrough.target.style.textDecoration = "line-through";
    })

    let removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.addEventListener('click', function(remove){
      newTask.remove();
    })
    newTask.appendChild(removeButton);
    let items = document.getElementById('items');
    items.appendChild(newTask)

  }

})
