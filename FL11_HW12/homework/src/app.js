const rootNode = document.getElementById('root');

const todoLocal = 'myTodoList';
const doneLocal = 'myDoneList';
const todoJson = localStorage.getItem(todoLocal);
const doneJson = localStorage.getItem(doneLocal);
const listTodoItems = JSON.parse(todoJson) || [];
const listDoneItems = JSON.parse(doneJson) || [];
const notIndex = -1;
const mainPage = '';
const addNewItemPage = '#/add';
const modifyItemPage = '#/modify/';


function setLocalStorageObjectItem(array, localStorageKey) {
  localStorage.setItem(localStorageKey, JSON.stringify(array));
}

window.addEventListener('load', checkHash);
window.addEventListener('hashchange', checkHash);

function checkHash() {
  if (location.hash === mainPage) {
    renderMainPage();
  }

  if (location.hash === addNewItemPage) {
    renderAddNewItemPage();
  }

  if (location.hash.includes(modifyItemPage)) {
    renderModifyItemPage();
  }
}

function renderMainPage() {
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);

  const h1Text = document.createTextNode('Simple TODO application');
  h1.appendChild(h1Text);

  const addButton = document.createElement('button');
  rootNode.appendChild(addButton);

  const addButtonText = document.createTextNode('Add new task');
  addButton.appendChild(addButtonText);
  addButton.setAttribute('class', 'button');

  const arrToRender = listTodoItems.concat(listDoneItems);

  if (!arrToRender.length) {
      const paragraph = document.createElement('p');
      rootNode.appendChild(paragraph);

      const paragraphText = document.createTextNode('TODO is empty');
      paragraph.setAttribute('class', 'list-empty');
      paragraph.appendChild(paragraphText);

  } else {
    const listTodoItemsList = document.createElement('ul');
    rootNode.appendChild(listTodoItemsList);

    arrToRender.forEach((item) => {
      const actionListItem = document.createElement('li');
      actionListItem.setAttribute('class', 'action_list_item');
      rootNode.appendChild(actionListItem);
      actionListItem.setAttribute('id', item.id);

      const square = document.createElement('img');
      actionListItem.appendChild(square);
      square.setAttribute('class', 'square');

      const toDoAction = document.createElement('a');
      actionListItem.appendChild(toDoAction);

      const toDoActionDescription = document.createTextNode(item.description);
      toDoAction.appendChild(toDoActionDescription);
      toDoAction.setAttribute('class', 'action-description');
      toDoAction.setAttribute('href', `${modifyItemPage}${item.id}`);

      if (!item.isDone) {
        square.setAttribute('src', './assets/img/todo-s.png');
      } else {
        square.setAttribute('src', './assets/img/done-s.png');
        toDoAction.style.backgroundColor = 'grey';
      }
        

      square.addEventListener('click', markChecked);

      const remove = document.createElement('img');
      actionListItem.appendChild(remove);
      remove.setAttribute('src', './assets/img/remove-s.jpg');
      remove.addEventListener('click', removeActionItem);
    });
  }
  addButton.addEventListener('click', setaddNewItemPage);
}

function markChecked(event) {
  const itemId = parseInt(event.target.parentNode.id);
  const indexOfElementToRemove = listTodoItems.findIndex(item => item.id === itemId);
  if (indexOfElementToRemove === notIndex) {
    return
  }
  const currentActionItemInTodoList = listTodoItems[indexOfElementToRemove];
  currentActionItemInTodoList.isDone = true;
  listTodoItems.splice(indexOfElementToRemove, 1);
  listDoneItems.push(currentActionItemInTodoList);

  setLocalStorageObjectItem(listTodoItems, todoLocal);
  setLocalStorageObjectItem(listDoneItems, doneLocal);

  renderMainPage();
}

