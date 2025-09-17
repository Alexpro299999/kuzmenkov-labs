function ArrayX5() {
    jsConsole.writeLine("01-ArrayX5: Создание массива из 20 чисел");

    const array = [];
    for (let i = 0; i < 20; i++) {
        array[i] = i * 5;
    }

    jsConsole.writeLine("Полученный массив:");
    for (let i = 0; i < array.length; i++) {
        jsConsole.writeLine(`${i}: ${array[i]}`);
    }
}

function CompareCharArray() {
    jsConsole.writeLine("02-CompareCharArray: Сравнение двух строк лексикографически");

    const string1 = jsConsole.read("#string1");
    const string2 = jsConsole.read("#string2");

    jsConsole.writeLine(`Строка 1: ${string1}`);
    jsConsole.writeLine(`Строка 2: ${string2}`);

    if (string1 < string2) {
        jsConsole.writeLine("The first array is earlier.");
    } else if (string1 > string2) {
        jsConsole.writeLine("The second array is earlier.");
    } else {
        jsConsole.writeLine("Arrays are equal.");
    }
}

function MaximalSequence() {
    jsConsole.writeLine("03-MaximalSequence: Находит максимальную последовательность равных элементов");

    const sequence = jsConsole.read("#sequence").split(',').map(Number);

    jsConsole.writeLine("The input sequence is:");
    jsConsole.writeLine(sequence.join(' '));

    let maxLength = 0;
    let maxStartIndex = 0;
    let currentLength = 1;
    let currentStartIndex = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] === sequence[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIndex = currentStartIndex;
            }
            currentLength = 1;
            currentStartIndex = i;
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
    }

    const result = sequence.slice(maxStartIndex, maxStartIndex + maxLength);
    jsConsole.writeLine(`The maximum sequence is:`);
    jsConsole.writeLine(result.join(' '));
}

function MaxIncreasingSequence() {
    jsConsole.writeLine("04-MaxIncreasingSequence: Находит максимальную возрастающую последовательность");

    const sequence = jsConsole.read("#sequence").split(',').map(Number);

    jsConsole.writeLine("The input sequence is:");
    jsConsole.writeLine(sequence.join(' '));

    let maxLength = 0;
    let maxStartIndex = 0;
    let currentLength = 1;
    let currentStartIndex = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] > sequence[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIndex = currentStartIndex;
            }
            currentLength = 1;
            currentStartIndex = i;
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
    }

    const result = sequence.slice(maxStartIndex, maxStartIndex + maxLength);
    jsConsole.writeLine(`The maximum increasing sequence is:`);
    jsConsole.writeLine(result.join(' '));
}

function SelectionSort() {
    jsConsole.writeLine("05-SelectionSort: Сортировка выбором");

    const array = jsConsole.read("#array").split(',').map(Number);

    jsConsole.writeLine("Original array:");
    jsConsole.writeLine(array.join(' '));

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    jsConsole.writeLine("Sorted array:");
    jsConsole.writeLine(array.join(' '));
}

function MostFrequent() {
    jsConsole.writeLine("06-MostFrequent: Находит наиболее частое число в массиве");

    const array = jsConsole.read("#array").split(',').map(Number);

    jsConsole.writeLine("Input array:");
    jsConsole.writeLine(array.join(' '));

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentNumber = null;

    for (const num of array) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentNumber = num;
        }
    }

    jsConsole.writeLine(`${mostFrequentNumber} (${maxCount} times)`);
}

function BinarySearch() {
    jsConsole.writeLine("07-BinarySearch: Бинарный поиск");

    const sortedArray = jsConsole.read("#sortedArray").split(',').map(Number);
    const target = jsConsole.readInt("#target");

    jsConsole.writeLine(`Sorted array: ${sortedArray.join(' ')}`);
    jsConsole.writeLine(`Target: ${target}`);

    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    const index = binarySearch(sortedArray, target);

    if (index !== -1) {
        jsConsole.writeLine(`Found at index: ${index}`);
    } else {
        jsConsole.writeLine(`Not found`);
    }
}

function selectScript(scriptName) {
    document.querySelectorAll(".header a").forEach(link => {
        link.classList.remove("current");
    });

    event.target.classList.add("current");

    jsConsole.writeLine("");

    const inputs = document.getElementById("inputs");
    inputs.innerHTML = "";

    if (scriptName === "CompareCharArray") {
        inputs.innerHTML = `
            <input type="text" id="string1" placeholder="String 1" value="123">
            <input type="text" id="string2" placeholder="String 2" value="111">
        `;
    } else if (scriptName === "MaximalSequence" || scriptName === "MaxIncreasingSequence") {
        inputs.innerHTML = `
            <input type="text" id="sequence" placeholder="Sequence (comma separated)" value="2,1,1,2,3,3,2,2,2,1">
        `;
    } else if (scriptName === "SelectionSort" || scriptName === "MostFrequent") {
        inputs.innerHTML = `
            <input type="text" id="array" placeholder="Array (comma separated)" value="4,1,1,4,2,3,4,4,1,2,4,9,3">
        `;
    } else if (scriptName === "BinarySearch") {
        inputs.innerHTML = `
            <input type="text" id="sortedArray" placeholder="Sorted Array (comma separated)" value="1,2,3,4,5,6,7,8,9,10">
            <input type="number" id="target" placeholder="Target" value="4">
        `;
    } else if (scriptName === "ArrayX5") {
        inputs.style.display = "none";
    }

    window[scriptName]();
}

function execute() {
    const activeTab = document.querySelector(".header a.current");
    if (activeTab) {
        const scriptName = activeTab.textContent.replace(/\d+-/, "").replace(/-\w+$/, "");
        window[scriptName]();
    }
}


window.onload = function() {
    // Установка первого таба как активного
    document.querySelector(".header a").classList.add("current");
    selectScript("ArrayX5");
};