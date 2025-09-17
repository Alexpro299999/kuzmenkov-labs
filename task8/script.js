jsConsole.writeLine("Результат вызова conc(1, 1): " + conc(1, 1));

function conc(a, b) {
    if (isNaN(a) || a <= 0) {
        jsConsole.clear();
        jsConsole.writeLine("Ошибка: Введите положительное число");
        return;
    }
    if (isNaN(b) || b <= 0) {
        jsConsole.clear();
        jsConsole.writeLine("Ошибка: Введите положительное число");
        return;
    }
    return a + "" + b;
}

var comp = function(a, b) {
    if (a === b) {
        return 1;
    } else {
        return -1;
    }
};

var anonymousFunc = function() {
    jsConsole.writeLine("message in console");
};

function fib(n) {
    if (n <= 2) {
        return 1;
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

function testConc() {
    const a = parseInt(document.getElementById('concA').value);
    const b = parseInt(document.getElementById('concB').value);

    jsConsole.clear();
    jsConsole.writeLine("=== Тестирование Function Declaration Statement ===");
    jsConsole.writeLine("Функция conc объединяет два параметра в строку");
    jsConsole.writeLine("Параметр a: " + a);
    jsConsole.writeLine("Параметр b: " + b);
    jsConsole.writeLine("Результат: " + conc(a, b));
}

function testComp() {
    const a = document.getElementById('compA').value;
    const b = document.getElementById('compB').value;

    jsConsole.clear();
    jsConsole.writeLine("=== Тестирование Function Definition Expression ===");
    jsConsole.writeLine("Функция comp сравнивает два параметра");
    jsConsole.writeLine("Параметр a: " + a);
    jsConsole.writeLine("Параметр b: " + b);
    jsConsole.writeLine("Результат: " + comp(a, b));
}

function testAnonymous() {
    jsConsole.clear();
    jsConsole.writeLine("=== Тестирование Anonymous Function ===");
    jsConsole.writeLine("Вызов анонимной функции:");
    anonymousFunc();
}

function calculateFib() {
    const n = parseInt(document.getElementById('fibInput').value);

    if (isNaN(n) || n <= 0) {
        jsConsole.clear();
        jsConsole.writeLine("Ошибка: Введите положительное число");
        return;
    }

    jsConsole.clear();
    jsConsole.writeLine("=== Вычисление чисел Фибоначчи до n = " + n + " ===");

    jsConsole.writeLine("fib(" + n + ") = " + fib(n));
}

function testFib() {
    jsConsole.clear();
    jsConsole.writeLine("=== Тестирование функции Фибоначчи ===");

    const n = parseInt(document.getElementById('fibInput').value);

    for (let i = 1; i <= n; i++) {
        jsConsole.writeLine("fib(" + i + ") = " + fib(i));
    }
}