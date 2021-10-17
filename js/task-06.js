const inputValid = document.querySelector('#validation-input');
const inputValidLength = inputValid.getAttribute('data-length');
const inputNumValidLength = Number(inputValidLength);

inputValid.addEventListener('blur', onInputBlur)
function onInputBlur() {
    if (inputValid.value.length === inputNumValidLength) {
        return inputValid.classList.add('valid'),
        inputValid.classList.remove('invalid');
       
    } 
        return inputValid.classList.add('invalid'),
        inputValid.classList.remove('valid');
    
}

