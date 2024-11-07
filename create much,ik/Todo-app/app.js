const add = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
let input = document.getElementById('todo-input');
let del = document.getElementsByClassName('delete-btn');
let canDrop = document.getElementsByClassName('canDrop');

add.addEventListener('click', () => {
  let inputVal = input.value;
  let btn = document.createElement('p');
  btn.setAttribute('draggable', 'true');
  btn.setAttribute('id', 'draggable-item'); // Add an id to the draggable element
  let dels = document.createElement('button');

  dels.innerText = 'X';
  dels.classList.add('delete-btn'); // Use add method to add a class

  btn.innerText = inputVal;
  list.appendChild(btn);
  btn.appendChild(dels); // Append the button element, not the collection

  input.value = '';

  dels.addEventListener('click', () => {
    btn.remove();
  });

  btn.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', btn.id);
    btn.style.opacity = '0.5';
  });

  btn.addEventListener('dragend', (event) => {
    btn.style.opacity = '';
  });

  // Add dragover event listener to allow dropping on divs with class canDrop
  for (const droppable of canDrop) {
    droppable.addEventListener('dragover', (event) => {
      event.preventDefault(); // Allow dropping within these elements
    });
  }

  // Add drop event listener to handle dropping on divs with class canDrop
  for (const droppable of canDrop) {
    droppable.addEventListener('drop', (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData('text/plain');
      const draggableElement = document.getElementById(data);
      droppable.appendChild(draggableElement);
      draggableElement.style.opacity = ''; // Reset opacity after dropping
    });
  }
});