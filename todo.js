const ipt = document.querySelector(".input");
const ul = document.querySelector("ul");
const btn = document.querySelector(".input__btn");
const item = document.getElementsByTagName("li");

function iptLength() {
    return ipt.value.length;
}

function todoLength() {
    return item.length;
}


/*function createTodo() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ipt.value));
    ul.appendChild(li);
    ipt.value = "";


    function deleteTodos() {
        li.setAttribute("class", "delete");
    }

    const btn__todo = document.createElement("button");
    btn__todo.appendChild(document.createTextNode("X"));
    btn__todo.classList.add("no-select")
    li.appendChild(btn__todo);
    btn__todo.addEventListener("click", deleteTodos);

    function toDoDone() {
        
        li.setAttribute("class", "todone");
        btn__todo
    }
    li.addEventListener("click", toDoDone)

}*/
function createTodo() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ipt.value));
    ul.appendChild(li);
    ipt.value = "";
  
    function deleteTodos() {
        if (li.classList.contains("todone")) {
          li.classList.remove("todone");
        }
        li.classList.add("delete");
        setTimeout(function() {
          li.remove();
        }, 300);
      }
      
  
      const btn__todo = document.createElement("button");
      btn__todo.appendChild(document.createTextNode("X"));
      btn__todo.classList.add("no-select")
      li.appendChild(btn__todo);
      btn__todo.addEventListener("click", deleteTodos);
    
      function toDoDone(event) {
        event.stopPropagation();
        if (li.classList.contains("delete")) {
          return;
        }
        li.classList.toggle("todone");
      }
    
      li.addEventListener("click", toDoDone)
    }
  

function addTodoOnClick() {
    if (iptLength() > 0) {
        createTodo();
    }
}


function addTodoAfterKeyPress(e) {
    if (iptLength() > 0 && e.which === 13) {
        createTodo();
    }
}

btn.addEventListener("click", addTodoOnClick);
ipt.addEventListener("keypress", addTodoAfterKeyPress);