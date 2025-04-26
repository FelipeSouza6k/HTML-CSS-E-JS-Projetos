function insertToDisplay(data) {
    document.querySelector("#display").value += data;
}
function clearDisplay() {
    document.querySelector("#display").value = "";
}
function backspace() {
    document.querySelector("#display")
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error!";
    }
}
