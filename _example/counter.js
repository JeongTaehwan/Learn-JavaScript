const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

plus.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

minus.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}