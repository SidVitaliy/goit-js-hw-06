const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

function onInputChange (){
    if (refs.span === "") {
        return refs.span.textContent = 'Anonymous'
    }
    return refs.span.textContent = refs.input.value.trim()
}

refs.input.addEventListener('input', onInputChange)