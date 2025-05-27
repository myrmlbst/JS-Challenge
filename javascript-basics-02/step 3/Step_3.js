const displayDiv = document.getElementById('displayText');
const inputElement = document.getElementById('name');

inputElement.addEventListener('input', function () {
  displayDiv.textContent = inputElement.value;
});