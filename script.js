const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      if (resultShown && !isNaN(value)) {
        currentInput = value;
        resultShown = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
    resultShown = true;
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});
