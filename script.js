const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    output.textContent += value + '\n';

    window.open(`https://www.google.com/search?q=` + value);
});