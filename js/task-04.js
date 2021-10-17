const btns = {
decrBtn:document.querySelector('button[data-action="decrement"]'),
incrBtn:document.querySelector('button[data-action="increment"]'),
spanValue:document.querySelector('#value')
}



let counterValue = 0;

const decrValues = () => {
    counterValue -= 1;
    btns.spanValue.textContent = counterValue;
}

const incrValues = () => {
    counterValue += 1;
    btns.spanValue.textContent = counterValue;
}

btns.decrBtn.addEventListener("click", decrValues);
btns.incrBtn.addEventListener("click", incrValues)