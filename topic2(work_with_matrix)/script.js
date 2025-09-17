function processMatrix() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const elementsInput = document.getElementById('matrixElements').value.trim();

    if (isNaN(size) || size <= 0) {
        alert("Пожалуйста, введите корректную размерность матрицы");
        return;
    }

    let matrix;
    if (elementsInput) {
        const rows = elementsInput.split(';');
        if (rows.length !== size) {
            alert(`Количество строк (${rows.length}) не соответствует размерности (${size})`);
            return;
        }

        matrix = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i].trim().split(' ').map(Number);
            if (row.length !== size) {
                alert(`Количество элементов в строке ${i+1} (${row.length}) не соответствует размерности (${size})`);
                return;
            }
            if (row.some(isNaN)) {
                alert("Пожалуйста, введите корректные числовые значения");
                return;
            }
            matrix.push(row);
        }
    } else {
        matrix = generateRandomMatrixData(size);
    }

    displayMatrix(matrix);
    task1(matrix);
    task2(matrix);
}

function generateRandomMatrixData(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * 10) - 3);
        }
        matrix.push(row);
    }
    return matrix;
}

function generateRandomMatrix() {
    const size = parseInt(document.getElementById('matrixSize').value) || 3;
    const matrix = generateRandomMatrixData(size);

    let matrixString = "";
    for (let i = 0; i < matrix.length; i++) {
        matrixString += matrix[i].join(' ');
        if (i < matrix.length - 1) matrixString += "; ";
    }

    document.getElementById('matrixElements').value = matrixString;
}

function displayMatrix(matrix) {
    let matrixHtml = '<table class="matrix">';
    for (let i = 0; i < matrix.length; i++) {
        matrixHtml += '<tr>';
        for (let j = 0; j < matrix[i].length; j++) {
            matrixHtml += `<td>${matrix[i][j]}</td>`;
        }
        matrixHtml += '</tr>';
    }
    matrixHtml += '</table>';

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `
        <div class="task">
            <h2>Исходная матрица</h2>
            ${matrixHtml}
        </div>
    `;
}

function task1(matrix) {
    let count = 0;

    for (let j = 0; j < matrix[0].length; j++) {
        let hasZero = false;
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0) {
                hasZero = true;
                break;
            }
        }
        if (!hasZero) {
            count++;
        }
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 1</h2>
            <p><strong>Условие:</strong> Определить количество столбцов, не содержащих ни одного нулевого элемента.</p>
            <div class="result">
                <p><strong>Количество столбцов без нулей:</strong> ${count}</p>
            </div>
        </div>
    `;
}

function task2(matrix) {
    const n = matrix.length;
    let minSum = Infinity;

    for (let k = 0; k < 2 * n - 1; k++) {
        let sum = 0;
        if (k < n) {
            for (let i = 0; i <= k; i++) {
                sum += matrix[i][n - 1 - k + i];
            }
        } else {
            for (let i = k - n + 1; i < n; i++) {
                sum += matrix[i][i - (k - n + 1)];
            }
        }

        if (sum < minSum) {
            minSum = sum;
        }
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача 2</h2>
            <p><strong>Условие:</strong> Найти минимум среди сумм элементов диагоналей, параллельных побочной диагонали матрицы.</p>
            <div class="result">
                <p><strong>Минимум среди сумм диагоналей:</strong> ${minSum}</p>
            </div>
        </div>
    `;
}

window.onload = function() {
    document.getElementById('matrixSize').value = "4";
    document.getElementById('matrixElements').value = "1 2 3 4; 0 5 6 7; 8 0 9 1; 2 3 0 4";
}