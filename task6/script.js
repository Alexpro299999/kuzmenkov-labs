
function replaceSpacesWithNbsp(text) {
    return text.replace(/ /g, '&amp;nbsp;');
}

function countNumberOccurrences(array, number) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    return count;
}

function replaceSpaces() {
    const text = document.getElementById('textInput').value;
    const result = replaceSpacesWithNbsp(text);

    document.getElementById('result1').innerHTML = `
        <h3>Результат:</h3>
        <p><strong>Исходный текст:</strong> ${text}</p>
        <p><strong>После замены:</strong> ${result}</p>
        <p><strong>Функция использована:</strong> replaceSpacesWithNbsp("${text}")</p>
    `;
}

function countOccurrences() {
    const arrayInput = document.getElementById('arrayInput').value;
    const number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number)) {
        document.getElementById('result2').innerHTML = `
            <div class="test-result error">
                <p>Пожалуйста, введите корректное число</p>
            </div>
        `;
        return;
    }

    const array = arrayInput.split(',').map(item => {
        const num = parseFloat(item.trim());
        return isNaN(num) ? item.trim() : num;
    });

    const count = countNumberOccurrences(array, number);

    document.getElementById('result2').innerHTML = `
        <h3>Результат:</h3>
        <p><strong>Массив:</strong> [${array.join(', ')}]</p>
        <p><strong>Искомое число:</strong> ${number}</p>
        <p><strong>Количество вхождений:</strong> ${count}</p>
        <p><strong>Функция использована:</strong> countNumberOccurrences([${array.join(', ')}], ${number})</p>
    `;
}

function runTest() {
    const testResults = [];

    const testArray1 = [1, 2, 3, 2, 2, 4, 2];
    const testNumber1 = 2;
    const expectedResult1 = 4;
    const actualResult1 = countNumberOccurrences(testArray1, testNumber1);
    const test1Passed = actualResult1 === expectedResult1;

    testResults.push({
        name: "Тест 1",
        input: `Массив: [${testArray1.join(', ')}], Число: ${testNumber1}`,
        expected: expectedResult1,
        actual: actualResult1,
        passed: test1Passed
    });

    const testArray2 = [5, 5, 5, 5, 5];
    const testNumber2 = 5;
    const expectedResult2 = 5;
    const actualResult2 = countNumberOccurrences(testArray2, testNumber2);
    const test2Passed = actualResult2 === expectedResult2;

    testResults.push({
        name: "Тест 2",
        input: `Массив: [${testArray2.join(', ')}], Число: ${testNumber2}`,
        expected: expectedResult2,
        actual: actualResult2,
        passed: test2Passed
    });

    const testArray3 = [1, 3, 5, 7, 9];
    const testNumber3 = 2;
    const expectedResult3 = 0;
    const actualResult3 = countNumberOccurrences(testArray3, testNumber3);
    const test3Passed = actualResult3 === expectedResult3;

    testResults.push({
        name: "Тест 3",
        input: `Массив: [${testArray3.join(', ')}], Число: ${testNumber3}`,
        expected: expectedResult3,
        actual: actualResult3,
        passed: test3Passed
    });

    const testArray4 = [];
    const testNumber4 = 1;
    const expectedResult4 = 0;
    const actualResult4 = countNumberOccurrences(testArray4, testNumber4);
    const test4Passed = actualResult4 === expectedResult4;

    testResults.push({
        name: "Тест 4 (пустой массив)",
        input: `Массив: [], Число: ${testNumber4}`,
        expected: expectedResult4,
        actual: actualResult4,
        passed: test4Passed
    });

    let resultHTML = '<h3>Результаты тестирования:</h3>';
    let allPassed = true;

    testResults.forEach(test => {
        allPassed = allPassed && test.passed;
        resultHTML += `
            <div class="test-result ${test.passed ? 'success' : 'error'}">
                <p><strong>${test.name}:</strong> ${test.passed ? 'Пройден' : 'Не пройден'}</p>
                <p><strong>Входные данные:</strong> ${test.input}</p>
                <p><strong>Ожидаемый результат:</strong> ${test.expected}</p>
                <p><strong>Фактический результат:</strong> ${test.actual}</p>
            </div>
        `;
    });

    resultHTML += `
        <div class="test-result ${allPassed ? 'success' : 'error'}">
            <p><strong>Общий результат:</strong> ${allPassed ? 'Все тесты пройдены успешно!' : 'Некоторые тесты не пройдены!'}</p>
        </div>
    `;

    document.getElementById('result2').innerHTML = resultHTML;
}

window.onload = function() {
    replaceSpaces();

    countOccurrences();
};