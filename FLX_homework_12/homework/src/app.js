const rootNode = document.getElementById('root');

let todoItems;
let id;
let hash = window.location.hash;

if (hash === '') {
    homePage();
} else if (hash === '#/add') {
    addTaskPage();
} else if ( hash.includes('#/modify')) {
    modifyPage();
}

function homePage() {
    let title = document.createElement('h1');
    title.innerHTML = 'Simple TODO application';

    let btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', 'btn-add');
    btnAdd.setAttribute('onclick', 'addBtn()');
    btnAdd.innerHTML = 'Add new task';

    let div = document.createElement('div');
    div.setAttribute('id', 'lists-box');
    let data = JSON.parse(localStorage.getItem('items'));
    if (data&&data.length) {
        for (let i = 0; i < data.length; i += 1) {
            let url = data[i].isDone ? 'assets/img/done-s.png' : 'assets/img/todo-s.png';
            let item = document.createElement('div');
            data[i].isDone ? item.classList.add('done') : false;
            item.classList.add('list-item');
            item.setAttribute('id', `${data[i].id}`);
            item.innerHTML = '<img src=' + url + ' class="todo"><p>' +
                data[i].description +
                '</p><img src="assets/img/remove-s.jpg"  class="remove">';
            div.appendChild(item);
        }
    } else {
        let p = document.createElement('p');
        p.textContent = 'TODO is empty';
        div.appendChild(p);
    }

    rootNode.appendChild(title);
    rootNode.appendChild(btnAdd);
    rootNode.appendChild(div);
}

function addTaskPage() {
    let title = document.querySelector('h1');
    if (title) {
        title.innerHTML = 'Add task';
    } else {
        let title = document.createElement('h1');
        title.innerHTML = 'Add task';
        rootNode.appendChild(title);
    }

    let btnAdd = document.querySelector('#btn-add');
    btnAdd ? btnAdd.remove() : false;

    let div = document.querySelector('#lists-box');
    div ? div.remove() : false;

    let input = document.createElement('input');
    input.setAttribute('name', 'set-value');
    input.setAttribute('type', 'text');
    input.setAttribute('value', '');

    let btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('id', 'btn-wrapper');
    btnWrapper.innerHTML = '<button name="cancel" onclick="cancelBtn()">Cancel</button>' +
        '<button name="save" onclick="saveBtn()">Save changes</button>';

    rootNode.appendChild(input);
    rootNode.appendChild(btnWrapper);
}

function modifyPage(value) {
    let title = document.querySelector('h1');
    if (title) {
        title.innerHTML = 'Modify item';
    } else {
        let title = document.createElement('h1');
        title.innerHTML = 'Modify item';
        rootNode.appendChild(title);
    }

    let btnAdd = document.querySelector('#btn-add');
    btnAdd ? btnAdd.remove() : false;

    let div = document.querySelector('#lists-box');
    div ? div.remove() : false;

    let input = document.createElement('input');
    input.setAttribute('name', 'set-value');
    input.setAttribute('type', 'text');
    if (!value) {
        input.setAttribute('value', '');
    } else {
        input.setAttribute('value', `${value}`);
    }

    let btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('id', 'btn-wrapper');
    btnWrapper.innerHTML = '<button name="cancel" onclick="cancelBtn()">Cancel</button>' +
        '<button name="save-change" onclick="saveChangeBtn()">Save changes</button>';

    rootNode.appendChild(input);
    rootNode.appendChild(btnWrapper);
}

function addBtn() {
    window.location.href = '#/add';
    addTaskPage();
}
function cancelBtn() {
    window.location.href = '';
}
function saveBtn() {
    let input = document.querySelector('input');
    if (input.value) {
        todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        let id = new Date();
        let obj = {
            isDone: false,
            id: id.getTime(),
            description: input.value
        };
        todoItems.push(obj);
        localStorage.setItem('items', JSON.stringify(todoItems));
        window.location.href = '';
    }
}
function saveChangeBtn() {
    let input = document.querySelector('input');
    if (input.value) {
        let id = location.hash;
        let cut = 9;
        id = id.substr(cut);
        id = parseInt(id, 10);
        todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        for (let j =0; j < todoItems.length; j += 1) {
            if (todoItems[j].id === id) {
                todoItems[j].description = input.value;
                localStorage.setItem('items', JSON.stringify(todoItems));
            }
        }
        cancelBtn();
    }
}


//change item
let changeItem = document.querySelectorAll('.list-item p');
for (let i = 0; i < changeItem.length; i += 1) {
    changeItem[i].addEventListener('dblclick', function() {
        let id = this.parentNode.getAttribute('id');
        let value = this.innerHTML;
        window.location.href = `#/modify/${id}`;
        modifyPage(value);
    });
}

//remove item
let removeItem = document.querySelectorAll('.remove');
for (let i = 0; i < removeItem.length; i += 1) {
    removeItem[i].addEventListener('click', function() {
        let id = this.parentNode.getAttribute('id');
        id = parseInt(id, 10);
        todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        for (let j =0; j < todoItems.length; j += 1) {
            if (todoItems[j].id === id) {
                let start = -1;
                j > start ? todoItems.splice(j, 1) : false;
                localStorage.setItem('items', JSON.stringify(todoItems));
            }
        }
        window.location.href = '';
    });
}

//to do item
let todoItem = document.querySelectorAll('.todo');
for (let i = 0; i < todoItem.length; i += 1) {
    todoItem[i].addEventListener('click', function() {
        let id = this.parentNode.getAttribute('id');
        id = parseInt(id, 10);
        todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        for (let j =0; j < todoItems.length; j += 1) {
            if (todoItems[j].id === id) {
                todoItems[j].isDone = true;
                let start = -1;
                let newItem = j > start ? todoItems.splice(j, 1) : false;
                let first = 0;
                todoItems.push(newItem[first]);
                localStorage.setItem('items', JSON.stringify(todoItems));
            }
        }
        window.location.href = '';
    });
}







