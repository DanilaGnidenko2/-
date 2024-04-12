let display = document.querySelector('.display');

function AppendToDisplay(value) {
  display.value += value;
}

function ClearDisplay() {
  display.value = '';
}

function Calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
