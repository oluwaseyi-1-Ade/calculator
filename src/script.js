const numbers = document.querySelectorAll("#num");
const input = document.querySelector("#cal-input");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete");

clearBtn.classList.add("active:bg-blue-800");
numbers.forEach((num) => {
    num.classList.add("active:bg-gray-400");

    num.onclick = () => {
        input.value += num.value;
    };
});

clearBtn.onclick = () => {
    input.value = "";
};

deleteBtn.onclick = () => {
    let inputArray = [...input.value];
    for (let i = 0; i < inputArray.length; i++) {

        currentInput = inputArray.pop([i]);
        console.log(currentInput);
    }
};