function removeActionItem(event) {
  const itemId = parseInt(event.target.parentNode.id);
  const removeFromlistTodoItems = listTodoItems.findIndex(item => item.id === itemId);
  if (removeFromlistTodoItems !== notIndex) {
    listTodoItems.splice(removeFromlistTodoItems, 1);
  }
  const removeFromlistDoneItems = listDoneItems.findIndex(item => item.id === itemId);

  if (removeFromlistDoneItems !== notIndex) {
    listDoneItems.splice(removeFromlistDoneItems, 1);
  }

  setLocalStorageObjectItem(listTodoItems, todoLocal);
  setLocalStorageObjectItem(listDoneItems, doneLocal);

  renderMainPage();
}

function setaddNewItemPage(event) {
  window.location.hash = addNewItemPage;
  event.preventDefault();
}

function renderAddNewItemPage() {
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);
  const h1Text = document.createTextNode('Add task');
  h1.appendChild(h1Text);

  const inputNewTask = document.createElement('input');
  inputNewTask.setAttribute('id', 'field-for-input');
  rootNode.appendChild(inputNewTask);

  const divForButtons = document.createElement('div');
  divForButtons.setAttribute('class', 'buttons');
  rootNode.appendChild(divForButtons);
  const cancelButton = document.createElement('button');
  divForButtons.appendChild(cancelButton);
  cancelButton.setAttribute('class', 'button');
  const cancelButtonText = document.createTextNode('Cancel');
  cancelButton.appendChild(cancelButtonText);
  const saveChangesButton = document.createElement('button');
  divForButtons.appendChild(saveChangesButton);
  saveChangesButton.setAttribute('class', 'button');
  const saveChangesButtonText = document.createTextNode('Save changes');
  saveChangesButton.appendChild(saveChangesButtonText);

  cancelButton.addEventListener('click', setmainPage);
  saveChangesButton.addEventListener('click', saveAfterAdd);
}

function setmainPage(event) {
  window.location.hash = mainPage;
  event.preventDefault();
}

function saveAfterAdd(event) {
  const newAction = document.getElementById('field-for-input').value;

  if (!newAction) {
    return;
  }
  listTodoItems.push({isDone: false, id: generateId(), description: newAction});
  setLocalStorageObjectItem(listTodoItems, todoLocal);
  setmainPage(event);
}

function generateId() {
  const ids = listTodoItems.concat(listDoneItems).map((item) => item.id);
  return ids.length ? 1 + Math.max(...ids) : 1;
}

function renderModifyItemPage() {
  const itemId = parseInt(location.hash.split('/').pop());
  const itemToModify = listTodoItems.find(item => item.id === itemId);

  if (!itemToModify) {
    window.location.hash = mainPage;
    return;
  }
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);
  const h1Text = document.createTextNode('Modify item');
  h1.appendChild(h1Text);

  const inputWithActionItem = document.createElement('input');
  inputWithActionItem.setAttribute('id', 'field-for-input');
  rootNode.appendChild(inputWithActionItem);
  inputWithActionItem.defaultValue = itemToModify.description;

  const divForButtons = document.createElement('div');
  divForButtons.setAttribute('class', 'buttons');
  rootNode.appendChild(divForButtons);
  const cancelButton = document.createElement('button');
  divForButtons.appendChild(cancelButton);
  cancelButton.setAttribute('class', 'button');
  const cancelButtonText = document.createTextNode('Cancel');
  cancelButton.appendChild(cancelButtonText);
  const saveChangesButton = document.createElement('button');
  divForButtons.appendChild(saveChangesButton);
  saveChangesButton.setAttribute('class', 'button');
  const saveChangesButtonText = document.createTextNode('Save changes');
  saveChangesButton.appendChild(saveChangesButtonText);

  cancelButton.addEventListener('click', setmainPage);
  saveChangesButton.addEventListener('click', saveAfterModify);
}

function saveAfterModify(event) {
  const modifiedAction = document.getElementById('field-for-input').value;

  if (!modifiedAction) {
    return;
  }
  const itemId = parseInt(location.hash.split('/').pop());
  listTodoItems.find(item => item.id === itemId).description = modifiedAction;
  setLocalStorageObjectItem(listTodoItems, todoLocal);
  setmainPage(event);
}
