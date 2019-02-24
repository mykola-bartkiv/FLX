let title = document.getElementById('new-item');
let addButton = document.getElementById('add-btn');
let listBox = document.getElementById('list-box');


title.addEventListener('change', function() {
    let start = 0;
    let mes = document.getElementsByClassName('mainTitle')[start];
    let max = 10;
    if (listBox.childNodes.length < max) {
        if (title.value) {
            addButton.classList.remove('disable');
            addButton.addEventListener('click', clickPlus);
        }
    } else {
        let present = 1;
        if (mes.childNodes.length <= present) {
            let span = document.createElement('span');
            let mesText = document.createTextNode('Maximum item per list are created');
            span.appendChild(mesText);
            mes.appendChild(span);
            title.value ='';
            title.setAttribute('disabled','');
        }
    }
});

function clickPlus() {
    if (title.value) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let icon = document.createElement('i');
        let txt = document.createTextNode(title.value);
        let iconText = document.createTextNode('delete');
        p.className = 'item-wrapper';
        p.appendChild(span);
        p.appendChild(txt);
        icon.className = 'material-icons delete-icon';
        icon.appendChild(iconText);
        div.className = 'list-item';
        div.appendChild(p);
        div.appendChild(icon);
        listBox.appendChild(div);
        title.value ='';
        this.classList.add('disable');
    }

    let check = document.querySelectorAll('.list-item .item-wrapper span');
    check.forEach( function (e) {
        e.addEventListener('click', function() {
            let start = 0;
            if (this.childNodes.length === start) {
                let icon = document.createElement('i');
                let iconText = document.createTextNode('done');
                icon.className = 'material-icons';
                icon.appendChild(iconText);
                this.appendChild(icon);
            }
        });
    });

    let del = document.querySelectorAll('.list-item .delete-icon');
    del.forEach( function (e) {
        e.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });
}