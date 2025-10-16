function processVectors() {
    const size = parseInt(document.getElementById('vectorSize').value);
    const elementsInput = document.getElementById('vectorElements').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (isNaN(size) || size <= 0) {
        alert("Пожалуйста, введите корректную размерность вектора.");
        return;
    }

    let vector;
    if (elementsInput) {
        vector = elementsInput.split(' ').map(Number);
        if (vector.some(isNaN)) {
            alert("Вектор содержит некорректные значения. Пожалуйста, вводите числа через пробел.");
            return;
        }
        if (vector.length !== size) {
            alert(`Количество введенных элементов (${vector.length}) не соответствует заданной размерности (${size}).`);
            return;
        }
    } else {
        vector = Array.from({length: size}, () => parseFloat((Math.random() * 20 - 10).toFixed(2)));
    }

    task1(vector.slice());
    task2(vector.slice());
}

function task1(vector) {
    const count = vector.filter(element => Math.abs(element) < 5).length;

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 1</h2>
            <p><strong>Условие:</strong> Дан вещественный вектор А(n). Найти количество элементов в векторе, абсолютная величина которых меньше 5.</p>
            <div class="result">
                <p><strong>Исходный вектор:</strong> [${vector.join(', ')}]</p>
                <p><strong>Количество элементов, |X| < 5:</strong> ${count}</p>
            </div>
        </div>
    `;
}

function task2(vector) {
    if (vector.length < 2) {
        const resultDiv = document.getElementById('results');
        resultDiv.innerHTML += `
            <div class="task">
                <h2>Задача 2</h2>
                <p><strong>Условие:</strong> Дан вещественный вектор А(n). Получить новый вектор путем умножения элементов, стоящих за минимальным элементом, на максимальный элемент вектора.</p>
                <div class="result">
                    <p><strong>Исходный вектор:</strong> [${vector.join(', ')}]</p>
                    <p>Вектор слишком мал для выполнения операции.</p>
                </div>
            </div>
        `;
        return;
    }

    const maxElement = Math.max(...vector);
    const minElement = Math.min(...vector);
    const minIndex = vector.indexOf(minElement);

    let transformedVector = vector.slice();

    for (let i = minIndex + 1; i < transformedVector.length; i++) {
        transformedVector[i] = parseFloat((transformedVector[i] * maxElement).toFixed(2));
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 2</h2>
            <p><strong>Условие:</strong> Дан вещественный вектор А(n). Получить новый вектор путем умножения элементов, стоящих за минимальным элементом, на максимальный элемент вектора.</p>
            <div class="result">
                <p><strong>Исходный вектор:</strong> [${vector.join(', ')}]</p>
                <p><strong>Максимальный элемент:</strong> ${maxElement}</p>
                <p><strong>Минимальный элемент:</strong> ${minElement} (индекс: ${minIndex})</p>
                <p><strong>Полученный вектор:</strong> [${transformedVector.join(', ')}]</p>
            </div>
        </div>
    `;
}

window.onload = function() {
    document.getElementById('vectorSize').value = "8";
    document.getElementById('vectorElements').value = "-6.5 2.1 8 -1.2 4.9 10.3 -2 0.5";
};