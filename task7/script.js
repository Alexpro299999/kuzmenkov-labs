function selectViaQuerySelector() {
    const nestedDivs = document.querySelectorAll('div > div');

    resetSelection();

    nestedDivs.forEach(div => {
        div.classList.add('selected');
    });

    const result = document.getElementById('selectionResult');
    result.innerHTML = `
        <p><strong>Найдено элементов:</strong> ${nestedDivs.length}</p>
        <p><strong>Выбранные элементы:</strong></p>
        <ul>
            ${Array.from(nestedDivs).map(div => `<li>${div.textContent}</li>`).join('')}
        </ul>
        <p><strong>Использовано:</strong> querySelectorAll('div > div')</p>
    `;
}

function selectViaGetElementsByTagName() {
    const allDivs = document.getElementsByTagName('div');

    resetSelection();

    for (let i = 0; i < allDivs.length; i++) {
        const div = allDivs[i];
        if (div.parentElement && div.parentElement.tagName === 'DIV') {
            div.classList.add('selected');
        }
    }

    const result = document.getElementById('selectionResult');
    const selectedDivs = document.querySelectorAll('.selected');
    result.innerHTML = `
        <p><strong>Найдено элементов:</strong> ${selectedDivs.length}</p>
        <p><strong>Выбранные элементы:</strong></p>
        <ul>
            ${Array.from(selectedDivs).map(div => `<li>${div.textContent}</li>`).join('')}
        </ul>
        <p><strong>Использовано:</strong> getElementsByTagName('div') + проверка родителя</p>
    `;
}

function resetSelection() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        div.classList.remove('selected');
    });

    const result = document.getElementById('selectionResult');
    result.innerHTML = '';
}

function logTextInput() {
    const input = document.getElementById('textInput');
    const value = input.value;

    console.log(value);

    const result = document.getElementById('textInputResult');
    result.innerHTML = `
        <p><strong>Текст из поля:</strong> "${value}"</p>
        <p><strong>Функция использована:</strong> logTextInput()</p>
    `;
}

function changeBackgroundColor() {
    const colorInput = document.getElementById('colorInput');
    const colorValue = colorInput.value;

    document.body.style.backgroundColor = colorValue;

    const result = document.getElementById('colorResult');
    result.innerHTML = `
        <p><strong>Цвет фона изменен на:</strong> ${colorValue}</p>
        <p><strong>Функция использована:</strong> changeBackgroundColor()</p>
    `;
}

window.onload = function() {
    selectViaQuerySelector();
};