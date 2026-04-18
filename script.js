const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const constantTextEl = document.getElementById('constant-text-el');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputEl.value;
    outputEl.textContent += value + '\n';
    navigator.clipboard.writeText(value);
    window.open(`https://www.google.com/search?q=` + value);
});