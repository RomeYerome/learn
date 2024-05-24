


document.addEventListener('keypress', onKeyPress);


function onKeyPress(e) {

    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'event.key': e.key === ' ' ? 'Space' : e.key,
        'event.keyCode': e.keyCode,
        'event.code': e.code
    }

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        small.appendChild(keyText);

        const text = document.createTextNode(keyCodes[key]);

        div.appendChild(text);
        div.appendChild(small);

        insert.appendChild(div);
    }


}