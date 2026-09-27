let count = 0;

const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
    alert(count);

    count++;

    counter.innerText = count;
});