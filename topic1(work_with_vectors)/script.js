function processVectors() {
    const size = parseInt(document.getElementById('vectorSize').value);
    const elementsInput = document.getElementById('vectorElements').value.trim();

    if (isNaN(size) || size <= 0) {
        alert("Пожалуйста, введите корректную размерность вектора");
        return;
    }

    let vector;
    if (elementsInput) {
        vector = elementsInput.split(' ').map(Number);
        if (vector.some(isNaN)) {
            alert("Пожалуйста, введите корректные числовые значения");
            return;
        }
        if (vector.length !== size) {
            alert(`Количество введенных элементов (${vector.length}) не соответствует размерности (${size})`);
            return;
        }
    } else {
        vector = Array.from({length: size}, () => Math.round((Math.random() * 10 + 1) * 100) / 100);
    }

    task1(vector.slice());
    task2(vector.slice());
}

function task1(vector) {
    const sum = vector.reduce((a, b) => a + b, 0);
    const average = sum / vector.length;
    const count = vector.filter(x => x > average).length;

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 1</h2>
            <p><strong>Условие:</strong> Дан вещественный вектор А(n). Найти количество элементов этого вектора, больше среднего арифметического всех его элементов.</p>
            <div class="result">
                <p><strong>Исходный вектор:</strong> [${vector.join(', ')}]</p>
                <p><strong>Среднее арифметическое:</strong> ${average.toFixed(4)}</p>
                <p><strong>Количество элементов больше среднего:</strong> ${count}</p>
            </div>
        </div>
    `;
}

function task2(vector) {
    const maxElement = Math.max(...vector);
    const firstMaxIndex = vector.indexOf(maxElement);
    const maxCount = vector.filter(x => x === maxElement).length;

    let transformedVector = vector.slice();

    if (maxCount > 1) {
        for (let i = 0; i < firstMaxIndex; i++) {
            transformedVector[i] = vector[i] / 2;
        }
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 2</h2>
            <p><strong>Условие:</strong> Дан вещественный вектор A(n). Все элементы вектора, предшествующие первому максимальному элементу, разделить на 2, если элемент максимальный по величине встречается в векторе более чем один раз. В противном случае вектор оставить без изменения.</p>
            <div class="result">
                <p><strong>Исходный вектор:</strong> [${vector.join(', ')}]</p>
                <p><strong>Максимальный элемент:</strong> ${maxElement}</p>
                <p><strong>Индекс первого максимального элемента:</strong> ${firstMaxIndex}</p>
                <p><strong>Количество максимальных элементов:</strong> ${maxCount}</p>
                <p><strong>Преобразованный вектор:</strong> [${transformedVector.join(', ')}]</p>
                <p><strong>Примечание:</strong> ${maxCount > 1 ?
        'Максимальный элемент встречается более одного раза, поэтому элементы перед ним разделены на 2' :
        'Максимальный элемент встречается только один раз, вектор оставлен без изменений'}</p>
            </div>
        </div>
    `;
}

window.onload = function() {
    document.getElementById('vectorSize').value = "7";
    document.getElementById('vectorElements').value = "3.2 5.1 7.8 2.4 7.8 1.9 6.3";
}