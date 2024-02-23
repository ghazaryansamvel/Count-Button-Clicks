let button = document.getElementById('clickButton');
let output = document.getElementById('output');

let count = 0;

function updateCount () {
    output.textContent = count;
}

button.addEventListener('click', function () {
    ++count;
    updateCount();
});

updateCount();