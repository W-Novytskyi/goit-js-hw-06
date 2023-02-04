const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

function onTypingInInput(event) {
    if (event.currentTarget.value.trim() !== '') {
        outputNameEl.textContent = event.currentTarget.value;
    } else outputNameEl.textContent = 'Anonymous';
}
inputNameEl.addEventListener('input', onTypingInInput);