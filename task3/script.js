function processText() {
    const text = document.getElementById('inputText').value.trim();

    if (!text) {
        alert("Пожалуйста, введите текст для обработки");
        return;
    }

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `
        <div class="task">
            <h2>Исходный текст</h2>
            <div class="original">
                <p>${text}</p>
            </div>
        </div>
    `;

    task(text);
}

function task(text) {
    const words = text.match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];

    if (words.length === 0) {
        document.getElementById('results').innerHTML += `
            <div class="task">
                <h2>Результат обработки</h2>
                <div class="result">
                    <p>В тексте не найдено слов</p>
                </div>
            </div>
        `;
        return;
    }

    const maxLength = Math.max(...words.map(word => word.length));
    const targetLength = maxLength / 2;
    const maxWord = words.find(word => word.length === maxLength);

    const processedText = text.replace(/[a-zA-Zа-яА-ЯёЁ]+/g, (word) => {
        if (word.length === targetLength) {
            return maxWord;
        }
        return word;
    });

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML += `
        <div class="task">
            <h2>Задача</h2>
            <p><strong>Условие:</strong> Все слова, длина которых в 2 раза меньше длины слова максимальной длины, заменить на слово максимальной длины.</p>
            <div class="result">
                <p><strong>Слова в тексте:</strong> ${words.join(', ')}</p>
                <p><strong>Максимальная длина слова:</strong> ${maxLength}</p>
                <p><strong>Целевая длина для замены:</strong> ${targetLength}</p>
                <p><strong>Слово максимальной длины:</strong> ${maxWord}</p>
                <h3>Обработанный текст:</h3>
                <div class="processed">
                    <p>${processedText}</p>
                </div>
            </div>
        </div>
    `;
}

function loadExample() {
    document.getElementById('inputText').value = "Мама walks slowly. Прекрасный день на улице. I go to store.";
}