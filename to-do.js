// Constants
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// DOM elements
const userIdInput = document.getElementById('user-id');
const todoList = document.getElementById('todo-list');
const newTodoUserIdInput = document.getElementById('new-todo-user-id');
const newTodoTitleInput = document.getElementById('new-todo-title');

// Functions
function fetchTodos() {
  // Clear existing todos
  todoList.innerHTML = '';

  // Get user ID from input
  const userId = userIdInput.value;

  // Fetch todos for user


//   fetch(`https://dummyjson.com/todos/random?userId=${userId}`)
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });




  fetch(`https://dummyjson.com/todos/random?userId=${userId}`)

    .then(response => response.json())
    .then(todos => {
      // Display todos in list
      todos.forEach(todo => {
        const todoElement = document.createElement('div');

        // Mark as completed if necessary
        if (todo.completed) {
          todoElement.classList.add('completed');
        }

        // Display title
        todoElement.innerText = todo.title;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.onclick = () => {
          // Delete todo


// fetch(`https://dummyjson.com/todos/1/${todo.id}`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });




  fetch(`https://dummyjson.com/todos/1/${todo.id}`, {
            method: 'DELETE'
          })
            .then(response => response.json())
            .then(() => {
              // Remove from list
              todoElement.remove();
            });
        };
        todoElement.appendChild(deleteButton);

        // Add to list
        todoList.appendChild(todoElement);
      })
    });
}

function addTodo(event) {
  event.preventDefault();
  
  // Get user ID and title from input
  const userId = newTodoUserIdInput.value;
  const title = newTodoTitleInput.value;

  // Add todo
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(todo => {
      // Display in list
      const todoElement = document.createElement('div');
      todoElement.innerText = todo.title;

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'X';
      deleteButton.onclick = () => {
        // Delete todo


//  fetch(`https://dummyjson.com/todos/1/${todo.id}`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });




  fetch(`https://dummyjson.com/todos/1/${todo.id}`, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(() => {
            // Remove from list
            todoElement.remove();
          });
      };
      todoElement.appendChild(deleteButton);

      todoList.appendChild(todoElement);
    });
}