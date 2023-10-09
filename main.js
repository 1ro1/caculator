let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value).toFixed(2);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearAll() {
    display.value = "";
}

function back() {
    display.value = display.value.slice(0, -1);
}
