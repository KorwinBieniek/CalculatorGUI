let block = false;
let add_minus = '';

const loadScript = async (url) => {
    const response = await fetch(url)
    const script = await response.text()
    eval(script)
}

const scriptUrl = "https://code.jquery.com/jquery-3.5.0.js"
loadScript(scriptUrl)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return a ** b;
}

function factorial(num) {
    var result = num;

    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result = result * num;

    }

    return result;
}

function clearScreen() {
    var screen = document.getElementById('text');
    screen.innerText = '';
}

function removeSign() {
    var screen = document.getElementById('text');
    screen.innerText = screen.innerText.slice(0, -1)
}

function clearAll() {
    clearScreen();
    showHistory('');
}

function showHistory(text) {
    var upper_text = document.getElementById('upper_text');
    upper_text.innerText = text;
}

function checkNumFirst(button_val) {
    var screen = document.getElementById('text');
    text = screen.innerText
    text += button_val.value;
    let wordsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return wordsArray.some(w => text.includes(w))
}

function showOnScreen(button_val) {
    if (block) {
        clearScreen();
        block = false;
    }

    var screen = document.getElementById('text');

    if (!checkNumFirst(button_val)) {
        screen.innerText = 'You have to put a number first!';
        block = true;
    } else {
        if (screen.innerText.includes('.') && button_val.value == '.') {
            screen.innerText = screen.innerText
        } else screen.innerText += button_val.value;
    }
}

function changeSign() {
    if (!checkNumFirst('-')) {
        screen.innerText = 'You have to put a number first!';
        block = true;
    } else {
        var screen = document.getElementById('text');
        if (screen.innerText[0] == '-') {
            screen.innerText = screen.innerText.replace(screen.innerText.charAt(0), "");
        }
        else {
            screen.innerText = screen.innerText.replace(/^/, '-');
        }
    }
}

function addOnScreen() {
    var screen = document.getElementById('text');

    screen_text = screen.textContent;
    showHistory(screen.innerText)
    if (screen_text.includes('+')) {
        text = screen.innerText.split("+")
        clearScreen()
        screen.innerText += add(parseFloat(text[0]), parseFloat(text[1]));
    }
    else if (screen_text.includes('−')) {
        text = screen.innerText.split("−")

        clearScreen()
        screen.innerText += subtract(parseFloat(add_minus + text[0]), parseFloat(text[1]));
    }
    else if (screen_text.includes('*')) {
        text = screen.innerText.split("*")
        clearScreen()
        screen.innerText += multiply(parseFloat(text[0]), parseFloat(text[1]));
    }
    else if (screen_text.includes('/')) {
        text = screen.innerText.split("/")
        clearScreen()
        if (text[1] == '0') {
            screen.innerText = 'Cannot divide by 0';
            block = true;
        } else {
            screen.innerText += divide(parseFloat(text[0]), parseFloat(text[1]));
        }
    }
    else if (screen_text.includes('^')) {
        text = screen.innerText.split("^")
        clearScreen()
        screen.innerText += power(parseFloat(text[0]), parseFloat(text[1]));
    }
    else if (screen_text.includes('!')) {
        text = screen.innerText.slice(0, -1)
        clearScreen()
        screen.innerText = factorial(parseFloat(text));
    }
}

document.addEventListener("keydown", function (event) {
    let wordsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '^', '.', 'Enter',
        '\\', 'Backspace', 'Escape'];
    if (wordsArray.some(w => event.key.includes(w))) document.getElementById(event.key).click();
    if (event.key === '!') {
        document.getElementById(event.key).click();
        document.getElementById('Enter').click();
    }
    // if (event.key >= 0 && event.key <= 9) document.getElementById(event.key).click();
    // if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' 
    // || event.key === '!' || event.key === '^' || event.key === '.'|| event.key === 'Enter'
    // || event.key === '\\') document.getElementById(event.key).click();
    // if (event.key === 'Backspace') document.getElementById(event.key).click();
    // if (event.key === 'Escape') document.getElementById(event.key).click();
});