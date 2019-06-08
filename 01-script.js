let first = document.querySelector("#first");
let second = document.querySelector("#second");
let times = document.querySelector("#times");
let btn = document.querySelector("button");
let ul = document.createElement("ul");
document.body.appendChild(ul);
let lis;

let firstValue;
let secondValue;
let numbers = [];

let inputFirst = (e) => {
    firstValue = e.target.value;
    numbers[0] = parseInt(firstValue);
}

let inputSecond = (e) => {
    secondValue = e.target.value;
    numbers[1] = parseInt(secondValue);
}

let generaton = () => {

    lis = document.getElementsByTagName("li");

    if (lis.length > 0) {
        for (let index = lis.length - 1; index >= 0; index--) {
            lis[index].parentNode.removeChild(lis[index]);
        }
    }

    for (let i = 0; i < (parseInt(times.value) - 2); i++) {
        let newNumber = parseInt(numbers[numbers.length - 1]) + parseInt(numbers[numbers.length - 2]);
        numbers.push(newNumber);
    }

    for (let j = 0; j < numbers.length; j++) {
        let li = document.createElement("li");
        li.textContent = numbers[j] + "; ";
        document.body.appendChild(li);
    }

    first.value = "";
    second.value = "";
    times.value = "";
    numbers = [];
}

btn.addEventListener("click", generaton);
first.addEventListener("input", inputFirst);
second.addEventListener("input", inputSecond);