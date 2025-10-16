function showProblem(problemNumber) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('problem' + i).style.display = 'none';
        document.getElementById('nav-p' + i).classList.remove('current');
    }
    document.getElementById('problem' + problemNumber).style.display = 'block';
    document.getElementById('nav-p' + problemNumber).classList.add('current');
    jsConsole.clear();
}
showProblem(1);

function runProblem1() {
    jsConsole.clear();
    const arr = new Array(20);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }
    jsConsole.writeLine('The generated array is:');
    jsConsole.writeLine(`[${arr.join(', ')}]`);
}

function runProblem2() {
    jsConsole.clear();
    const str1 = jsConsole.read('#p2-string1');
    const str2 = jsConsole.read('#p2-string2');

    if (str1 < str2) {
        jsConsole.writeLine('The first string is lexicographically earlier.');
    } else if (str2 < str1) {
        jsConsole.writeLine('The second string is lexicographically earlier.');
    } else {
        jsConsole.writeLine('The strings are equal.');
    }
}

function runProblem3() {
    jsConsole.clear();
    const sequenceStr = jsConsole.read('#p3-sequence');
    const arr = sequenceStr.split(',').map(Number);

    if (arr.length === 0) {
        jsConsole.writeLine('The sequence is empty.');
        return;
    }

    let bestStart = 0;
    let bestLength = 1;
    let currentStart = 0;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            currentLength++;
        } else {
            currentStart = i;
            currentLength = 1;
        }

        if (currentLength > bestLength) {
            bestLength = currentLength;
            bestStart = currentStart;
        }
    }

    const resultSequence = arr.slice(bestStart, bestStart + bestLength);
    jsConsole.writeLine('The input sequence is:');
    jsConsole.writeLine(`[${arr.join(', ')}]`);
    jsConsole.writeLine('The maximum sequence is:');
    jsConsole.writeLine(`[${resultSequence.join(', ')}]`);
}

function runProblem4() {
    jsConsole.clear();
    const sequenceStr = jsConsole.read('#p4-sequence');
    const arr = sequenceStr.split(',').map(Number);

    if (arr.length === 0) {
        jsConsole.writeLine('The sequence is empty.');
        return;
    }

    const counts = {};
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    let mostFrequentNumber = arr[0];
    let maxCount = 1;

    for (const num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequentNumber = num;
        }
    }

    jsConsole.writeLine('The input sequence is:');
    jsConsole.writeLine(`{${arr.join(', ')}}`);
    jsConsole.writeLine(`The most frequent number is:`);
    jsConsole.writeLine(`${mostFrequentNumber} (${maxCount} times)`);
}