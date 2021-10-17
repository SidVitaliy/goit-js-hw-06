const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
console.log(refs.span);
refs.input.addEventListener('input', inputValue)
function inputValue(event) {
    refs.span.style.fontSize = event.currentTarget.value + "px";

}

