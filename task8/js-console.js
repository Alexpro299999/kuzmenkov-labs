(function () {
    function createJsConsole(selector) {
        var self = this;
        var consoleElement = document.querySelector(selector);

        if (consoleElement.className) {
            consoleElement.className = consoleElement.className + " js-console";
        } else {
            consoleElement.className = "js-console";
        }

        var textArea = document.createElement("div");
        consoleElement.appendChild(textArea);

        self.write = function jsConsoleWrite(text) {
            var textLine = document.createElement("span");
            textLine.innerHTML = text;
            textArea.appendChild(textLine);
            consoleElement.scrollTop = consoleElement.scrollHeight;
        };

        self.writeLine = function jsConsoleWriteLine(text) {
            self.write(text);
            textArea.appendChild(document.createElement("br"));
        };

        self.clear = function jsConsoleClear() {
            textArea.innerHTML = "";
        };

        return self;
    }

    jsConsole = new createJsConsole("#console");
})();