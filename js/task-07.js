const inputEl = document.querySelector('#font-size-control');
const texstEl = document.querySelector("#text");

inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});