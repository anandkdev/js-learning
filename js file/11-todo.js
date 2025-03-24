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
      const html = `<p>${value}</p>`;
      addtodo += html;
    }
      document.querySelector('.display').innerHTML = addtodo;
    }
 
    function addToDo(){
      let inputA = document.querySelector('.js-input');
      const name = inputA.value;
      // console.log(name);
      todoList.push(name);
      // console.log(todolist);
      inputA.value = ""; 

      renderToDoList()
    }