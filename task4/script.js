function reverseString(str) {
    return str.split('').reverse().join('');
}

function checkBrackets(expression) {
    let count = 0;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            count++;
        } else if (expression[i] === ')') {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}

function reverseStringDemo() {
    const input = document.getElementById('inputString').value;
    const reversed = reverseString(input);

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `
        <div class="task-section">
            <h2>Результат переворота строки</h2>
            <div class="result">
                <p><strong>Исходная строка:</strong> "${input}"</p>
                <p><strong>Перевернутая строка:</strong> "${reversed}"</p>
                <p><strong>Функция использована:</strong> reverseString("${input}")</p>
            </div>
        </div>
    `;
}

function checkBracketsDemo() {
    const expression = document.getElementById('inputExpression').value;
    const isValid = checkBrackets(expression);

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `
        <div class="task-section">
            <h2>Результат проверки скобок</h2>
            <div class="${isValid ? 'success' : 'error'}">
                <p><strong>Выражение:</strong> ${expression}</p>
                <p><strong>Результат проверки:</strong> ${isValid ? 'Правильно' : 'Неправильно'}</p>
                <p><strong>Функция использована:</strong> checkBrackets("${expression}")</p>
            </div>
        </div>
    `;
}


function loadExample1() {
    document.getElementById('inputString').value = "sample";
    reverseStringDemo();
}

function loadExample2() {
    document.getElementById('inputExpression').value = "((a + b) / 5-d)";
    checkBracketsDemo();
}

function loadExample3() {
    document.getElementById('inputExpression').value = ")(a + b))";
    checkBracketsDemo();
}

window.onload = function() {
    loadExample1();
};