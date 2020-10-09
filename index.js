//Selectors
const todoInput =document.querySelector(".todo-input");
const todoButton =document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");  //hold shift+alt and press on the down arrow
const filterOption =document.querySelector(".filter-todo");


//Event Listener
todoButton.addEventListener("click", addTodo);  ///click  leyince addTodo function çalışır
todoList.addEventListener("click", deleteCheck); //click yapınca delete olacak
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event){
    event.preventDefault();  // sayfaya basınca refresh olmasın diye
    
    //Todo DIV
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");  //todoDiv e "todo" isimli class atadık
    
    //Create LI
    const newTodo =document.createElement("li");
    newTodo.innerText =todoInput.value;   // oluşturulan newtodo isimli li elementi todoInput tan gelen value ya bağlandı
    newTodo.classList.add("todo-item"); 
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton =document.createElement("button");     // innerText deyip üzerine yazıda yazabilirdik
    completedButton.innerHTML ='<i class ="fas fa-check"></i>';  //completedButton üzerinde img koyduk
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    //Check Trash Button
    const trashButton =document.createElement("button");     // innerText deyip üzerine yazıda yazabilirdik
    trashButton.innerHTML ='<i class ="fas fa-trash"></i>';  //completedTrash üzerinde img koyduk
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //Append to List  //oluşturduğumuz div i ul deki todo-list e ekliyoruz
    todoList.appendChild(todoDiv)
    
    //Clear TOdo Input value
    todoInput.value ="";

}

function deleteCheck(e){
    const item =e.target;

    //Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo =item.parentElement;

        //Animation
        todo.classList.add('fall');  // remove olmadan önce style eklemek için class verdik
        // todo.remove();transition sonlandığında çalış demek
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn'){
        const todo =item.parentElement;
        todo.classList.toggle('completed'); // style ı yok ise ekler, var ise çıkarır
    }


}




function filterTodo(e){
    const todos =todoList.childNodes;  //todoList in tüm elemanlarını todos değişkenine "childNodes" ile atadık
    todos.forEach(function(todo){       //herbir todos elemanları için function todo yu çalıştır
            switch(e.target.value){      // option lardaki value lar
                case "all" :
                    todo.style.display ="flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display ="flex";
                    }else{
                        todo.style.display ="none";
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display ="none";
                    }
                    break;
    
    
            }
        });
}

