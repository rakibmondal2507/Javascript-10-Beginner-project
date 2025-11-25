const inputTask = document.querySelector("#input-task")
const taskBtn = document.querySelector(".plus-icon")

const taskList = document.querySelector(".task-list")
const image = document.querySelector('img');


const toggleImage = () =>{
    if(taskList.children.length ===0){
        image.style.display = "block";
    }else{
        image.style.display = "none";
    }
}


const addTask = (e) =>{
    e.preventDefault();


    const taskText = inputTask.value.trim()
    
    if(!taskText)
        return;

    const li = document.createElement("li");
    // li.textContent = taskText;
    li.innerHTML = `<input type="checkbox" class="checkbox">
    <span>${taskText}</span>
    <div class="task-btn">
  
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>`

  // <button class="edit-btn">
  //   <i class="fa-solid fa-pen"></i>
  //   </button>
  
    taskList.appendChild(li);
    inputTask.value ='';  //for clear input task

    toggleImage();

     // Click on li (task) to toggle checkbox

  const checkbox = li.querySelector(".checkbox");

  li.addEventListener("click", (event) => {
    // Prevent double toggling if directly clicked on checkbox
    if (event.target !== checkbox) {
      checkbox.checked = !checkbox.checked;
    }

    //  const spanText = li.querySelector('span');
    // if (checkbox.checked) {
    //   spanText.style.textDecoration = 'line-through';
    //   spanText.style.opacity = '0.5';
    // } else {
    //   spanText.style.textDecoration = 'none';
    //   spanText.style.opacity = '1';
    // }

// === delete task  ====
li.querySelector('.delete-btn').addEventListener('click', (e) =>{
  e.stopPropagation()
  li.remove();
  toggleImage()
})


  });

}

taskBtn.addEventListener('click', addTask);
inputTask.addEventListener('keypress',(e)=>{
   if(e.key === 'Enter'){
    addTask(e);
   }
})

