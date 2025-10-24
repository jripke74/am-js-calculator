const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = `(${currentResult} + 10) * 3 / 2 - 1`;

function add() {
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
