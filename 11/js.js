let rootNode = document.getElementById('root').addEventListener('click', checkListItems);
let inputTask = document.getElementById('newTodo');
let message = document.querySelector('.message');

function checkListItems() {
    let todoItems = document.querySelectorAll('li');
    const maxTodo = 10;

    if (todoItems.length === maxTodo) {
        inputTask.disabled = true;
        message.innerHTML = 'Maximum item per list are created';
    } else {
        inputTask.disabled = false;
        message.innerHTML = '';
    }
}

function todoItem(value) {
let li = document.createElement('li');
    li.setAttribute('class', 'todoTaskItem');
    li.setAttribute('draggable', true);
    let id = new Date().valueOf();
    li.setAttribute('id', id);
    let checkboxBtn = document.createElement('button');
    checkboxBtn.setAttribute('class', 'btn checkbox');
    li.appendChild(checkboxBtn);
    let checkboxIcon = document.createElement('i');
    checkboxIcon.setAttribute('class', 'material-icons');
    checkboxIcon.innerHTML = 'check_box_outline_blank';
    checkboxBtn.appendChild(checkboxIcon);
    let label = document.createElement('label');
    label.innerHTML = value;
    li.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'hide')
    li.appendChild(input);
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn edit');
    li.appendChild(btnEdit);
    let editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'material-icons');
    editIcon.innerHTML = 'edit';
    btnEdit.appendChild(editIcon);
    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'btn delete');
    li.appendChild(btnDelete);
    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.innerHTML = 'delete';
    btnDelete.appendChild(deleteIcon);


    // li.addEventListener('dragstart', dragStart, false);    
    // li.addEventListener('dragenter', dragEnter, false);
    // li.addEventListener('dragover', dragOver, false);
    // li.addEventListener('dragleave', dragLeave, false);
    // li.addEventListener('drop', drop, false);
    // li.addEventListener('dragend', dragEnd, false);

   
    return li;
}

document.querySelector('.addTodo').addEventListener('click', () => {
    let inputValue = document.getElementById('newTodo');
    if (inputValue.value) {
        let taskList = document.getElementById('todoList');
        let taskItem = todoItem(inputValue.value)
        taskList.appendChild(taskItem);
        taskAddEvent(taskItem);
        inputValue.value = ''; 
    }
   
});

function deleteTask(e) {
    let item = e.target;
    item.parentNode.parentNode.remove();
}
function editTask() {
    let btnEdit = this;
    let item = this.parentNode;
    let label = item.querySelector('label');
    let input = item.querySelector('input[type=text]');
    let chahgeEditClass = item.classList.contains('editMode');
    if (chahgeEditClass) {
        label.innerText = input.value;
        btnEdit.classList.remove('btnSave');
        btnEdit.classList.add('edit');
        input.classList.add('hide');
        label.classList.remove('hide');
        btnEdit.innerHTML = '<i class="material-icons">edit</i>';
    } else {
        input.value = label.innerText;
        label.classList.add('hide');
        input.classList.remove('hide');
        btnEdit.classList.remove('edit');
        btnEdit.classList.add('save');
        btnEdit.innerHTML='<i class="material-icons">save</i>'

    }
    item.classList.toggle('editMode');
}
function finishTask () {
    let item = this.parentNode;
    let checkbox = item.querySelector('button.checkbox');    
    let label = item.querySelector('label');    
    let btnEdit = item.querySelector('button.edit');    
    let btnDelete = item.querySelector('button.delete');     
    let containClass = item.classList.contains('editMode');
    if (containClass) {
        checkbox.innerHTML = '<i class="material-icons">check_box</i>';
        label.classList.add('done');
        btnEdit.classList.add('done');
        btnDelete.classList.add('done');
        
    } else {
        checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
        label.classList.remove('done');
        btnEdit.classList.remove('done');
        btnDelete.classList.remove('done');
     
    }
    item.classList.toggle('editMode');
}
function editTask () {
    let btnEdit = this;
    let item = this.parentNode;
    let label = item.querySelector('label');
    let input = item.querySelector('input[type=text]');    
    let containClass = item.classList.contains('editMode');
    if (containClass) {
        label.innerText = input.value;
        btnEdit.classList.remove('save');
        btnEdit.classList.add('edit');
        input.classList.add('hide');
        label.classList.remove('hide');
        btnEdit.innerHTML = '<i class="material-icons">edit</i>';
    } else {
        input.value = label.innerText;
        label.classList.add('hide');
        input.classList.remove('hide');
        btnEdit.classList.remove('edit');
        btnEdit.classList.add('save');
        btnEdit.innerHTML = '<i class="material-icons">save</i>';
    }
    item.classList.toggle('editMode');
}
function taskAddEvent(item) {
    let checkbox = item.querySelector('button.checkbox');
    let btnEdit = item.querySelector('button.edit');
    let btnDelete = item.querySelector('button.delete');   
    checkbox.addEventListener('click', finishTask);
    btnEdit.addEventListener('click', editTask);
    btnDelete.addEventListener('click', deleteTask);
}




let dragSrcEl = null;


function dragStart (event) { 
    dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    this.style.opacity = '0.3';
    event.dataTransfer.setData('text/html', this.innerHTML);      
    // return dragSrcEl;
}
function dragOver (event) {
    if (event.preventDefault) {
        event.preventDefault();
    }    
    this.classList.add('doItem-elem_over');

    event.dataTransfer.dropEffect = 'move';
    return false;
}
function dragEnter () {
    // this.classList.add('doItem-elem_over');
}
function dragLeave () {
    this.classList.remove('doItem-elem_over');
}
function drop (event) {
    if (event.stopPropagation) {
        event.stopPropagation();        
    } 
    if (dragSrcEl !== this) {        
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
    }    
    return false;
}

function dragEnd () {
    // Array.from(itemsMove).forEach((element) => {
    //     element.classList.remove('doItem-elem_over');        
    //     this.style.opacity = '1';
    //     taskAddEvent(element);        
    // });
    
}
let itemsMove = document.querySelectorAll('#todoList .todoTaskItem');


function addDnD(element){
    element.addEventListener('dragstart', dragStart, false);    
    element.addEventListener('dragenter', dragEnter, false);
    element.addEventListener('dragover', dragOver, false);
    element.addEventListener('dragleave', dragLeave, false);
    element.addEventListener('drop', drop, false);
    element.addEventListener('dragend', dragEnd, false);
}
itemsMove.forEach.call(itemsMove, addDnD);
// Array.from(itemsMove).forEach((element) => {
//     element.addEventListener('dragstart', dragStart, false);    
//     element.addEventListener('dragenter', dragEnter, false);
//     element.addEventListener('dragover', dragOver, false);
//     element.addEventListener('dragleave', dragLeave, false);
//     element.addEventListener('drop', dragDrop, false);
//     element.addEventListener('dragend', dragEnd, false);
// })




