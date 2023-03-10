const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
    
function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
     inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
};