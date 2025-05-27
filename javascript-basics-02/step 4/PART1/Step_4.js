// resets without validating whether user actually wants to reset or not

const form = document.querySelector('form');
const resetButton = form.querySelector('button[type="button"]');

resetButton.addEventListener('click', function () {
  form.reset();
});