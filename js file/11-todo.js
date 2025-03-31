    const todoList = [];
    let addtodo ='';

    const inputElement = document.getElementById('myInput');
    // const buttonElement = addToDo();

    inputElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission (if within a form)
        addToDo(); // Trigger the button's click event
      }
    });

    function renderToDoList(){
      addtodo = '';
      for(let i=0; i < todoList.length; i++){
      const value = todoList[i];
      console.log(value);
      // const name = todoList.name;
      // const dueDate = todoList.dueDate;
      const {name, dueDate} = value;
      const html = `<p>${name} ${dueDate}
      <button onclick = "deleteIndex(${i})">Delete 1</button>
      <button onclick = "todoList.splice(${i}, 1); renderToDoList()">Delete 2</button></p>`;
      console.log(html);
      addtodo += html;
      
    }
      document.querySelector('.display').innerHTML = addtodo;
      console.log(addtodo);
    }
    function deleteIndex(i){
      todoList.splice([i],1);
      console.log(todoList);
      renderToDoList();
    }

    
 
    function addToDo(){
      let inputA = document.querySelector('.js-input');
      let dAte = document.querySelector('.js-date');
      let dueDate = dAte.value;
      const name = inputA.value;
      console.log(dueDate);
      // console.log(name);
      todoList.push({name, dueDate});
      // console.log(todolist);
      inputA.value = ""; 

      renderToDoList()
    }