const numbers = document.querySelectorAll("#num");
const input = document.querySelector("#cal-input")

numbers.forEach((num) => {
    num.onclick = () => {
        input.value += num.value
    }
})
